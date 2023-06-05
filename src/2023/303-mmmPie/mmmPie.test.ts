import { mmmPie } from './mmmPie';

describe('mmmPie', () => {
	it('should return 2 pies needed', () => {
		const people = [
			{ name: 'Joe', num: 9 },
			{ name: 'Cami', num: 3 },
			{ name: 'Cassidy', num: 4 },
		];
		expect(mmmPie(people, 8)).toBe(2);
	});

	it('should return 2 pies needed', () => {
		const people = [
			{ name: 'Alice', num: 4 },
			{ name: 'Bob', num: 3 },
			{ name: 'Charlie', num: 5 },
		];
		expect(mmmPie(people, 6)).toBe(2);
	});

	it('should return 3 pies needed', () => {
		const people = [
			{ name: 'Emily', num: 2 },
			{ name: 'Frank', num: 4 },
			{ name: 'Grace', num: 6 },
			{ name: 'Henry', num: 3 },
		];
		expect(mmmPie(people, 5)).toBe(3);
	});

	it('should return 6 so there will be leftovers for later', () => {
		const people = [
			{ name: 'Ivy', num: 10 },
			{ name: 'Jack', num: 12 },
			{ name: 'Kate', num: 15 },
		];
		expect(mmmPie(people, 7)).toBe(6);
	});

	it('should return 6 pies needed', () => {
		const people = [
			{ name: 'Oliver', num: 5 },
			{ name: 'Penny', num: 10 },
			{ name: 'Quincy', num: 15 },
		];
		expect(mmmPie(people, 5)).toBe(6);
	});

	// edge case - no one is hungry for pie
	it('should return 0 when no one is hungry for pie', () => {
		expect(mmmPie([], 8)).toBe(0);
	});
});
