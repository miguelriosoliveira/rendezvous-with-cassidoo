import { increasingSubsequence } from './increasingSubsequence';

describe('#increasingSubsequence', () => {
	it('should return the length of the longest increasing subsequence for a given array', () => {
		expect(increasingSubsequence([10, 9, 2, 3, 7, 101, 18])).toBe(4);
	});

	it('should return 1 when all elements are the same', () => {
		expect(increasingSubsequence([4, 4, 4, 4, 3])).toBe(1);
	});

	it('should return the correct length when the array is already sorted in increasing order', () => {
		expect(increasingSubsequence([1, 2, 3, 4, 5])).toBe(5);
	});

	it('should return 1 for an array sorted in decreasing order', () => {
		expect(increasingSubsequence([5, 4, 3, 2, 1])).toBe(1);
	});

	it('should handle an empty array', () => {
		expect(increasingSubsequence([])).toBe(0);
	});

	it('should handle an array with one element', () => {
		expect(increasingSubsequence([7])).toBe(1);
	});

	it('should return the length of the longest increasing subsequence for an array with mixed values', () => {
		expect(increasingSubsequence([3, 10, 2, 1, 2, 20])).toBe(3);
	});

	it('should handle an array with negative and positive values', () => {
		expect(increasingSubsequence([-1, 3, 4, 5, 2, 2, 2, 2, 2])).toBe(4);
	});
});
