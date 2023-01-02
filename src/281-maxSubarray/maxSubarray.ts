/*
Given a string of any length which contains only digits from 0 to 9,
replace each consecutive run of the digit 0 with its length.

Example:

> replaceZeros('1234500362000440')
> 1234523623441

> replaceZeros('123450036200044')
> 123452362344

> replaceZeros('000000000000')
> 12

> replaceZeros('123456789')
> 123456789
*/

export function replaceZeros(numbers: string): string {
	return numbers.replace(/0+/g, match => match.length.toString());
}

export function replaceZerosWithoutRegex(numbers: string): string {
	let count = 0;
	return [...numbers, ''] // extra empty value to check for possible last zero
		.map(number => {
			// counting zeroes
			if (number === '0') {
				count++;
				return '';
			}
			// append the non-zero number when there is no count
			if (count <= 0) {
				return number;
			}
			// appending counter value and clearing it
			const concat = count + number;
			count = 0;
			return concat;
		})
		.join('');
}
