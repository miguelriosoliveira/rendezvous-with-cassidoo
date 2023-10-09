import { parseNumber } from './parseNumber';

describe('#parseNumber', () => {
	it('should convert "Twelve Thousand Three Hundred Forty Five" to 12345', () => {
		expect(parseNumber('Twelve Thousand Three Hundred Forty Five')).toBe(12345);
	});

	it('should convert "One Hundred Twenty Three" to 123', () => {
		expect(parseNumber('One Hundred Twenty Three')).toBe(123);
	});

	it('should handle "Two Million Three Hundred Forty Five Thousand Six Hundred Seventy Eight"', () => {
		expect(
			parseNumber('Two Million Three Hundred Forty Five Thousand Six Hundred Seventy Eight'),
		).toBe(2345678);
	});

	it('should handle "Five Hundred"', () => {
		expect(parseNumber('Five Hundred')).toBe(500);
	});

	it('should handle "Wrong Number"', () => {
		expect(parseNumber('Wrong Number')).toBe(0);
	});
});
