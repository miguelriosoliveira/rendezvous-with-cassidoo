/*
Given a string array, find the maximum product of word lengths where the words don't share any letters.

Example:

> wordLengthProduct(["fish","fear","boo","egg","cake","abcdef"])
> 16 // "fish" and "cake"

> wordLengthProduct(["a","aa","aaa","aaaa"])
> 0 // all of them share "a"
*/

export function wordLengthProduct(words: string[]): number {
	return (
		words
			.map(word => ({
				word,
				pair: words
					.filter(w => w.split('').every(char => !word.includes(char)))
					.sort((a, b) => b.length - a.length)
					.at(0),
			}))
			.map(({ word, pair }) => word.length * (pair?.length || 0))
			.sort((a, b) => b - a)
			.at(0) || 0
	);
}
