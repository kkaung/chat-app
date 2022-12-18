package route

import (
	"chat-app/controllers"

	"github.com/gin-gonic/gin"
)

func UserRoute(r *gin.Engine) {
	endpoint := "/api/users"

	r.GET(endpoint, controller.GetUsers)

	r.DELETE(endpoint+"/:id", controller.DeleteUserById)

	r.DELETE(endpoint+"/all", controller.DeleteAllUsers)
}
