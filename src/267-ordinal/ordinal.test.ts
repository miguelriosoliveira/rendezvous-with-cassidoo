import { ordinal } from './ordinal';

describe('testing ordinal', () => {
	it('should return ordinal suffix', () => {
		expect(ordinal(0)).toBe('0th');
		expect(ordinal(1)).toBe('1st');
		expect(ordinal(2)).toBe('2nd');
		expect(ordinal(3)).toBe('3rd');
		expect(ordinal(4)).toBe('4th');
		expect(ordinal(5)).toBe('5th');
		expect(ordinal(6)).toBe('6th');
		expect(ordinal(7)).toBe('7th');
		expect(ordinal(8)).toBe('8th');
		expect(ordinal(9)).toBe('9th');
		expect(ordinal(10)).toBe('10th');
		expect(ordinal(11)).toBe('11th');
		expect(ordinal(12)).toBe('12th');
		expect(ordinal(13)).toBe('13th');
		expect(ordinal(21)).toBe('21st');
		expect(ordinal(22)).toBe('22nd');
		expect(ordinal(23)).toBe('23rd');
		expect(ordinal(24)).toBe('24th');
		expect(ordinal(57)).toBe('57th');
	});
});
