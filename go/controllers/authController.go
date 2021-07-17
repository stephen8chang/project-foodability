package controllers

import (
	"../models"
	"github.com/gofiber/fiber"
)

func Register(c *fiber.Ctx) error {
	user := models.User{
		FirstName: "John",
		LastName:  "Doe",
	}

	return c.JSON(user)
}