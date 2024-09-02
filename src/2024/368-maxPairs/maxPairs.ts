/*
You are given an array of strings representing a collection of shoes.
Each shoe is labeled with its type ("L" for left or "R" for right) and its size.
Determine the maximum number of matching pairs of shoes that can be formed.


Example:

> maxPairs(["L-10", "R-10", "L-11", "R-10", "L-10", "R-11"])
> 3

> maxPairs(["L-10", "L-11", "L-12", "L-13"])
> 0

> maxPairs(["L-8", "L-8", "L-8", "R-8"])
> 1
*/

type ShoeSide = 'L' | 'R';
type Shoe = `${ShoeSide}-${number}`;

export function maxPairs(shoes: Shoe[]): number {
	return Object.values(
		shoes.reduce<Record<number, ShoeSide[]>>((map, shoe) => {
			const [side, sizeStr] = shoe.split('-') as [ShoeSide, string];
			const size = Number(sizeStr);
			if (!map[size]) {
				map[size] = [];
			}
			return { ...map, [size]: [...map[size], side] };
		}, {}),
	).reduce((sum, sides) => {
		// Stryker disable next-line all
		const leftCount = sides.filter(side => side === 'L').length;
		const rightCount = sides.length - leftCount;
		return sum + Math.min(leftCount, rightCount);
	}, 0);
}
