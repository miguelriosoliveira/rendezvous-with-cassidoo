import { minSubs } from './minSubs';

describe('#minSubs', () => {
	it('returns the subarray with the minimum sum when k is 3', () => {
		const result = minSubs([1, 3, 20, 4, 8, 9, 11], 3);
		expect(result).toStrictEqual([4, 8, 9]);
	});

	it('returns the subarray with the minimum sum when k is 2', () => {
		const result = minSubs([4, 4, 4, 4, 8], 2);
		expect(result).toStrictEqual([4, 4]);
	});

	it('returns an empty array when k is 0', () => {
		const result = minSubs([1, 2, 3, 4, 5], 0);
		expect(result).toStrictEqual([]);
	});

	it('returns the correct subarray when k is 1', () => {
		const result = minSubs([1, 2, 3, 4, 5], 1);
		expect(result).toStrictEqual([1]);
	});

	it('returns the correct subarray when k is equal to the minimum element count', () => {
		const result = minSubs([3, 1, 2, 1, 3, 2, 4], 2);
		expect(result).toStrictEqual([1, 2]);
	});
});
