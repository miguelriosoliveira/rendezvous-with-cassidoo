/*
Write a function that takes an array of integers representing the number of flowers planted in a
line, and an integer k representing the number of additional flowers you want to plant.
Return whether it's possible to plant all k flowers without planting any two flowers adjacent to
each other.

Example:

> canPlantFlowers([1, 0, 0, 0, 1], 1)
> true // you can plant 1 flower between the others

> canPlantFlowers([1, 0, 0, 0, 1], 2)
> false

> canPlantFlowers([0, 0, 0, 0, 0], 3)
> true

> canPlantFlowers([1, 0, 1, 0, 1], 1)
> false
*/

type BinaryNumber = 0 | 1;

export function canPlantFlowers(flowerSpots: BinaryNumber[], k: number): boolean {
	return (
		flowerSpots.reduce((count, hasFlower, i) => {
			const prevSpot = flowerSpots[i - 1];
			const nextSpot = flowerSpots[i + 1];
			return count + Number([prevSpot, hasFlower, nextSpot].every(spot => !spot));
		}, 0 as number) >= k
	);
}
