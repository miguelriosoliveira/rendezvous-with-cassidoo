/*
Given a queue of customer names and an integer n, move every nth customer to the end of the line
while preserving relative order otherwise.

Example:

shuffleLine(["Ada", "Ben", "Cam", "Diya", "Eli", "Fay"], 3);
> ['Ada', 'Ben', 'Diya', 'Eli', 'Cam', 'Fay']
// Every 3rd customer is moved to the end, so "Cam" and "Fay"
// are moved after the others, preserving their original order.

shuffleLine(["A", "B", "C", "D", "E"], 2);
> ['A', 'C', 'E', 'B', 'D']

shuffleLine(["Mo", "Noah", "Oli"], 1);
> ['Mo', 'Noah', 'Oli']
*/

export function shuffleLine(names: string[], n: number): string[] {
	if (n < 2) {
		return names;
	}

	const head: string[] = [];
	const tail: string[] = [];

	names.forEach((name, i) => {
		if ((i + 1) % n === 0) {
			tail.push(name);
		} else {
			head.push(name);
		}
	});

	return [...head, ...tail];
}
