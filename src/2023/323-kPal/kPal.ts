/*
Given a string s, you are allowed to delete at most k characters. Find if the string can be a palindrome after deleting at most k characters.

Example:

> kPal('abcweca', 2)
> true

> kPal('acxcb', 1)
> false
*/

function checkPalindrome(s: string): boolean {
	return s === s.split('').reverse().join('');
}

function getSubstrings(s: string) {
	return s.split('').map((c, i) => s.slice(0, i) + s.slice(i + 1));
}

function findInnerPalindrome(s: string): string | undefined {
	if (checkPalindrome(s)) {
		return s;
	}

	return getSubstrings(s).find(currentStr => checkPalindrome(currentStr));
}

export function kPal(s: string, k: number): boolean {
	if (checkPalindrome(s)) {
		return true;
	}

	return getSubstrings(s)
		.map(currentStr => findInnerPalindrome(currentStr))
		.some(innerPal => innerPal && s.length - innerPal.length <= k);
}
