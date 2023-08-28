/*
Given an array of integers, find whether it’s possible to construct an integer using all the digits
of the numbers in the array such that it would be divisible by n (where n is 1 <= n <= 9).
If it’s possible, return true, else return false.

Example:

> divisibleIntegers(n = 3, arr= [40, 50, 90])
> true // 945000 is divisible by 3
*/

import { generatePermutations } from './generatePermutations';

function getDigitsFromNumbersArray(arr: number[]) {
	return Array.from(arr.flatMap(num => num.toString().split('').map(Number)));
}

export function divisibleIntegers(n: number, arr: number[]): boolean {
	const digits = getDigitsFromNumbersArray(arr);
	const permutations = generatePermutations(digits);
	return permutations.some(permutation => permutation % n === 0);
}
