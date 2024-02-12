/*
Write a function that produces a generator that produces values in a range.

Example:

let range = fromTo(0,3)

> range()
0
> range()
1
> range()
2
> range()
null
*/

export function getDirection(from: number, to: number) {
	return (-1) ** Number(from > to);
}

export function fromTo(from: number, to: number): () => number | null {
	const direction = getDirection(from, to);
	from -= direction;

	return () => {
		from += direction;
		return from === to ? null : from;
	};
}
