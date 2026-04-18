package main

import "fmt"

func calculatePower(watts int, hours int) int {
	return watts * hours
}

func main() {
	watts := 50
	hours := 3
	total := calculatePower(watts, hours)
	fmt.Printf("Total energy usage: %d Wh\n", total)
}
