/*
You have an array of letters.
Return the number of possible sequences of letters you can make using the letters in the array.
Extra credit: print the sequences!

Example:

> letters(['X'])
> 1

> letters(['A', 'A', 'B'])
> 8 // "A", "B", "AA", "AB", "BA", "AAB", "ABA", "BAA"
*/

function swap(arr: string[], i: number, j: number): void {
	const temp = arr[i];
	arr[i] = arr[j];
	arr[j] = temp;
}

function permute(arr: string[], start: number, n: number, result: string[]): void {
	result.push(arr.slice(0, start).join(''));

	for (let i = start; i < arr.length; i++) {
		swap(arr, start, i);
		permute([...arr], start + 1, n, result);
		swap(arr, start, i);
	}
}

function getPermutations(array: string[]): string[] {
	const result: string[] = [];
	permute(array, 0, array.length, result);
	return result;
}

export function letters(arr: string[]): number {
	const permutations = Array.from(new Set(getPermutations(arr)))
		.filter(Boolean)
		.sort((a, b) => a.length - b.length || a.localeCompare(b));

	console.log(permutations);

	return permutations.length;
}
