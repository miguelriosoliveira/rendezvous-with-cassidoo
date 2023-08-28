/*
Given a sequence of numbers, generate a "count and say" string.

Example:

> countAndSay(112222555)
> "two 1s, then four 2s, then three 5s"

> countAndSay(3333333333)
> "ten 3s"
*/

// Given that Number.MAX_SAFE_INTEGER is 9007199254740991 (16 characters maximum)
function getNumberName(number: number): string {
	const names = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
	const teenNames = [
		'ten',
		'eleven',
		'twelve',
		'thirteen',
		'fourteen',
		'fifteen',
		'sixteen',
		'seventeen',
		'eighteen',
		'nineteen',
	];

	if (number < 10) {
		return names[number];
	}
	return teenNames[number - 10];
}

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
		result.push(`${getNumberName(count)} ${numStr}${count > 1 ? 's' : ''}`);
	});

	return result.join(', then ');
}
