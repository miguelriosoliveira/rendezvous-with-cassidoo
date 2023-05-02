import { removeZeroes } from './removeZeroes';

describe('#removeZeroes', () => {
	it('should remove trailing zeroes', () => {
		expect(removeZeroes([0, 0, 0, 3, 1, 4, 1, 5, 9, 0, 0, 0, 0])).toStrictEqual([3, 1, 4, 1, 5, 9]);
	});

	it('should not remove non-trailing zeroes', () => {
		expect(removeZeroes([0, 0, 0, 3, 1, 0, 4, 1, 5, 9, 0, 0, 0, 0])).toStrictEqual([
			3, 1, 0, 4, 1, 5, 9,
		]);
	});

	it('should return empty when input is zero-only', () => {
		expect(removeZeroes([0, 0, 0])).toStrictEqual([]);
	});

	it('should return same input when there is not zeroes', () => {
		expect(removeZeroes([8])).toStrictEqual([8]);
	});
});
