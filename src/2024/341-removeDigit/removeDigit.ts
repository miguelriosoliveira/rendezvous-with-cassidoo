/*
Given a number and a digit to remove from that number,
maximize the resulting number after the digit has been removed and print it.
You can choose how you want to handle a digit not existing in the number.

Example:

> removeDigit(31415926, 1)
> 3415926 // we picked the second 1 in the number.

> removeDigit(1231, 1)
> 231 // 231 > 123
*/

export function removeDigit(number: number, digit: number): number {
	if (digit < 0 || digit > 9) {
		throw new Error('Digit must be between 0 and 9');
	}

	const numberStr = number.toString();
	return (
		Number(
			Array.from(numberStr.matchAll(new RegExp(digit.toString(), 'g')))
				.map(({ index }) => index)
				.map(digitIndex =>
					numberStr
						.split('')
						.filter((d, i) => i !== digitIndex)
						.join(''),
				)
				.sort()
				.at(-1),
		) || number
	);
}
