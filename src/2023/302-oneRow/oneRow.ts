/*
Given an array of words, return the words that can be typed using letters of only one row on a keyboard.
For bonus points, include the option for a user to pick the type of keyboard they are using (ANSI, ISO, etc),
and/or give options for how many/which rows are allowed!

Example:

> oneRow(['candy', 'fart', 'pop', 'Zelda', 'flag', 'typewriter'])
> ['pop', 'flag', 'typewriter']
*/

type KeyboardType = 'ANSI' | 'ISO' | 'JIS' | 'Dvorak' | 'Colemak';

const KEYBOARDS_MAP: Record<KeyboardType, string[][]> = {
	ANSI: [
		['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
		['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
		['Z', 'X', 'C', 'V', 'B', 'N', 'M'],
	],
	ISO: [
		['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
		['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Ç'],
		['Z', 'X', 'C', 'V', 'B', 'N', 'M'],
	],
	JIS: [
		['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
		['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
		['Z', 'X', 'C', 'V', 'B', 'N', 'M'],
	],
	Dvorak: [
		['P', 'Y', 'F', 'G', 'C', 'R', 'L'],
		['A', 'O', 'E', 'U', 'I', 'D', 'H', 'T', 'N', 'S'],
		['Q', 'J', 'K', 'X', 'B', 'M', 'W', 'V', 'Z'],
	],
	Colemak: [
		['Q', 'W', 'F', 'P', 'G', 'J', 'L', 'U', 'Y'],
		['A', 'R', 'S', 'T', 'D', 'H', 'N', 'E', 'I', 'O'],
		['Z', 'X', 'C', 'V', 'B', 'K', 'M'],
	],
};

interface Props {
	words: string[];
	keyboardType?: KeyboardType;
	allowedRows?: number[];
}

export function oneRow({
	words,
	keyboardType = 'ANSI',
	allowedRows: allowedRows_,
}: Props): string[] {
	const keyboard = KEYBOARDS_MAP[keyboardType];
	// convert [1, 2, 3] input to [0, 1, 2]
	const allowedRows =
		allowedRows_?.map(rowNumber => rowNumber - 1) ||
		Array.from({ length: keyboard.length }, (_, i) => i);
	const keyboardRows = keyboard.filter((_, i) => allowedRows.includes(i));

	return words.filter(word => {
		const letters = word.toUpperCase().split('');
		// "only words which all letters are included in a single keyboard row"
		return keyboardRows.some(keyboardRow => letters.every(letter => keyboardRow.includes(letter)));
	});
}
