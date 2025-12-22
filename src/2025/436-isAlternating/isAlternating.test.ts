import { isAlternating } from './isAlternating';

describe('#isAlternating', () => {
	it('should return true for alternating sequences', () => {
		expect(isAlternating([])).toBe(true);
		expect(isAlternating([1])).toBe(true);
		expect(isAlternating([1, 1])).toBe(true);
		expect(isAlternating([1, 2, 1])).toBe(true);
		expect(isAlternating([10, 5, 10, 5, 10])).toBe(true);
		expect(isAlternating([3, 3, 3, 3])).toBe(true);
		expect(isAlternating([7, 8, 7, 8, 7, 8, 7])).toBe(true);
	});

	it('should return false for non-alternating sequences', () => {
		expect(isAlternating([2, 2, 3, 3])).toBe(false);
		expect(isAlternating([5, 4, 3, 5, 4, 3])).toBe(false);
		expect(isAlternating([1, 2, 1, 1])).toBe(false);
		expect(isAlternating([1, 2, 2, 1])).toBe(false);
		expect(isAlternating([9, 9, 9, 8, 9])).toBe(false);
		expect(isAlternating([0, 1, 2, 1])).toBe(false);
	});
});
