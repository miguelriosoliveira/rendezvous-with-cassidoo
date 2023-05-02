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

export function countLeadingZeroes(numbers: number[]) {
	let i = 0;
	while (numbers[i] === 0) {
		i++;
	}
	return i;
}

export function removeZeroes(numbers: number[]): number[] {
	const leadingCount = countLeadingZeroes(numbers);
	const trailingCount = countLeadingZeroes([...numbers].reverse());

	return numbers.slice(leadingCount, numbers.length - trailingCount);
}
