package main

import (
	"chat-app/models"
	"chat-app/route"
	"os"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	_ "github.com/joho/godotenv/autoload"
)

func main() {
	r := gin.New()

	// Middlewares
	r.Use(gin.Logger())
	r.Use(gin.Recovery())
	r.Use(cors.Default())

	// Connect to database
	models.ConnectPSQL()
	models.ConnectRedis()

	// Routes
	route.AuthRoute(r)
	route.UserRoute(r)

	PORT := os.Getenv("PORT")

	r.Run(":" + PORT)
}
