/*
You are given a list of positive integers which represents some range of integers which has been truncated.
Find the missing bits, insert ellipses to show that that part has been truncated, and print it.
If the consecutive values differ by exactly two, then insert the missing value.

Examples:

> missingBits([1,2,3,4,20,21,22,23])
> "[1,2,3,4,...,20,21,22,23]"

> missingBits([1,2,3,5,6])
> "[1,2,3,4,5,6]"

> missingBits([1,3,20,27])
> "[1,2,3,...,20,...,27]"
*/

export function missingBits(bits: number[]): string {
	const result = [
		...bits
			.slice(0, -1) // until next to last bit, to avoid leading ellipses
			.map((bit, i) => {
				const diff = bits[i + 1] - bit;
				return diff === 1 ? bit : diff === 2 ? `${bit},${bit + 1}` : `${bit},...`;
			}),
		bits.at(-1), // inserting last bit
	];
	return `[${result}]`;
}
