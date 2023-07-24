import { maximumProfit } from './maximumProfit';

describe('maximumProfit', () => {
	it('should return 5 for [7, 1, 5, 3, 6, 4]', () => {
		expect(maximumProfit([7, 1, 5, 3, 6, 4])).toBe(5);
	});

	it('should return 0 for [7, 6, 4, 3, 1]', () => {
		expect(maximumProfit([7, 6, 4, 3, 1])).toBe(0);
	});

	it('should return 9 for [3, 8, 1, 2, 6, 10]', () => {
		expect(maximumProfit([3, 8, 1, 2, 6, 10])).toBe(9);
	});

	it('should return 4 for [1, 2, 3, 4, 5]', () => {
		expect(maximumProfit([1, 2, 3, 4, 5])).toBe(4);
	});

	it('should return 0 for [5, 4, 3, 2, 1]', () => {
		expect(maximumProfit([5, 4, 3, 2, 1])).toBe(0);
	});

	it('should return 7 for [2, 6, 7, 9, 1, 3]', () => {
		expect(maximumProfit([2, 6, 7, 9, 1, 3])).toBe(7);
	});

	it('should return 0 for [3, 3, 3, 3, 3]', () => {
		expect(maximumProfit([3, 3, 3, 3, 3])).toBe(0);
	});
});
