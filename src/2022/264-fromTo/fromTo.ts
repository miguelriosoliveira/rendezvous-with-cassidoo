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
	const order = Math.sign(to - from) || 1;
	let currentValue = from - order;
	return function gen() {
		currentValue += order;
		if (order === 1) {
			return currentValue <= to ? currentValue : undefined;
		}
		return currentValue >= to ? currentValue : undefined;
	};
}
