/**
 * You’re given a string of characters that are only 2s and 0s.
 * Return the index of the first occurrence of “2020” without using the indexOf (or similar) function,
 * and -1 if it’s not found in the string.
 *
 * Example:
 * $ find2020(‘2220000202220020200’)
 * $ 14
 */

export default function find2020(text: string): number {
	const letters = text.split('');

	for (let index = 0; index <= letters.length - 4; index += 1) {
		if (
			letters[index] === '2' &&
			letters[index + 1] === '0' &&
			letters[index + 2] === '2' &&
			letters[index + 3] === '0'
		) {
			return index;
		}
	}

	return -1;
}
