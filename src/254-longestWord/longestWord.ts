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

function isAscending(numbers: number[]) {
	return numbers.every((number_, index) => index === 0 || number_ > numbers[index - 1]);
}

function isSubsequence(string_: string, word: string) {
	const wordLetters = word.split('');
	const stringLetterIndexesInWordWithoutRepeat: number[] = [];
	const letterIndexesInWord = string_.split('').map(letter => {
		const index = wordLetters.findIndex(
			(l, index_) => l === letter && !stringLetterIndexesInWordWithoutRepeat.includes(index_),
		);
		stringLetterIndexesInWordWithoutRepeat.push(index);
		return index;
	});
	return isAscending(letterIndexesInWord);
}

export function longestWord(string_: string, dict: string[]) {
	const longest = [...dict]
		.sort((a, b) => b.length - a.length)
		.find(word => isSubsequence(word, string_));
	return longest || null;
}
