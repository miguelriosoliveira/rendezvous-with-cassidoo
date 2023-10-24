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

export function kPal(s: string, k: number): boolean {
	if (k < 0) {
		return false;
	}

	if (checkPalindrome(s)) {
		return true;
	}

	return getSubstrings(s).some(substr => kPal(substr, k - 1));
}
