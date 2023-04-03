import { charCount, numToWords } from './charCount';

describe('#charCount', () => {
	it('should return a number greater then zero', () => {
		const count = charCount();
		expect(count).not.toBe('zero');
	});
});

describe('#numToWords', () => {
	it('should convert 0 to words', () => {
		expect(numToWords(0)).toBe('zero');
	});

	it('should convert 12 to words', () => {
		expect(numToWords(12)).toBe('twelve');
	});

	it('should convert 40 to words', () => {
		expect(numToWords(40)).toBe('forty');
	});

	it('should convert 500 to words', () => {
		expect(numToWords(500)).toBe('five hundred');
	});

	it('should convert 1000 to words', () => {
		expect(numToWords(1000)).toBe('one thousand');
	});

	it('should convert 1234 to words', () => {
		expect(numToWords(1234)).toBe('one thousand two hundred thirty four');
	});

	it('should not be able to convert a number larger than 10000', () => {
		expect(numToWords(10_001)).toBe('Number too large');
	});
});
