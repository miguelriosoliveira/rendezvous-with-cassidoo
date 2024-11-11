/*
Given a list of integers representing the heights of buildings,
return the maximum number of buildings that can be seen when looking from the left.
A building can see another building if it is taller than all the buildings to its left.
The height of the tallest building is included in the count.

Examples:

seeBuildingsLeft([1,2,3,4,5])
5

seeBuildingsLeft([5,4,3,2,1])
1

seeBuildingsLeft([3,7,8,3,6,1])
3
*/

export function seeBuildingsLeft(heights: number[]): number {
	return heights.reduce(
		({ count, maxHeight }, height) => ({
			count: count + Number(height > maxHeight),
			maxHeight: Math.max(height, maxHeight),
		}),
		{ count: 0, maxHeight: 0 },
	).count;
}
