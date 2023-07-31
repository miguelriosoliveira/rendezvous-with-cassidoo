/*
Given two strings `s` and `t`, return `true` if `t` is an anagram of `s`, and `false` otherwise.
Try this in a language you're not comfortable with!

Example:

> isAnagram('barbie', 'oppenheimer')
> false

> isAnagram('race', 'care')
> true
*/

function sortLetters(str: string): string {
	return str.split('').sort().join('');
}

export function isAnagram(s: string, t: string): boolean {
	return sortLetters(s) === sortLetters(t);
}
