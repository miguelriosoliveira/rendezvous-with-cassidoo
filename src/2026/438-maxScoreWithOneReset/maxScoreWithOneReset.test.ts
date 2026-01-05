import { maxScoreWithOneReset } from './maxScoreWithOneReset';

describe('#maxScoreWithOneReset', () => {
	it('should return correct score for example test cases', () => {
		expect(maxScoreWithOneReset([2, -1, 2, -5, 2, 2])).toBe(4);
		expect(maxScoreWithOneReset([4, -10, 3, 2, -1, 6])).toBe(10);
		expect(maxScoreWithOneReset([-50, -2, -3])).toBe(0);
	});

	it('should handle empty array', () => {
		expect(maxScoreWithOneReset([])).toBe(0);
	});

	it('should handle single element', () => {
		expect(maxScoreWithOneReset([5])).toBe(5);
		expect(maxScoreWithOneReset([-5])).toBe(0);
	});

	it('should handle all positive numbers', () => {
		expect(maxScoreWithOneReset([1, 2, 3, 4])).toBe(10);
	});

	it('should handle all negative numbers', () => {
		expect(maxScoreWithOneReset([-1, -2, -3])).toBe(0);
	});

	it('should handle case where no reset is better', () => {
		expect(maxScoreWithOneReset([5, 3, 2, 1])).toBe(11);
	});

	it('should handle case where reset is beneficial', () => {
		expect(maxScoreWithOneReset([5, -10, 8])).toBe(8);
	});
});
