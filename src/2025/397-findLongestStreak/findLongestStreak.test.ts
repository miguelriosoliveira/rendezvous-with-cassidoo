import { findLongestStreak } from './findLongestStreak';

describe('#findLongestStreak', () => {
	it('returns 3 for [true, true, false, true, true, true] with a goal of 3', () => {
		expect(findLongestStreak([true, true, false, true, true, true], 3)).toBe(3);
	});

	it('returns 0 for [true, true, true, false, true] with a goal of 4', () => {
		expect(findLongestStreak([true, true, true, false, true], 4)).toBe(0);
	});

	it('returns 4 for [true, true, true, true] with a goal of 2', () => {
		expect(findLongestStreak([true, true, true, true], 2)).toBe(4);
	});

	it('returns 0 for an empty array', () => {
		expect(findLongestStreak([], 1)).toBe(0);
	});

	it('returns 0 when there are no true values', () => {
		expect(findLongestStreak([false, false, false], 1)).toBe(0);
	});

	it('returns the full length when all values are true and meet the goal', () => {
		expect(findLongestStreak([true, true, true, true, true], 3)).toBe(5);
	});

	it('returns the longest streak even if there are multiple streaks meeting the goal', () => {
		expect(
			findLongestStreak([true, true, true, false, true, true, true, true, false, true], 3),
		).toBe(4);
	});

	it('returns 0 when streaks exist but none meet the goal', () => {
		expect(findLongestStreak([true, false, true, true, false, true], 3)).toBe(0);
	});

	it('handles a case where a streak exactly equals the goal', () => {
		expect(findLongestStreak([false, true, true, true, false, true], 3)).toBe(3);
	});
});
