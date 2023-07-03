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

export function reversedSquaresConvertingTypes(n: number): boolean {
	if (n < 0) {
		return false;
	}
	const reversed = Number(n.toString().split('').reverse().join(''));
	// Check if sqrt is complete number i.e. integer
	// https://stackoverflow.com/a/49881377/4916416
	return Math.sqrt(n) % 1 === 0 && Math.sqrt(reversed) % 1 === 0;
}

export function reversedSquaresUsingMath(n: number): boolean {
	if (n < 0) {
		return false;
	}
	let nCopy = n;
	let reversed = 0;
	while (nCopy) {
		reversed *= 10;
		reversed += nCopy % 10;
		nCopy = Math.floor(nCopy / 10);
	}
	// Check if sqrt is complete number i.e. integer
	// https://stackoverflow.com/a/49881377/4916416
	return Math.sqrt(n) % 1 === 0 && Math.sqrt(reversed) % 1 === 0;
}
