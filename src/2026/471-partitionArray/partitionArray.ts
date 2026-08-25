/*
Given an array of integers, return a new array where odd numbers come first, even numbers come next,
and zeros appear at the end. The relative order of elements within each group must be preserved.

Example:

partitionArray([0, 3, 2, 1, 4, 0, 7])
[3, 1, 7, 2, 4, 0, 0]
*/

export function partitionArray(numbers: number[]): number[] {
	const odds: number[] = [];
	const evens: number[] = [];
	const zeroes: number[] = [];

	numbers.forEach(n => {
		let arrayToPush = odds;
		if (n === 0) {
			arrayToPush = zeroes;
		} else if (n % 2 === 0) {
			arrayToPush = evens;
		}
		arrayToPush.push(n);
	});

	return [...odds, ...evens, ...zeroes];
}
