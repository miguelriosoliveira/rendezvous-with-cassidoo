/*
Given an integer array nums, return the length of the longest increasing subsequence.

Example:

> increasingSubsequence([10, 9, 2, 3, 7, 101, 18])
> 4

> increasingSubsequence([4, 4, 4, 4, 3])
> 1
*/

export function increasingSubsequence(numbers: number[]): number {
	let counter = 0;
	let max = 0;

	numbers.forEach((num, i) => {
		if (num < numbers[i + 1]) {
			return counter++;
		}
		max = Math.max(counter, max);
		counter = 0;
	});

	return max + Number(numbers.length > 0);
}
