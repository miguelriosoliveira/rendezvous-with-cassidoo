import { numToWords } from './numToWords';

describe('#numToWords', () => {
	it('should convert number to words', () => {
		expect(numToWords(0)).toBe('zero');
		expect(numToWords(10)).toBe('ten');
		expect(numToWords(11)).toBe('eleven');
		expect(numToWords(12)).toBe('twelve');
		expect(numToWords(13)).toBe('thirteen');
		expect(numToWords(14)).toBe('fourteen');
		expect(numToWords(15)).toBe('fifteen');
		expect(numToWords(16)).toBe('sixteen');
		expect(numToWords(17)).toBe('seventeen');
		expect(numToWords(18)).toBe('eighteen');
		expect(numToWords(19)).toBe('nineteen');
		expect(numToWords(20)).toBe('twenty');
		expect(numToWords(23)).toBe('twenty three');
		expect(numToWords(32)).toBe('thirty two');
		expect(numToWords(40)).toBe('forty');
		expect(numToWords(66)).toBe('sixty six');
		expect(numToWords(77)).toBe('seventy seven');
		expect(numToWords(88)).toBe('eighty eight');
		expect(numToWords(99)).toBe('ninety nine');
		expect(numToWords(100)).toBe('one hundred');
		expect(numToWords(554)).toBe('five hundred fifty four');
	});

	it('should not be able to convert a number larger than 999', () => {
		expect(() => numToWords(1000)).toThrow('Number too large');
	});
});
