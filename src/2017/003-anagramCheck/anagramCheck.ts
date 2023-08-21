/*
Write a function that takes in two strings and returns true if they are anagrams.
*/

export function anagramCheck(str1: string, str2: string): boolean {
	return (
		str1.toLowerCase().split('').sort().join('') === str2.toLowerCase().split('').sort().join('')
	);
}
