/*
Given an array of characters chars, compress it such that consecutive duplicate characters are
replaced with the character followed by the count of duplicates.
If the count is 1, omit it.

Examples:

> compress(["a", "b", "b", "b", "c"])
> ["a", "b", "3", "c"]

> compress(["a", "a", "b", "b", "c", "c", "c"])
> ["a", "2", "b", "2", "c", "3"]
*/

type CharGroup = {
	char: string;
	count: number;
};

export function compress(chars: string[]): string[] {
	return chars
		.reduce<CharGroup[]>((acc, char) => {
			const last = acc[acc.length - 1];
			if (last && last.char === char) {
				last.count++;
			} else {
				acc.push({ char, count: 1 });
			}
			return acc;
		}, [])
		.flatMap(({ char, count }) => (count > 1 ? [char, String(count)] : [char]));
}
