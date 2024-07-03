/*
Define a FruitStand class that allows you to add different types of fruits with their quantities and
prices, update them, and calculate the total value of all the fruits in the stand.
Implement the following methods:
	- addFruit(name, quantity, price)
	- updateQuantity(name, quantity)
	- totalValue()!

Example usage:

// Create a new fruit stand
let stand = FruitStand()

// Add fruits to the stand
stand.addFruit("apple", 10, 0.5)
stand.addFruit("banana", 5, 0.2)
stand.addFruit("cherry", 20, 0.1)

// Update the quantity of an existing fruit
stand.updateQuantity("banana", 10)

// Calculate the total value of all fruits in the stand
console.log(stand.totalValue())
*/

interface FruitData {
	quantity: number;
	price: number;
}

export class FruitStand {
	constructor(public fruits: Record<string, FruitData> = {}) {}

	addFruit(name: string, quantity: number, price: number) {
		if (this.fruits[name]) {
			throw new Error('Fruit already exists. Use updateQuantity to change the quantity.');
		}
		this.fruits[name] = { quantity, price };
	}

	updateQuantity(name: string, quantity: number) {
		if (!this.fruits[name]) {
			throw new Error('Fruit not found.');
		}
		this.fruits[name] = { ...this.fruits[name], quantity };
	}

	totalValue() {
		return Object.values(this.fruits).reduce(
			(total, { quantity, price }) => total + quantity * price,
			0,
		);
	}
}
