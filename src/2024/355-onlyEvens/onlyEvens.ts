/*
Write a function that takes an array of integers and returns a new array containing
only the even numbers, and sorted.

Example:

> onlyEvens([1, 2, 3, 4, 5, 2])
> [2, 2, 4]

> onlyEvens([7, 8, 1, 0, 2, 5])
> [0, 2, 8]

> onlyEvens([11, 13, 15])
> []
*/

export function onlyEvens(arr: number[]): number[] {
	return arr.filter(number => number % 2 === 0).sort((a, b) => a - b);
}
