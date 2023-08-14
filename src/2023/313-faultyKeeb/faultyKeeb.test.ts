import { faultyKeeb } from './faultyKeeb';

describe('#faultyKeeb', () => {
	it('should reverse when encounter vowels in a string', () => {
		expect(faultyKeeb('string')).toBe('rtsng');
		expect(faultyKeeb('hello world!')).toBe('w hllrld!');
		expect(faultyKeeb('aeiou')).toBe('');
	});

	it('should not reverse consonants and other characters', () => {
		expect(faultyKeeb('bcdfghjklmnpqrstvwxz')).toBe('bcdfghjklmnpqrstvwxz');
		expect(faultyKeeb('12345')).toBe('12345');
		expect(faultyKeeb('!@#$%^&*()')).toBe('!@#$%^&*()');
		expect(faultyKeeb('')).toBe('');
	});

	it('should handle mixed vowel and consonant strings', () => {
		expect(faultyKeeb('apple')).toBe('lpp');
		expect(faultyKeeb('banana split')).toBe('lps nbnt');
		expect(faultyKeeb('testing 123')).toBe('tstng 123');
	});

	it('should handle uppercase and lowercase vowels', () => {
		expect(faultyKeeb('aPpLe')).toBe('LpP');
		expect(faultyKeeb('BaNaNa SpLiT')).toBe('LpS NBNT');
		expect(faultyKeeb('tEsTiNg 123')).toBe('TstNg 123');
	});

	it('should handle vowels-only string', () => {
		expect(faultyKeeb('aeiou')).toBe('');
		expect(faultyKeeb('AaEeIiOoUuYy')).toBe('');
	});
});
