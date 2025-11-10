/*
You are given two sorted arrays, a and b, where a has a large enough size buffer at the end to hold
b (which can be spaces, zeroes, or nulls).
Write a function to merge b into a in sorted order.

Example:

let a = [1, 3, 5, 0, 0, 0];
let b = [2, 4, 6];

> merge(a, b)
> [1, 2, 3, 4, 5, 6]
*/

export function merge(a: number[], b: number[]): number[] {
	const firstEmptyPos = a.length - b.length;
	b.forEach((bNumber, bIndex) => (a[firstEmptyPos + bIndex] = bNumber));
	return a.sort((el1, el2) => el1 - el2);
}
