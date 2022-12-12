package models

import "time"

type User struct {
	ID        int    `json:"id" gorm:"primaryKey"`
	Username  string `json:"username" `
	Email     string `json:"email" `
	Password  string `json:"password" `
	CreatedAt time.Time
	UpdatedAt time.Time
}

type RegisterUser struct {
	Username  string `json:"username" binding:"required"`
    Email     string `json:"email" binding:"required"`
    Password  string `json:"password" binding:"required"`
}
