import { scoreWordGame } from './scoreWordGame';

describe('#scoreWordGame', () => {
	it('should return the word with the highest score', () => {
		const wordList = ['apple', 'banana', 'cherry', 'date', 'fig'];
		const A_CODE = 'a'.charCodeAt(0);
		const Z_CODE = 'z'.charCodeAt(0);
		const TOTAL_LETTERS = Z_CODE - A_CODE + 1;
		const letterScores: Record<string, number> = [...Array(TOTAL_LETTERS).keys()].reduce(
			(scores, i) => ({ ...scores, [String.fromCharCode(A_CODE + i)]: i + 1 }),
			{},
		);
		expect(scoreWordGame(wordList, letterScores)).toBe('cherry');
	});

	it('should handle a tie in scores and return the lexicographically smallest word', () => {
		const wordList = ['apple', 'bat', 'day', 'gif', 'fig'];
		const letterScores = { a: 1, b: 2, d: 4, f: 6 };
		expect(scoreWordGame(wordList, letterScores)).toBe('fig');
	});

	it('should handle an empty word list', () => {
		const wordList: string[] = [];
		const letterScores = { a: 1, b: 2, c: 3 };
		expect(scoreWordGame(wordList, letterScores)).toBeUndefined();
	});

	it('should handle an empty letter scores dictionary', () => {
		const wordList = ['apple', 'banana', 'cherry'];
		const letterScores = {};
		expect(scoreWordGame(wordList, letterScores)).toBeUndefined();
	});
});
