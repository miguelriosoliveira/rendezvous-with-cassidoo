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
		// Calculate score options for withReset state:
		// 1. Continue from previous reset: withResetScore + num
		// 2. Reset right before this element: start fresh with just num
		const continueAfterReset = withResetScore + num;
		const resetNow = num;

		// Calculate score for noReset state: just keep adding
		const newNoResetScore = noResetScore + num;

		// Update states: choose the best option for each
		withResetScore = Math.max(continueAfterReset, resetNow);
		noResetScore = newNoResetScore;
	}

	// Return the maximum final score
	// We can also reset at the very end to get 0 if both scores are negative
	return Math.max(0, noResetScore, withResetScore);
}
