/*
Write a function fromTo that produces a generator, that will produce values in a range.

Usage:
let gen = fromTo(5,7)

> gen()
5
> gen()
6
> gen()
7
> gen()
undefined
*/

export function fromTo(from: number, to: number) {
	const length = Math.abs(to - from) + 1;
	const order = from > to ? -1 : 1;
	const numbers = Array.from({ length }, (_, index) => from + index * order);
	let currentIndex = -1;
	return function gen() {
		currentIndex++;
		return numbers[currentIndex];
	};
}
