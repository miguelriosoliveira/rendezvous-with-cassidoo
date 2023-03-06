import { scramble } from './scramble';

describe('testing scramble', () => {
	it('should scramble example', () => {
		const sentence = 'A quick brown fox jumped over the lazy dog.';
		const scrambledSentence = scramble(sentence);

		expect(scrambledSentence).not.toEqual(sentence);
		expect(scrambledSentence.startsWith('A q')).toBe(true);
		expect(scrambledSentence.endsWith('y dog.')).toBe(true);
		expect(scrambledSentence).toHaveLength(sentence.length);
	});
});
