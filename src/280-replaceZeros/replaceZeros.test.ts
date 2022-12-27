import { replaceZeros, replaceZerosWithoutRegex } from './replaceZeros';

describe('testing replaceZeros', () => {
	it('should evaluate "1234500362000440" to "1234523623441"', () => {
		expect(replaceZeros('1234500362000440')).toBe('1234523623441');
	});

	it('should evaluate "123450036200044" to "123452362344"', () => {
		expect(replaceZeros('123450036200044')).toBe('123452362344');
	});

	it('should evaluate "000000000000" to "12"', () => {
		expect(replaceZeros('000000000000')).toBe('12');
	});

	it('should evaluate "123456789" to "123456789"', () => {
		expect(replaceZeros('123456789')).toBe('123456789');
	});
});

describe('testing replaceZerosWithoutRegex', () => {
	it('should evaluate "1234500362000440" to "1234523623441"', () => {
		expect(replaceZerosWithoutRegex('1234500362000440')).toBe('1234523623441');
	});

	it('should evaluate "123450036200044" to "123452362344"', () => {
		expect(replaceZerosWithoutRegex('123450036200044')).toBe('123452362344');
	});

	it('should evaluate "000000000000" to "12"', () => {
		expect(replaceZerosWithoutRegex('000000000000')).toBe('12');
	});

	it('should evaluate "123456789" to "123456789"', () => {
		expect(replaceZerosWithoutRegex('123456789')).toBe('123456789');
	});
});
