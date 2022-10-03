/*
Given two integers, generate a "fibonacci-like" sequence of n digits (where the next number in the pattern is the sum of the previous two numbers).
Extra credit: Given a sequence, determine if the sequence is “fibonacci-like”.

Example:

let n = 5

> fibLike(10, 20, n)
> [10, 20, 30, 50, 80]

> fibLike(3, 7, n)
> [3, 7, 10, 17, 27]
*/

type FibSequence = [number, number, ...number[]];

export function fibLike(first: number, second: number, nDigits: number): FibSequence {
	if (nDigits < 2) {
		throw new Error('length should be greater than 1');
	}

	let previous2 = first;
	let previous1 = second;

	return [
		first,
		second,
		...Array.from({ length: nDigits - 2 }).map(() => {
			const newNumber = previous2 + previous1;
			previous2 = previous1;
			previous1 = newNumber;
			return newNumber;
		}),
	];
}
