/*
Given an integer array nums, sum each element in the array in order.
You are allowed to use at most one reset during the run: when you reset,
your current score becomes 0 and you continue with the next elements.
Return the maximum score you can end with.

Examples:

maxScoreWithOneReset([2, -1, 2, -5, 2, 2])  // 4, reset after -5
maxScoreWithOneReset([4, -10, 3, 2, -1, 6]) // 10, reset after -10
maxScoreWithOneReset([-50, -2, -3])         // 0, reset after -3
*/

export function maxScoreWithOneReset(nums: number[]): number {
	if (nums.length === 0) {
		return 0;
	}

	// Dynamic programming approach:
	// Track two states at each position:
	// 1. noResetScore: best score without using reset yet
	// 2. withResetScore: best score after using one reset

	let noResetScore = 0;
	let withResetScore = 0;

	for (const num of nums) {
		// If we've already used reset, we just continue adding
		const newWithResetScore = withResetScore + num;

		// If we haven't used reset, we have two choices:
		// 1. Don't reset: continue adding
		// 2. Reset now: start fresh from 0 and add current number
		const newNoResetScore = noResetScore + num;
		const resetNowScore = num;

		// Update withResetScore: either continue after previous reset, or reset now
		withResetScore = Math.max(newWithResetScore, resetNowScore);

		// Update noResetScore: continue without reset
		noResetScore = newNoResetScore;
	}

	// Return the maximum of final scores (with or without reset)
	// But we want the maximum score we can END with, and we must allow negative scores to become 0
	return Math.max(0, noResetScore, withResetScore);
}
