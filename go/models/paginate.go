package models

import (
	"math"

	"github.com/gofiber/fiber"
	"gorm.io/gorm"
)

func Paginate(db *gorm.DB, entity Entity, page int) fiber.Map {
	limit := 15
	offset := (page - 1) * limit

	data := entity.Take(db, limit, offset)

	total := entity.Count(db)

	db.Model(&Product{}).Count(&total)

	return fiber.Map{
		"data": data,
		"meta": fiber.Map{
			"total":     total,
			"page":      page,
			"last_page": math.Ceil(float64(int(total) / limit)),
		},
	}
}
