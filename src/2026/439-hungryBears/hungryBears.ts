/*
Given an array of objects representing bears in a forest, each with a name and hunger level,
return the names of all bears whose hunger level is above the forest average, sorted alphabetically.
In how few lines can you do this one?

Example:

const bears = [
	{ name: 'Baloo', hunger: 6 },
	{ name: 'Yogi', hunger: 9 },
	{ name: 'Paddington', hunger: 4 },
	{ name: 'Winnie', hunger: 10 },
	{ name: 'Chicago', hunger: 20 },
];

hungryBears(bears)
> ['Chicago', 'Winnie']
*/

interface Bear {
	name: string;
	hunger: number;
}

export function hungryBears(bears: Bear[]): string[] {
	const hungerSum = bears.reduce((sum, bear) => sum + bear.hunger, 0);
	const avg = hungerSum / bears.length;
	return bears.filter(bear => bear.hunger > avg)
		.map(bear => bear.name)
		.sort()
}
