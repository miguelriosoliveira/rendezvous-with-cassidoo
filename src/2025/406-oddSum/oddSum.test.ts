import { oddSum } from './oddSum';

describe('#oddSum', () => {
	it('returns pairs with odd sums from two arrays', () => {
		expect(oddSum([9, 14, 6, 2, 11], [8, 4, 7, 20])).toStrictEqual([
			[9, 20],
			[14, 7],
			[11, 8],
		]);
	});

	it('returns null when no pairs have an odd sum', () => {
		expect(oddSum([2, 4, 6, 8], [10, 12, 14])).toBeNull();
	});

	it('returns null if either array is empty', () => {
		expect(oddSum([], [1, 2, 3])).toBeNull();
		expect(oddSum([1, 2, 3], [])).toBeNull();
		expect(oddSum([], [])).toBeNull();
	});

	it('handles duplicate values correctly', () => {
		expect(oddSum([1, 1], [2, 2])).toStrictEqual([[1, 2]]);
	});

	it('handles single-element arrays', () => {
		expect(oddSum([3], [4])).toStrictEqual([[3, 4]]);
		expect(oddSum([2], [4])).toBeNull();
	});
});
