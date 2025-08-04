/*
Given an array arr representing the positions of monsters along a straight line, and an integer d
representing the minimum safe distance required between any two monsters, write a function to
determine if all monsters are at least d units apart.
If not, return the smallest distance found between any two monsters.
If all monsters are safely spaced, return -1.

Examples:

let monsters = [3, 8, 10, 15];
let d = 6;
minMonsterDistance(monsters, d)
> 2

minMonsterDistance([5, 9, 14, 18], 4)
> -1
*/

export function minMonsterDistance(monsters: number[], d: number): number {
	const minDistance = Math.min(
		...monsters
			.toSorted((a, b) => a - b)
			.map((monsterPos, i, array) => array[i + 1] - monsterPos)
			.filter(monsterPos => !Number.isNaN(monsterPos)),
	);

	return minDistance < d ? minDistance : -1;
}
