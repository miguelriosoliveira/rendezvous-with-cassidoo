/*
Given a list of words and a dictionary of letter scores, find the word with the highest score
according to the rules: score = word_length * (sum of letter scores in the word).
If there are multiple words with the same highest score, return the lexicographically smallest one.

Example:

const wordList = ["apple", "banana", "cherry", "date", "fig"];

const letterScores = [...Array(26).keys()].reduce((scores, i) => (scores[String.fromCharCode(97 + i)] = i + 1, scores), {});
// This produces { 'a': 1, 'b': 2, 'c': 3, 'd': 4, ... }

scoreWordGame(wordList, letterScores)
// 'cherry'
*/

export function scoreWordGame(
	wordList: string[],
	letterScores: Record<string, number>,
): string | undefined {
	const LETTER_SCORES = new Proxy(letterScores, { get: (target, key: string) => target[key] || 0 });

	return wordList
		.map<[string, number]>(word => [
			word,
			word.length * word.split('').reduce((score, char) => score + LETTER_SCORES[char], 0),
		])
		.filter(([word, score]) => score > 0)
		.sort(([word1, score1], [word2, score2]) => score2 - score1)
		.filter(([word, score], i, [[firstWord, highestScore]]) => score === highestScore)
		.map(([word]) => word)
		.sort((word1, word2) => word1.localeCompare(word2))
		.at(0);
}
