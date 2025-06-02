/*
Turn an array of integers into a nested array.
You can think of this as the opposite of flattening an array!

Examples:

nestArray([1, 2, 3, 4])
> [1, [2, [3, [4]]]]

nestArray([1])
> [1]
*/

type NestedArray<T> = [] | [T] | [T, NestedArray<T>];

export function nestArray(integers: number[]): NestedArray<number> {
	if (integers.length === 0) {
		return [];
	}

	const [head, ...tail] = integers;

	if (integers.length === 1) {
		return [head];
	}

	return [head, nestArray(tail)];
}
