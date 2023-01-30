/*
Given a positive integer, generate an array in which every element is an array that goes from 1 to the index of that array.

Example:

```js
> generateArrays(4)
> [[1], [1, 2], [1, 2, 3], [1, 2, 3, 4]]

> generateArrays(1)
> [[1]]
*/

export function generateArrays(size: number): number[][] {
	return Array.from({ length: size }, (_, i) => {
		return Array.from({ length: i + 1 }, (__, j) => j + 1);
	});
}
