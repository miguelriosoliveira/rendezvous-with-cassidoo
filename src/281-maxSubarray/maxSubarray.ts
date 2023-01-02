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
	return arr
		.map((_, i) => arr.slice(i, i + n))
		.map(subarray => ({ subarray, sum: subarray.reduce((sum, num) => sum + num, 0) }))
		.sort((a, b) => b.sum - a.sum)[0].subarray;
}
