import { shiftRight } from '../../utils/shiftRight';

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

export type BufferArray = Array<number | null>;

export function merge(a: BufferArray, b: number[]): number[] {
	let indexB = 0;

	a.forEach((currentA, indexA) => {
		const currentB = b[indexB];
		if (currentA === null || currentB < currentA) {
			shiftRight(a, indexA);
			a[indexA] = currentB;
			indexB++;
		}
	});

	return a as number[];
}
