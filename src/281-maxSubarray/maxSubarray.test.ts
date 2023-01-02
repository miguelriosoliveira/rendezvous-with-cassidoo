import { maxSubarray } from './maxSubarray';

describe('testing maxSubarray', () => {
	it('should get max subarray [1, 2, 3, 6]', () => {
		const arr = [-4, 2, -5, 1, 2, 3, 6, -5, 1];
		const n = 4;
		expect(maxSubarray(arr, n)).toStrictEqual([1, 2, 3, 6]);
	});

	it('should get max subarray [0, 5]', () => {
		const arr = [1, 2, 0, 5];
		const n = 2;
		expect(maxSubarray(arr, n)).toStrictEqual([0, 5]);
	});

	it('should the same input array as response when "n" is greater than the array length', () => {
		const arr = [1, 2, 0, 5];
		const n = 20;
		expect(maxSubarray(arr, n)).toStrictEqual(arr);
	});
});
