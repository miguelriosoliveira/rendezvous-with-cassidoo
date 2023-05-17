/*
Write a function to find out whether the binary representation of a number is palindrome or not.

Example:

> binaryPal(5)
> true

> binaryPal(10)
> false
*/

// https://stackoverflow.com/a/16155417/4916416
function dec2bin(dec: number): string {
	// eslint-disable-next-line no-bitwise
	return (dec >>> 0).toString(2);
}

export function binaryPal(number: number): boolean {
	const binary = dec2bin(number);
	return binary === binary.split('').reverse().join('');
}
