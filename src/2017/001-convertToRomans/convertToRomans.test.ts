import { convertToRomans } from './convertToRomans';

describe('testing convertToRomans', () => {
	it('should convert the standard values', () => {
		const SYMBOLS_MAP = {
			1: 'I',
			4: 'IV',
			5: 'V',
			9: 'IX',
			10: 'X',
			40: 'XL',
			50: 'L',
			90: 'XC',
			100: 'C',
			400: 'CD',
			500: 'D',
			900: 'CM',
			1000: 'M',
		};

		Object.entries(SYMBOLS_MAP).forEach(([key, value]) => {
			const romanNumber = convertToRomans(Number(key));
			expect(romanNumber).toBe(value);
		});
	});

	it('should convert 16 to XVI', () => {
		const romanNumber = convertToRomans(16);
		expect(romanNumber).toBe('XVI');
	});

	it('should convert 824 to DCCCXXIV', () => {
		const romanNumber = convertToRomans(824);
		expect(romanNumber).toBe('DCCCXXIV');
	});

	it('should convert 3549 to MMMDXLIX', () => {
		const romanNumber = convertToRomans(3549);
		expect(romanNumber).toBe('MMMDXLIX');
	});

	it('should convert 0 to the word "nulla"', () => {
		const romanNumber = convertToRomans(0);
		expect(romanNumber).toBe('nulla');
	});
});
