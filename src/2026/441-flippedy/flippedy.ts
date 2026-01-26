/*
You are given a string consisting of lowercase words, each separated by a single space.
Determine how many vowels appear in the first word.
Then, reverse each following word that has the same vowel count.

Examples:

flippedy("cat and mice")
> "cat dna mice"

flippedy("banana healthy")
> "banana healthy"
*/

const VOWELS = new Set(['a', 'e', 'i', 'o', 'u']);

function countVowels(word: string): number {
	return [...word].filter(char => VOWELS.has(char)).length;
}

function reverseWord(word: string): string {
	return [...word].reverse().join('');
}

function shouldReverse(word: string, targetCount: number): boolean {
	return countVowels(word) === targetCount;
}

export const flippedy = (sentence: string): string => {
	const [head, ...tail] = sentence.split(' ');
	const vowelCount = countVowels(head);
	const flippedRest = tail.map(word => shouldReverse(word, vowelCount) ? reverseWord(word) : word)
	return [head, ...flippedRest].join(' ');
};

