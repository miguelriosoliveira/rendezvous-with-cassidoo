/*
Given two arrays, return all pairs (where each number is in each array) whose sum is an odd number.

Examples:

oddSum([9, 14, 6, 2, 11], [8, 4, 7, 20])
> [9, 20], [14, 7], [11,8]

oddSum([2, 4, 6, 8], [10, 12, 14])
> null // (or whatever falsy value you prefer)
*/

function isOddSum(n1: number, n2: number): boolean {
	return (n1 + n2) % 2 === 1;
}

export function oddSum(numbers1: number[], numbers2: number[]): Array<[number, number]> | null {
	const usedMap1: Record<number, true> = {};
	const usedMap2: Record<number, true> = {};
	const result: Array<[number, number]> = [];

	const numbers2Rev = numbers2.toSorted((a, b) => b - a);
	numbers1.forEach(n1 =>
		numbers2Rev.forEach(n2 => {
			if (isOddSum(n1, n2) && !usedMap1[n1] && !usedMap2[n2]) {
				usedMap1[n1] = true;
				usedMap2[n2] = true;
				result.push([n1, n2]);
			}
		}),
	);

	return result.length ? result : null;
}
