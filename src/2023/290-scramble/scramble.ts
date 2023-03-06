/*
If you mix up the order of letters in a word, many people can slitl raed and urenadnstd tehm.
Write a function that takes an input sentence, and mixes up the insides of words (anything longer than 3 letters).

Example:

> scramble(["A quick brown fox jumped over the lazy dog."])
> "A qciuk bwron fox jmepud oevr the lzay dog."
*/

function shuffleWord(word: string): string {
	const sanitizedWord = word.replace(/\W/g, '');

	if (sanitizedWord.length <= 3) {
		return word;
	}

	const first = word.at(0);
	const middle = word.slice(1, -1);
	const last = word.at(-1);

	return [
		first,
		middle
			.split('')
			.map((_, i) => middle[(i + 1) % middle.length])
			.join(''),
		last,
	].join('');
}

export function scramble(sentence: string): string {
	return sentence
		.split(' ')
		.map(word => shuffleWord(word))
		.join(' ');
}
