/*
Given an array of integers, sort them into two separate sorted arrays of even and odd numbers.
If you see a zero, skip it.

Example:

> separateAndSort([4,3,2,1,5,7,8,9])
> [[2,4,6], [1,3,5,7,9]]

> separateAndSort([1,1,1,1])
> [[], [1,1,1,1]]
*/

type EvensAndOdds = [number[], number[]];

export function separateAndSort(integers: number[]): EvensAndOdds {
	return integers
		.filter(Boolean)
		.sort((a, b) => a - b)
		.reduce<EvensAndOdds>(
			([evens, odds], number) => {
				if (number % 2 === 0) {
					evens.push(number);
				} else {
					odds.push(number);
				}
				return [evens, odds];
			},
			[[], []],
		);
}
