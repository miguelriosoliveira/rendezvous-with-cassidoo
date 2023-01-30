/*
Let’s say you have n doors that start out as closed. With the first pass across the doors, you toggle every door open.
With the second pass, you toggle every second door. With the third, every third door, and so on.
Write a function that takes in an integer numberOfPasses, and returns how many doors are open after the number of passes.

Example:

let n = 7
let numberOfPasses = 3

> passDoors(n, numberOfPasses)
> 4

// Explanation:
// 0 means open, 1 means closed
// Initial: 1 1 1 1 1 1 1
// Pass 1:  0 0 0 0 0 0 0
// Pass 2:  0 1 0 1 0 1 0
// Pass 3:  0 1 1 1 0 0 0
*/

export function passDoors(nDoors: number, nPasses: number): number {
	let doors = Array.from({ length: nDoors }, () => 1);
	const passes = Array.from({ length: nPasses }, (_, index) => index + 1);

	passes.forEach(nPass => {
		doors = doors.map((door, index) => {
			return (index + 1) % nPass === 0 ? 1 - door : door;
		});
	});

	const closedDoorsCount = doors.reduce((count, number) => count + number, 0);
	return nDoors - closedDoorsCount;
}
