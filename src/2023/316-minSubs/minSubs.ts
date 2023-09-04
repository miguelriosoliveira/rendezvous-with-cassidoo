/*
Given an array of integers and a number `k`
(where `k` is guaranteed to be less than the array's length),
return a subarray of length `k` with the minimum possible sum.
Maintain the order of the original array!

Example:

> minSubs([1,3,20,4,8,9,11], 3)
> [4,8,9]

> minSubs([4,4,4,4,8], 2)
> [4,4]
*/

function sumArray(numbers: number[]): number {
	return numbers.reduce((sum, num) => sum + num, 0);
}

export function minSubs(integers: number[], k: number): number[] {
	let result: number[] = [];

	let minSum = sumArray(integers);
	integers.slice(0, integers.length - k).forEach((num, i) => {
		const slice = integers.slice(i, i + k);
		const sum = sumArray(slice);
		if (sum < minSum) {
			minSum = sum;
			result = slice;
		}
	});

	return result;
}
