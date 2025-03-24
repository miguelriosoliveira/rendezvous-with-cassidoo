/*
Write a function that finds the longest streak of consecutive true values in a boolean array that
meets or exceeds a given streak goal. Return 0 if no such streak exists.

Examples:

findLongestStreak([true, true, false, true, true, true], 3)
3

findLongestStreak([true, true, true, false, true], 4)
0

findLongestStreak([true, true, true, true], 2)
4
*/

export function findLongestStreak(values: boolean[], streak: number): number {
	const { longestStreak } = values.reduce(
		(acc, value) => {
			const currentStreak = value ? acc.currentStreak + 1 : 0;
			const longestStreak = Math.max(acc.longestStreak, currentStreak);
			return { currentStreak, longestStreak };
		},
		{ longestStreak: 0, currentStreak: 0 },
	);

	return longestStreak >= streak ? longestStreak : 0;
}
