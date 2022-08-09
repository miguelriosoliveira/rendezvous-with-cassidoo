/**
 * You’re given a string of characters that are only 2s and 0s.
 * Return the index of the first occurrence of “2020” without using the indexOf (or similar) function,
 * and -1 if it’s not found in the string.
 *
 * Example:
 * $ find2020('2220000202220020200')
 * $ 14
 */

export function find2020(text: string): number {
	for (let index = 0; text[index]; index++) {
		if (
			text[index] === '2' &&
			text[index + 1] === '0' &&
			text[index + 2] === '2' &&
			text[index + 3] === '0'
		) {
			return index;
		}
	}

	return -1;
}
