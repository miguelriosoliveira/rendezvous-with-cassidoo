/*
Given a list of numbers, return all groups of repeating consecutive numbers.

Examples:

> repeatedGroups([1, 2, 2, 4, 5])
[[2, 2]]

> repeatedGroups([1, 1, 0, 0, 8, 4, 4, 4, 3, 2, 1, 9, 9])
[[1, 1], [0, 0], [4, 4, 4], [9, 9]]
*/

function countRepeated(numbers: number[]): number {
	let i = 1;
	while (numbers[i] === numbers[0]) {
		i++;
	}
	return i;
}

export function repeatedGroups(numbers: number[]): number[][] {
	const groups: number[][] = [];

	let i = 0;
	while (i < numbers.length) {
		const count = countRepeated(numbers.slice(i));
		if (count > 1) {
			const group = Array.from({ length: count }, () => numbers[i]);
			groups.push(group);
		}
		i += count;
	}

	return groups;
}
