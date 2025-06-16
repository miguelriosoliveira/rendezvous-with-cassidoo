import { romanToInt } from './romanToInt';

describe('#romanToInt', () => {
	it('converts single numerals', () => {
		expect(romanToInt('I')).toBe(1);
		expect(romanToInt('V')).toBe(5);
		expect(romanToInt('X')).toBe(10);
		expect(romanToInt('L')).toBe(50);
		expect(romanToInt('C')).toBe(100);
		expect(romanToInt('D')).toBe(500);
		expect(romanToInt('M')).toBe(1000);
	});

	it('handles additive notation', () => {
		expect(romanToInt('III')).toBe(3);
		expect(romanToInt('VIII')).toBe(8);
		expect(romanToInt('XIII')).toBe(13);
		expect(romanToInt('XXX')).toBe(30);
	});

	it('handles subtractive notation', () => {
		expect(romanToInt('IV')).toBe(4);
		expect(romanToInt('IX')).toBe(9);
		expect(romanToInt('XL')).toBe(40);
		expect(romanToInt('XC')).toBe(90);
		expect(romanToInt('CD')).toBe(400);
		expect(romanToInt('CM')).toBe(900);
	});

	it('handles mixed subtractive and additive notation', () => {
		expect(romanToInt('XIV')).toBe(14);
		expect(romanToInt('XIX')).toBe(19);
		expect(romanToInt('XXIV')).toBe(24);
		expect(romanToInt('LXXXIX')).toBe(89);
	});

	it('handles larger combinations', () => {
		expect(romanToInt('XCIX')).toBe(99);
		expect(romanToInt('CXLIV')).toBe(144);
		expect(romanToInt('CDXLIV')).toBe(444);
		expect(romanToInt('CMXCIX')).toBe(999);
	});

	it('handles clean multiples of 1000', () => {
		expect(romanToInt('M')).toBe(1000);
		expect(romanToInt('MM')).toBe(2000);
		expect(romanToInt('MMM')).toBe(3000);
	});

	it('handles 1000+ with additive parts', () => {
		expect(romanToInt('MXX')).toBe(1020);
		expect(romanToInt('MCC')).toBe(1200);
		expect(romanToInt('MCM')).toBe(1900);
		expect(romanToInt('MMX')).toBe(2010);
	});

	it('handles 1000+ with subtractive parts', () => {
		expect(romanToInt('MIV')).toBe(1004);
		expect(romanToInt('MIX')).toBe(1009);
		expect(romanToInt('MXL')).toBe(1040);
		expect(romanToInt('MCMXCIV')).toBe(1994);
	});

	it('handles large edge case 3999', () => {
		expect(romanToInt('MMMCMXCIX')).toBe(3999);
	});
});
