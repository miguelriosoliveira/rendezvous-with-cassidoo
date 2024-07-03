import { FruitStand } from './FruitStand';

describe('#FruitStand', () => {
	let stand: FruitStand;

	beforeEach(() => {
		stand = new FruitStand();
	});

	it('should add a fruit correctly', () => {
		stand.addFruit('apple', 10, 0.5);
		expect(stand.fruits).toStrictEqual({ apple: { quantity: 10, price: 0.5 } });
	});

	it('should throw an error when adding an existing fruit', () => {
		stand.addFruit('apple', 10, 0.5);
		expect(() => stand.addFruit('apple', 5, 0.2)).toThrow(
			'Fruit already exists. Use updateQuantity to change the quantity.',
		);
	});

	it('should update the quantity of an existing fruit correctly', () => {
		stand.addFruit('banana', 5, 0.2);
		stand.updateQuantity('banana', 10);
		expect(stand.fruits.banana.quantity).toBe(10);
	});

	it('should throw an error when updating a non-existent fruit', () => {
		expect(() => stand.updateQuantity('cherry', 20)).toThrow('Fruit not found.');
	});

	it('should calculate the total value correctly', () => {
		stand.addFruit('apple', 10, 0.5);
		stand.addFruit('banana', 5, 0.2);
		stand.addFruit('cherry', 20, 0.1);
		expect(stand.totalValue()).toBe(10 * 0.5 + 5 * 0.2 + 20 * 0.1);
	});
});
