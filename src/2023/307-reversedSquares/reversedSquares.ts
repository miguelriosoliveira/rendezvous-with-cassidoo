/*
Given an integer `n`, return `true` if it's a perfect square AND when reversed, is still a perfect square.

Example:

> reversedSquares(9)
> true

> reversedSquares(441)
> true

> reversedSquares(25)
> false
*/

// Check if sqrt is complete number i.e. integer
// https://stackoverflow.com/a/49881377/4916416
function isSqrtComplete(n: number) {
	return Math.sqrt(n) % 1 === 0;
}

export function reversedSquaresConvertingTypes(n: number): boolean {
	const reversed = Number(n.toString().split('').reverse().join(''));
	return isSqrtComplete(n) && isSqrtComplete(reversed);
}

export function reversedSquaresUsingMath(n: number): boolean {
	if (n < 0) {
		return false;
	}

	let reversed = 0;
	while (n) {
		reversed *= 10;
		reversed += n % 10;
		n = Math.floor(n / 10);
	}

	return isSqrtComplete(n) && isSqrtComplete(reversed);
}
