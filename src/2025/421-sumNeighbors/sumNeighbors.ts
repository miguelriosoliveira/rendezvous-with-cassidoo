/*
For an array of numbers, generate an array where for every element, all neighboring elements are
added to itself, and return the sum of that array.

Examples:

[]																			-> 0
[1]																			-> 1
[1, 4]																	-> 10 // (1+4 + 4+1)
[1, 4, 7]																-> 28
[1, 4, 7, 10]														-> 55
[-1, -2, -3]														-> -14
[0.1, 0.2, 0.3]													-> 1.4
[1,-20,300,-4000,50000,-600000,7000000]	-> 12338842
*/

export function sumNeighbors(numbers: number[]): number {
	return numbers.reduce((sum, curr, i, array) => {
		const prev = array[i - 1] || 0;
		const next = array[i + 1] || 0;
		return sum + prev + curr + next;
	}, 0);
}
