package services

import (
	"chat-app/models"
	"errors"
	"fmt"
	"os"
	"time"

	"github.com/dgrijalva/jwt-go"
	"golang.org/x/crypto/bcrypt"
)

func Register(u *models.User) error {
	var err error

	// Check if the user is already registered
	fResult := models.PSQLClient.Find(&u, "email = ?", u.Email)

	if fResult.RowsAffected != 0 {
		err = errors.New("user already registered")
		return err
	}

	bPass := []byte(u.Password)

	hash, err := bcrypt.GenerateFromPassword(bPass, bcrypt.DefaultCost)

	u.Password = string(hash)

	if err != nil {
		err = errors.New("unable to hash password")
		return err
	}

	result := models.PSQLClient.Create(&u)

	if result.Error != nil || result.RowsAffected == 0 {
		err = errors.New("unable to create user")
		return err
	}

	return err
}

func Login(u *models.User) (string, error) {
	var err error

	fmt.Println(u.Password)
	bPass := []byte(u.Password)

	fResult := models.PSQLClient.Find(&u, "email = ?", u.Email)

	if fResult.RowsAffected == 0 {
		err = errors.New("invalid credentials")
		return "", err
	}

	// Validate the password
	error := bcrypt.CompareHashAndPassword([]byte(u.Password), bPass)

	if error != nil {
		err = errors.New("invalid credentials")
		return "", err
	}

	// Get Jwt signed token
	claims := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims{
		"sub":  "1234567890",
		"name": u.Username,
		"iat":  time.Now().Unix(),
	})

	token, err := claims.SignedString([]byte(os.Getenv("MY_SECRET")))

	if err != nil {
		return "", err
	}

	return token, nil
}
