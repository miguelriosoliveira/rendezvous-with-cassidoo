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
	const numbers = Array.from({ length: to - from + 1 }, (_, i) => i + from);

	return function* gen() {
		yield;
	};
}
