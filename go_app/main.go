package main

import (
	"fmt"
)

func main() {
	// Read the lengths of the sides from the user
	var a, b, c float64
	fmt.Println("Enter the lengths of the triangle's sides:")
	fmt.Print("Side A: ")
	fmt.Scanln(&a)
	fmt.Print("Side B: ")
	fmt.Scanln(&b)
	fmt.Print("Side C: ")
	fmt.Scanln(&c)

	// Check the type of the triangle
	var triangleType string
	getTriangleType(a, b, c, &triangleType)

	// Print the result
	fmt.Println("Triangle Type:", triangleType)
}

func getTriangleType(a, b, c float64, triangleType *string) {
	if a == b && b == c {
		*triangleType = "Equilateral"
	} else if a == b || b == c || a == c {
		*triangleType = "Isosceles"
	} else {
		*triangleType = "Scalene"
	}
	fmt.Println("\nDone.")
}
