/*
Given a number, rearrange its digits to make it the next larger number.
So not the maximum size it can be, but the lexicographically next greater permutation of numbers!

Example:

> lexoNext(123)
> 132

> lexoNext(314159)
> 314195
*/

// thanks to https://www.w3resource.com/javascript-exercises/fundamental/javascript-fundamental-exercise-136.php
function getPermutations(str: string): string[] {
	return str.split('').reduce<string[]>(
		(acc, letter, i) => {
			return acc.concat(
				getPermutations(str.slice(0, i) + str.slice(i + 1)).map(val => letter + val),
			);
		},
		[str],
	);
}

export function lexoNext(n: number): number {
	const permutations = Array.from(new Set(getPermutations(n.toString()))); // remove repeated values
	return (
		permutations
			.map(Number)
			.filter(num => num > n)
			.sort((a, b) => a - b)
			.at(0) || n
	);
}
