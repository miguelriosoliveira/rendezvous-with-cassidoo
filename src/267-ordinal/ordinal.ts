/*
Write a function to output the ordinal suffix of a positive integer concatenated to an inputted number.

Example:

> ordinal(3)
> '3rd'

> ordinal(57)
> '57th'
*/

function getLastDigit(number: number) {
	return Number(number.toString().at(-1));
}

export function ordinal(cardinal: number): string {
	const lastDigit = getLastDigit(cardinal);

	if (lastDigit === 1 && cardinal !== 11) {
		return `${cardinal}st`;
	}

	if (lastDigit === 2 && cardinal !== 12) {
		return `${cardinal}nd`;
	}

	if (lastDigit === 3 && cardinal !== 13) {
		return `${cardinal}rd`;
	}

	return `${cardinal}th`;
}
