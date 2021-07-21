package database

import (
	"../models"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

var DB *gorm.DB

func Connect() {
	database, err := gorm.Open(mysql.Open("root:Remake888!@/sys"), &gorm.Config{})

	if err != nil {
		panic("Could not connect to the database!!")
	}

	DB = database

	database.AutoMigrate(&models.User{}, &models.Role{})
}
