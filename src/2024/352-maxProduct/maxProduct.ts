/*
Write a function that takes in a list (of length >= 3) of numbers, and returns the maximum product
that can be obtained by multiplying any three integers from the list.

Example:

> maxProduct([2, 4, 1, 3, -5, 6])
> 72 // 4*3*6
*/

export function maxProduct(arr: number[]): number {
	if (arr.length < 3) {
		throw new Error('Invalid list, must have size 3!');
	}

	const sorted = arr.slice().sort((a, b) => a - b);
	const n = sorted.length;

	// Maximum product can either be:
	// 1. Three largest positive numbers, OR
	// 2. Two smallest (most negative) numbers * largest positive number
	const option1 = sorted[n - 1] * sorted[n - 2] * sorted[n - 3];
	const option2 = sorted[0] * sorted[1] * sorted[n - 1];

	return Math.max(option1, option2);
}
