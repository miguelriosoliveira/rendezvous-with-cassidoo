/*
Implement a function `rotateArray(int[] arr, n)` which rotates an array by `n` places.

Example: [1, 2, 3, 4, 5] rotated by 2 gives [4, 5, 1, 2, 3].
*/

export function rotateArray(arr: number[], n: number): number[] {
	const places = n % arr.length;
	const offset = Number(places > 0);
	const leftPart = arr.slice(places + offset);
	const rightPart = arr.slice(0, places + offset);
	return leftPart.concat(rightPart);
}
