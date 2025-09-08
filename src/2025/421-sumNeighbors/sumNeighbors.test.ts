import { sumNeighbors } from './sumNeighbors';

describe('#sumNeighbors', () => {
	it('should handle an empty array', () => {
		expect(sumNeighbors([])).toBe(0);
	});

	it('should handle a single element', () => {
		expect(sumNeighbors([1])).toBe(1);
	});

	it('should handle two elements', () => {
		expect(sumNeighbors([1, 4])).toBe(10);
	});

	it('should handle three elements', () => {
		expect(sumNeighbors([1, 4, 7])).toBe(28);
	});

	it('should handle four elements', () => {
		expect(sumNeighbors([1, 4, 7, 10])).toBe(55);
	});

	it('should handle all negative numbers', () => {
		expect(sumNeighbors([-1, -2, -3])).toBe(-14);
	});

	it('should handle floating point numbers', () => {
		expect(sumNeighbors([0.1, 0.2, 0.4])).toBe(1.6);
	});

	it('should handle a mix of large numbers', () => {
		expect(sumNeighbors([1, -20, 300, -4000, 50000, -600000, 7000000])).toBe(12338842);
	});

	it('should handle all zeros', () => {
		expect(sumNeighbors([0, 0, 0])).toBe(0);
	});

	it('should handle zeros between numbers', () => {
		expect(sumNeighbors([5, 0, 5])).toBe(20);
	});

	it('should handle positive and negative pair', () => {
		expect(sumNeighbors([100, -50])).toBe(100);
	});

	it('should handle uniform numbers', () => {
		expect(sumNeighbors([10, 10, 10, 10, 10])).toBe(130);
	});

	it('should handle a simple increasing sequence', () => {
		expect(sumNeighbors([1, 2, 3, 4, 5])).toBe(39);
	});
});
