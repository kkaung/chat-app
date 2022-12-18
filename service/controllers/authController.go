package controller

import (
	"chat-app/models"
	"chat-app/services"
	"net/http"

	"github.com/gin-gonic/gin"
)

func RegisterUser(c *gin.Context) {

	var user models.User

	c.ShouldBindJSON(&user)

	err := services.Register(&user)

	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"success": false, "message": err.Error()})
		return
	}

	c.JSON(http.StatusCreated, gin.H{"success": true, "data": user})
}

func LoginUser(c *gin.Context) {

	var user models.User

	c.ShouldBindJSON(&user)

	token, err := services.Login(&user)

	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"success": true, "message": err.Error()})
		return
	}

	c.JSON(http.StatusCreated, gin.H{"success": true, "token": token})
}
