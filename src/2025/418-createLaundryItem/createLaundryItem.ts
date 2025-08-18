/*
Write a generator function createLaundryItem() that returns an object representing a laundry item.
This object should have a method nextCycle() which, when called, advances the item through a series
of laundry cycles in order: "soak", "wash", "rinse", "spin", and "dry".
After the final cycle, subsequent calls to nextCycle() should return "done".

Example:

let towel = createLaundryItem();

console.log(towel.nextCycle()); // "soak"
console.log(towel.nextCycle()); // "wash"
console.log(towel.nextCycle()); // "rinse"
console.log(towel.nextCycle()); // "spin"
console.log(towel.nextCycle()); // "dry"
console.log(towel.nextCycle()); // "done"
console.log(towel.nextCycle()); // "done"
*/

type LaundryItem = {
	nextCycle(): string;
};

export function createLaundryItem(): LaundryItem {
	const state = ['soak', 'wash', 'rinse', 'spin', 'dry'];
	let i = 0;

	return { nextCycle: () => state[i++] || 'done' };
}
