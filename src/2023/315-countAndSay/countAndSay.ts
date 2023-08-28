/*
Given a sequence of numbers, generate a "count and say" string.

Example:

> countAndSay(112222555)
> "two 1s, then four 2s, then three 5s"

> countAndSay(3333333333)
> "ten 3s"
*/

// Given that Number.MAX_SAFE_INTEGER is 9007199254740991 (16 characters maximum)
const NUMBER_NAMES = [
	'one',
	'two',
	'three',
	'four',
	'five',
	'six',
	'seven',
	'eight',
	'nine',
	'ten',
	'eleven',
	'twelve',
	'thirteen',
	'fourteen',
	'fifteen',
	'sixteen',
];

export function countAndSay(sequence: number): string {
	const numberMap = new Map();

	sequence
		.toString()
		.split('')
		.forEach(numStr => {
			const count = numberMap.get(numStr) || 0;
			numberMap.set(numStr, count + 1);
		});

	const result: string[] = [];
	numberMap.forEach((count, numStr) => {
		result.push(`${NUMBER_NAMES[count - 1]} ${numStr}${count > 1 ? 's' : ''}`);
	});

	return result.join(', then ');
}
