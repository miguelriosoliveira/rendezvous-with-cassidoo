/*
Given a list of strings `arr`, and a max size `n`, return a new list where the strings (from left to right)
are joined together with a space, so that each new string is less than or equal to the max size.

Examples:

> combineStrings(["a", "b", "c", "d", "e", "f", "g"], 5)
> ["a b c", "d e f", "g"]

> combineStrings(["a", "b", "c", "d", "e", "f", "g"], 12)
> ["a b c d e f", "g"]

> combineStrings(["alpha", "beta", "gamma", "delta", "epsilon"], 20)
> ["alpha beta gamma", "delta epsilon"]
*/

export function combineStrings(strings: string[], chunkSize: number): string[] {
	const chunks: string[] = [];
	let subWord = strings[0];

	strings.slice(1).forEach(string => {
		// (sub-word size) + (string size) + (1 space) should be <= the chunk size
		if ((subWord + string).length + 1 > chunkSize) {
			chunks.push(subWord);
			subWord = string;
			return;
		}

		subWord += ` ${string}`;
	});

	return [...chunks, subWord]; // the last sub-word must be appended after the loop
}
