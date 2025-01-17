/*
Given a number, rearrange its digits to make it the next larger number.
So not the maximum size it can be, but the lexicographically next greater permutation of numbers!

Example:

> lexoNext(123)
> 132

> lexoNext(314159)
> 314195
*/

export function lexoNext(num: number): number {
	const digits = String(num).split('').map(Number);

	// Step 1: Find the rightmost digit that is smaller than the digit next to it
	const i = digits.findLastIndex((digit, i, arr) => digit < arr[i + 1]);

	// Step 2: Find the digit to the right of 'i' that is larger than digits[i]
	const j = i + digits.slice(i).findLastIndex(digit => digit > digits[i]);

	// Step 3: Swap digits[i] and digits[j]
	[digits[i], digits[j]] = [digits[j], digits[i]];

	// Step 4: Reverse the sequence to the right of 'i' to get the smallest permutation
	return Number(
		digits
			.slice(0, i + 1)
			.concat(digits.slice(i + 1).reverse())
			.join(''),
	);
}
