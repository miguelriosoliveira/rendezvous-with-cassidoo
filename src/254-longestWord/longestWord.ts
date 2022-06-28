/*
Given a string str and a set of words dict, find the longest word in dict that is a subsequence of str.

Example:
```js
let str = "abppplee"
let dict = {"able", "ale", "apple", "bale", "kangaroo"}

$ longestWord(str, dict)
$ 'apple'
// "able" and "ale" also work, but are shorter than "apple"
// "bale" has all the right letters, but not in the right order
```
*/

function isSubsequence(str: string, word: string) {
	return str.split('').every(letter => word.includes(letter));
}

export function longestWord(str: string, dict: string[]) {
	const longest = [...dict]
		.sort((a, b) => b.length - a.length)
		.find(word => isSubsequence(word, str));
	return longest;
}
