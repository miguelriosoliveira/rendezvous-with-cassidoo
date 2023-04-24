/*
Given an array of integers, find whether it’s possible to construct an integer using all the digits
of the numbers in the array such that it would be divisible by n (where n is 1 <= n <= 9).
If it’s possible, return true, else return false.

Example:

> divisibleIntegers(n = 3, arr= [40, 50, 90])
> true // 945000 is divisible by 3
*/

function getDigitsFromNumbersArray(arr: number[]) {
	return Array.from(new Set(arr.flatMap(num => num.toString().split('').map(Number))));
}

function generatePermutations(digits: number[]): number[][] {
	if (digits.length === 0) {
		return [[]];
	}

	return digits.reduce((permutations, digit, index) => {
		const otherDigits = digits.filter((_, i) => i !== index);
		const subPermutations = generatePermutations(otherDigits);
		return [...permutations, ...subPermutations.map(permutation => [digit, ...permutation])];
	}, [] as number[][]);
}

function makeNumberFromDigits(digits: number[]) {
	return Number(digits.join(''));
}

export function divisibleIntegers(n: number, arr: number[]): boolean {
	const digits = getDigitsFromNumbersArray(arr).sort((a, b) => a - b);
	const permutations = generatePermutations(digits).map(makeNumberFromDigits);
	return permutations.some(permutation => permutation % n === 0);
}
