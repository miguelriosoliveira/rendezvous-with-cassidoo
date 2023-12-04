/*
There is a sorted integer array that has been rotated an unknown number of times.
Given that rotated array, return how many times it has been rotated.
It may contain duplicate numbers!

Example:

> rotatedNum([4, 0, 1, 2, 3])
> 1

> rotatedNum([7, 9, 20])
> 0

> rotatedNum([7, 7, 314, 1337, 7])
> 4
*/

export function rotatedNum(arr: number[]): number {
	let current = Number.MIN_SAFE_INTEGER;

	const index = arr.findIndex(num => {
		if (num < current) {
			return true;
		}
		current = num;
		return false;
	});

	return Math.max(index, 0);
}
