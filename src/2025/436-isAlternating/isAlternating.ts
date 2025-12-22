/*
An alternating array is a list of any length in which two (not necessarily different) values are
alternating (all even-indexed items are equal, and all odd-indexed items are equal).
Given an array, return true if it is alternating.

Examples:

[]             -> True
[1]            -> True
[1,1]          -> True
[1,2,1]        -> True
[10,5,10,5,10] -> True
[2,2,3,3]      -> False
[5,4,3,5,4,3]  -> False
*/

export function isAlternating(values: number[]): boolean {
	const [v1, v2] = values;
	return values.every((value, i) => value === (i % 2 === 0 ? v1 : v2));
}
