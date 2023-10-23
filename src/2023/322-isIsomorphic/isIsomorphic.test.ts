import { isIsomorphic } from './isIsomorphic';

describe('#isIsomorphic', () => {
	it('should return true for isomorphic strings', () => {
		expect(isIsomorphic('abb', 'cdd')).toBe(true);
		expect(isIsomorphic('cass', '1233')).toBe(true);
		expect(isIsomorphic('paper', 'title')).toBe(true);
		expect(isIsomorphic('egg', 'add')).toBe(true);
		expect(isIsomorphic('foo', 'boo')).toBe(true);
	});

	it('should return false for non-isomorphic strings', () => {
		expect(isIsomorphic('cassidy', '1234567')).toBe(false);
		expect(isIsomorphic('abc', '1234')).toBe(false);
		expect(isIsomorphic('abba', 'abcd')).toBe(false);
		expect(isIsomorphic('add', 'eggs')).toBe(false);
	});

	it('should handle empty strings', () => {
		expect(isIsomorphic('', '')).toBe(true);
	});

	it('should handle strings of different lengths', () => {
		expect(isIsomorphic('abc', '1234')).toBe(false);
		expect(isIsomorphic('abcd', 'ab')).toBe(false);
	});
});
