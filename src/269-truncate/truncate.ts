/*
Write a function that truncates words in a string to length n.

Example:

let n = 3

> truncate('never gonna give you up', n)
> 'nev gon giv you up'

> truncate('*hello* darkness, my ~old_friend', n)
> '*hel* dar, my ~old_fri'
*/

export function truncate(phrase: string, length: number): string {
	// regex to match words including accents: https://stackoverflow.com/a/26900132/4916416
	let phraseCopy = phrase;
	const words = phraseCopy.match(/[A-Za-zÀ-ÖØ-öø-ÿ]+/g) || [];

	words.forEach(word => {
		phraseCopy = phraseCopy.replace(word, word.slice(0, length));
	});

	return phraseCopy;
}
