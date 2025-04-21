import { calculateIngredients } from './calculateIngredients';

describe('#calculateIngredients', () => {
	it('calculates correct amounts for integer servings', () => {
		const ingredients = [
			{ name: 'flour', amount: 200 },
			{ name: 'sugar', amount: 100 },
			{ name: 'eggs', amount: 2 },
		];
		expect(calculateIngredients(ingredients, 3)).toStrictEqual([
			{ name: 'flour', amount: 600 },
			{ name: 'sugar', amount: 300 },
			{ name: 'eggs', amount: 6 },
		]);
	});

	it('returns an empty array when there are no ingredients', () => {
		expect(calculateIngredients([], 5)).toStrictEqual([]);
	});

	it('returns zero amounts for zero target servings', () => {
		const ingredients = [
			{ name: 'milk', amount: 250 },
			{ name: 'butter', amount: 50 },
		];
		expect(calculateIngredients(ingredients, 0)).toStrictEqual([
			{ name: 'milk', amount: 0 },
			{ name: 'butter', amount: 0 },
		]);
	});

	it('handles fractional servings correctly', () => {
		const ingredients = [{ name: 'salt', amount: 0.5 }];
		expect(calculateIngredients(ingredients, 1.5)).toStrictEqual([{ name: 'salt', amount: 0.75 }]);
	});

	it('handles negative servings by scaling amounts negatively', () => {
		const ingredients = [{ name: 'pepper', amount: 2 }];
		expect(calculateIngredients(ingredients, -2)).toStrictEqual([{ name: 'pepper', amount: -4 }]);
	});
});
