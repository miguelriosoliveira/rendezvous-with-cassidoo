/*
Given a non-empty array containing only non-negative integers,
return the list with trailing and leading zeroes removed.

Example:

> removeZeroes([0, 0, 0, 3, 1, 4, 1, 5, 9, 0, 0, 0, 0])
> [3, 1, 4, 1, 5, 9]

> removeZeroes([0, 0, 0])
> []

> removeZeroes([8])
> [8]
*/

export function removeZeroes(numbers: number[]): number[] {
	return numbers.slice(
		numbers.findIndex(n => n !== 0),
		numbers.findLastIndex(n => n !== 0) + 1,
	);
}
