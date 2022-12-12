package route

import (
	"chat-app/controller"

	"github.com/gin-gonic/gin"
)

func AuthRoute(r *gin.Engine) {

	endpoint := "/api/auth"

	r.POST(endpoint+"/register", controller.RegisterUser)
	r.POST(endpoint+"/login", controller.LoginUser)
}
