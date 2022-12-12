package services

import (
	"chat-app/models"
	"fmt"
)

func GetUsers(us *[]models.User) {
	models.PSQLClient.Find(&us)
}

func DeleteAllUsers(us *[]models.User) {
	// Delete all users
	models.PSQLClient.Where("username = Kaung").Delete(&us)
}

func DeleteUserById(id string) {
	result := models.PSQLClient.Delete(&models.User{}, id)

	fmt.Println(result.RowsAffected)
}
