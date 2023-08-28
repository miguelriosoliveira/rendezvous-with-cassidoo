/*
Write a function that takes an array of consecutive, increasing letters as input,
and returns any missing letters in the array between the first and last letter.

Example:

> missingLetters(['a','b','c','d','f'])
> ['e']

> missingLetters(['a','b','c','d','e','h','i','j','k','l','m','n','o','p','q','r','s','t','u','w','x','y','z'])
> ['f','g','v']
*/

function range(start: number, end: number): number[] {
	return Array.from({ length: end - start - 1 }, (_, i) => start + i + 1);
}

export function missingLetters(letters: string[]): string[] {
	return letters
		.map(letter => letter.charCodeAt(0))
		.reduce<number[]>((acc, charCode, index, array) => {
			return acc.concat(range(charCode, array[index + 1]));
		}, [])
		.map(charCode => String.fromCharCode(charCode));
}
