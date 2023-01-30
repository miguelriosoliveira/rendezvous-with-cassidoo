/*
Given a string, make every consonant after a vowel uppercase.
Can you do this with and without regex?

Example:

> capitalAfterVowel("hello world")
> "heLlo WoRld"

> capitalAfterVowel("xaabeuekadii")
> "xaaBeueKaDii"
*/

const VOWELS = new Set(['a', 'e', 'i', 'o', 'u']);
const SPACE = ' ';

function isVowel(prevLetter: string) {
	return VOWELS.has(prevLetter);
}

function isConsonant(prevLetter: string) {
	return !isVowel(prevLetter);
}

function isSpace(prevLetter: string) {
	return prevLetter === SPACE;
}

function isPreviousLetterVowel(string: string, index: number) {
	const prevLetter = string[index - 1];
	const prevPrevLetter = string[index - 2];
	return isVowel(prevLetter) || (isSpace(prevLetter) && isVowel(prevPrevLetter));
}

export function capitalAfterVowel(string: string): string {
	return string
		.split('')
		.map((letter, i) =>
			isConsonant(letter) && isPreviousLetterVowel(string, i) ? letter.toUpperCase() : letter,
		)
		.join('');
}

const VOWELS_STRING = Array.from(VOWELS).join('');
const VOWELS_REGEX = `[${VOWELS_STRING}]`;
const CONSONANTS_REGEX = `[^${VOWELS_STRING}]`;

export function capitalAfterVowelWithRegex(string: string): string {
	const replaceRegex = new RegExp(`(${VOWELS_REGEX}\\s?)(${CONSONANTS_REGEX})`, 'g');
	return string.replace(replaceRegex, (match, vowel, consonant) => vowel + consonant.toUpperCase());
}
