package models

import (
	"os"
	
	"github.com/go-redis/redis/v8"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

var RdsClient *redis.Client
var PSQLClient *gorm.DB

func ConnectRedis() {

	REDIS_DB_URL := os.Getenv("REDIS_DB_URL")

	opt, err := redis.ParseURL(REDIS_DB_URL)

	if err != nil {
		panic(err)
	}

	RdsClient = redis.NewClient(opt)
}

func ConnectPSQL() {
	dsn := os.Getenv("PSQL_DB_URL")
	db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})

	if err != nil {
		panic(err)
	}

	// Migrate the schema to the database
	db.AutoMigrate(&User{})

	PSQLClient = db

}
