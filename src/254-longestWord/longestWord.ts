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
	return numbers.every((num, index) => index === 0 || num > numbers[index - 1]);
}

function isSubsequence(str: string, word: string) {
	const wordLetters = word.split('');
	const strLetterIndexesInWordWithoutRepeat: number[] = [];
	const letterIndexesInWord = str.split('').map(letter => {
		const index = wordLetters.findIndex(
			(l, i) => l === letter && !strLetterIndexesInWordWithoutRepeat.includes(i),
		);
		strLetterIndexesInWordWithoutRepeat.push(index);
		return index;
	});
	return isAscending(letterIndexesInWord);
}

export function longestWord(str: string, dict: string[]) {
	const longest = [...dict]
		.sort((a, b) => b.length - a.length)
		.find(word => isSubsequence(word, str));
	return longest || null;
}
