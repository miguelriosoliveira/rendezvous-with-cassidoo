/*
Given an integer array nums, sum each element in the array in order.
You are allowed to use at most one reset during the run:
when you reset, your current score becomes 0 and you continue with the next elements.
Return the maximum score you can end with.

Example:

> maxScoreWithOneReset([2, -1, 2, -5, 2, 2]) // reset after -5
> 4

> maxScoreWithOneReset([4, -10, 3, 2, -1, 6]) // reset after -10
> 10

> maxScoreWithOneReset([-50, -2, -3]) // reset after -3
> 0
*/

export function maxScoreWithOneReset(nums: number[]): number {
	let best = 0; // best score we can end with
	let backSum = 0;

	for (let i = nums.length - 1; i >= 0; i--) {
		backSum += nums[i];
		best = Math.max(best, backSum);
	}

	return best;
}
