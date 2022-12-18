package controller

import (
	"chat-app/models"
	"chat-app/services"

	"net/http"

	"github.com/gin-gonic/gin"
)

func GetUsers(c *gin.Context) {

	var users []models.User

	services.GetUsers(&users)

	c.JSON(http.StatusOK, gin.H{
		"success": true,
		// "data":    users,
	})
}

func DeleteAllUsers(c *gin.Context) {
	var users []models.User

	services.DeleteAllUsers(&users)

	c.JSON(http.StatusOK, gin.H{"success": true, "data": users})
}

func DeleteUserById(c *gin.Context) {
	var user models.User

	id := c.Params.ByName("id")

	services.DeleteUserById(id)

	c.JSON(http.StatusOK, gin.H{"success": true, "data": user})
}
