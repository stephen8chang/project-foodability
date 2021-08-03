package main

import (
	"log"
	"os"

	"./database"
	"./routes"
	"github.com/gofiber/fiber"
	"github.com/gofiber/fiber/middleware/cors"
)

func serveStatic(app *fiber.App) {
	app.Static("/", "./build")
}

func main() {
	database.Connect()

	app := fiber.New()

	app.Use(cors.New(cors.Config{
		AllowCredentials: true,
	}))

	serveStatic(app)

	routes.Setup(app)

	// app.Listen(":8000")
	port := os.Getenv("PORT")
	if port == "" {
		port = ":8000"

	}
	log.Printf("Listening on port %s\n\n", port)
	app.Listen(port)
}
