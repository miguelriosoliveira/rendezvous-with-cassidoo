
/*
Given an array of integers, find the contiguous subarray that has the largest sum and return that
sum. A subarray must contain at least one element. If all elements are negative, return the largest
(least negative) value. If you need a hint, look up Kadane's Algorithm!

Examples:

> maxSubarraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4])
6
> maxSubarraySum([5])
5
> maxSubarraySum([-1, -2, -3, -4])
-1
> maxSubarraySum([5, 4, -1, 7, 8])
23
*/

export function maxSubarraySum(arr: number[]): number {
	if (arr.length === 0) {
		return 0;
	}

	let max = Number.NEGATIVE_INFINITY;
	let localMax = 0;

	arr.forEach(num => {
		localMax = Math.max(num, localMax + num);
		max = Math.max(max, localMax);
	});

	return max;
}

