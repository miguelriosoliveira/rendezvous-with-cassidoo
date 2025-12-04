/*
Given an array of integers `arr` and an integer `n`, return a subarray of `arr` of length `n`
where the sum is the largest.
Make sure you maintain the order of the original array, and if `n` is greater than `arr.length`,
you can choose what you want to return.

Example:

> maxSubarray([-4,2,-5,1,2,3,6,-5,1], 4)
> [1,2,3,6]

> maxSubarray([1,2,0,5], 2)
> [0,5]
*/

export function maxSubarray(arr: number[], n: number): number[] {
	if (n <= 0) {
		return [];
	}

	if (n >= arr.length) {
		return arr;
	}

	let currentSum = arr.slice(0, n).reduce((sum, num) => sum + num, 0);
	let maxSum = currentSum;
	let maxIndex = 0;

	for (let i = 1; i <= arr.length - n; i++) {
		currentSum = currentSum - arr[i - 1] + arr[i + n - 1];
		if (currentSum > maxSum) {
			maxSum = currentSum;
			maxIndex = i;
		}
	}

	return arr.slice(maxIndex, maxIndex + n);
}
