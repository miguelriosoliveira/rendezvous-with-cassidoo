import { charCount } from './charCount';

describe('#charCount', () => {
	it('should return a number greater then zero', () => {
		expect(charCount()).not.toBe('zero');
	});

	it('should return a valid number word', () => {
		const result = charCount();
		expect(result).toMatch(/^[a-z ]+$/);
		expect(result.length).toBeGreaterThan(0);
	});

	it('should return a consistent result', () => {
		const result1 = charCount();
		const result2 = charCount();
		expect(result1).toBe(result2);
	});

	it('should return words containing expected terms (future proof for larger file)', () => {
		// The character count should be large enough to include "hundred" in the English words
		expect(charCount()).toMatch(/(hundred|thousand|million)/);
	});
});
