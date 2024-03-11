/*
Given an integer array arr, return the maximum difference between two successive elements in arr's
sorted form. Return 0 if there's 0 or 1 elements.

Example:

> maxGap([3,6,9,1,2])
> 3
*/

export function maxGap(arr: number[]): number {
	if (arr.length < 2) {
		return 0;
	}

	return Math.max(
		...arr
			.toSorted((a, b) => a - b)
			.map((number, i, array) => array[i + 1] - number)
			.filter(number => !Number.isNaN(number)),
	);
}
