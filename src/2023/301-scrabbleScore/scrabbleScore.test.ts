import { scrabbleScore } from './scrabbleScore';

describe('#scrabbleScore', () => {
	it('should return 49 for FIZZBUZZ', () => {
		expect(scrabbleScore('FIZZBUZZ')).toBe(49);
	});

	it('should return 0 for an empty string', () => {
		expect(scrabbleScore('')).toBe(0);
	});

	it('should calculate the score for all lowercase letters', () => {
		expect(scrabbleScore('abcdefghijklmnopqrstuvwxyz')).toBe(87);
	});

	it('should calculate the score for all uppercase letters', () => {
		expect(scrabbleScore('ABCDEFGHIJKLMNOPQRSTUVWXYZ')).toBe(87);
	});

	it('should calculate the score for a string with spaces', () => {
		expect(scrabbleScore('HELLO WORLD')).toBe(17);
	});

	it('should calculate the score for a string with special characters and numbers', () => {
		expect(scrabbleScore('Scrabble123!')).toBe(14);
	});

	it('should calculate the score for a string with all the highest-scoring letters', () => {
		expect(scrabbleScore('JXQZ')).toBe(36);
	});

	it('should calculate the score for a string with all the lowest-scoring letters', () => {
		expect(scrabbleScore('EAITONRTLSUDGBCMPFHWYK')).toBe(48);
	});

	it('should calculate the score for a string with mixed lowercase and uppercase letters', () => {
		expect(scrabbleScore('HelloWORLD')).toBe(17);
	});

	it('should calculate the score for a string with repeated letters', () => {
		expect(scrabbleScore('BANANA')).toBe(8);
	});

	it('should return 0 for a string with no scoring letters', () => {
		expect(scrabbleScore('12345')).toBe(0);
	});
});
