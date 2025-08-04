import { minMonsterDistance } from './minMonsterDistance';

describe('#minMonsterDistance', () => {
	it('should return the smallest distance when monsters are too close', () => {
		const monsters = [3, 8, 10, 15];
		const d = 6;
		expect(minMonsterDistance(monsters, d)).toBe(2);
	});

	it('should return -1 when all monsters are safely spaced', () => {
		const monsters = [5, 9, 14, 18];
		const d = 4;
		expect(minMonsterDistance(monsters, d)).toBe(-1);
	});

	it('should handle empty array', () => {
		expect(minMonsterDistance([], 5)).toBe(-1);
	});

	it('should handle single monster', () => {
		expect(minMonsterDistance([10], 5)).toBe(-1);
	});

	it('should handle two monsters exactly at safe distance', () => {
		expect(minMonsterDistance([1, 6], 5)).toBe(-1);
	});

	it('should handle two monsters too close', () => {
		expect(minMonsterDistance([1, 4], 5)).toBe(3);
	});

	it('should find minimum distance among multiple violations', () => {
		const monsters = [1, 3, 5, 6, 10];
		const d = 3;
		// Distances: 2, 2, 1, 4
		// Minimum violation is 1 (between 5 and 6)
		expect(minMonsterDistance(monsters, d)).toBe(1);
	});

	it('should handle monsters at same position', () => {
		const monsters = [5, 5, 10];
		const d = 2;
		expect(minMonsterDistance(monsters, d)).toBe(0);
	});

	it('should handle unsorted array', () => {
		const monsters = [15, 3, 10, 8];
		const d = 6;
		// When sorted: [3, 8, 10, 15]
		// Distances: 5, 2, 5
		// Minimum violation is 2
		expect(minMonsterDistance(monsters, d)).toBe(2);
	});

	it('should handle large distances requirement', () => {
		const monsters = [1, 10, 20, 30];
		const d = 15;
		// Distances: 9, 10, 10
		// All are less than 15, minimum is 9
		expect(minMonsterDistance(monsters, d)).toBe(9);
	});

	it('should handle negative positions', () => {
		const monsters = [-10, -5, 0, 5];
		const d = 6;
		// Distances: 5, 5, 5
		// All are less than 6, minimum is 5
		expect(minMonsterDistance(monsters, d)).toBe(5);
	});

	it('should handle zero distance requirement', () => {
		const monsters = [1, 2, 3];
		const d = 0;
		// All distances are >= 0, so return -1
		expect(minMonsterDistance(monsters, d)).toBe(-1);
	});

	it('should handle multiple consecutive violations', () => {
		const monsters = [1, 2, 3, 10];
		const d = 3;
		// Distances: 1, 1, 7
		// Minimum violation is 1
		expect(minMonsterDistance(monsters, d)).toBe(1);
	});
});
