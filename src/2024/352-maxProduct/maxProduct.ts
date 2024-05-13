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

	return arr
		.sort((a, b) => b - a)
		.slice(0, 3)
		.reduce((acc, number) => acc * number, 1);
}
