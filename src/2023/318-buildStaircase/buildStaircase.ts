/*
You have `n` equal-sized blocks and you want to build a staircase with them.
Return the number of steps you can fully build.

Example:

> buildStaircase(6)
> 3

// #
// ##
// ###

> buildStaircase(9)
> 3 // it takes 10 blocks to make 4 steps
*/

export function buildStaircase(n: number): number {
	let height = 2;
	while (n > 0) {
		n -= height;
		height++;
	}
	return height - 2;
}
