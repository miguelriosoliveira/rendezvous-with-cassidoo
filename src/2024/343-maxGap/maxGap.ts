/*
Given an integer array arr, return the maximum difference between two successive elements in arr's
sorted form. Return 0 if there's 0 or 1 elements.

Example:

> maxGap([3,6,9,1,2])
> 3
*/

export function maxGap(arr: number[]): number {
	return Math.max(
		0, // minimum value (if less than 2 elements, the following computation gives '-Infinity')
		...arr
			.sort((a, b) => a - b)
			.map((number, i, array) => array[i + 1] - number)
			.filter(number => !Number.isNaN(number)),
	);
}
