/*
Given a list of numbers, return all groups of repeating consecutive numbers.

Examples:

> repeatedGroups([1, 2, 2, 4, 5])
[[2, 2]]

> repeatedGroups([1, 1, 0, 0, 8, 4, 4, 4, 3, 2, 1, 9, 9])
[[1, 1], [0, 0], [4, 4, 4], [9, 9]]
*/

export function repeatedGroups(numbers: number[]): number[][] {
	return numbers.reduce<number[][]>((groups, number, i) => {
		const lastGroup = groups.at(-1);
		if (number === numbers[i + 1]) {
			if (lastGroup && lastGroup[0] === number) {
				return [...groups.slice(0, -1), [...lastGroup, number]];
			}
			return [...groups, [number, number]];
		}
		return groups;
	}, []);
}
