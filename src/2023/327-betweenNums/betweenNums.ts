/*
Given a start number a, an ending number b, and a string str that can be "odd", "even", or "prime",
return all of the numbers that are odd, even, or prime between a and b.
a will not always necessarily be less than b!

Example:

> betweenNums(3, 11, 'even')
> [4,6,8,10]

> betweenNums(15, 1, 'prime')
> [2,3,5,7,11,13]
*/

type NumType = 'even' | 'odd' | 'prime';

function range(start: number, end: number): number[] {
	return Array.from({ length: end - start + 1 }, (_, i) => start + i);
}

type CheckFunction = (n: number) => boolean;

const operationMap: Record<NumType, CheckFunction> = {
	even: (n: number) => n % 2 === 0,
	odd: (n: number) => n % 2 === 1,
	// thanks to: https://stackoverflow.com/a/40200710/4916416
	prime: (n: number) => {
		const root = Math.sqrt(n);
		for (let i = 2; i <= root; i++) {
			if (n % i === 0) {
				return false;
			}
		}
		return n > 1;
	},
};

export function betweenNums(a: number, b: number, str: NumType): number[] {
	const start = Math.min(a, b);
	const end = Math.max(a, b);
	return range(start, end).filter(num => operationMap[str](num));
}
