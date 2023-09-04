import { firstDuplicate, removeDuplicates } from './firstDuplicate';

describe('#firstDuplicate', () => {
	it('should return the first duplicate character in a string', () => {
		expect(firstDuplicate('abcdefg')).toBeUndefined();
		expect(firstDuplicate('hello')).toBe('l');
		expect(firstDuplicate('programming')).toBe('r');
	});

	it('should return undefined for an empty string', () => {
		expect(firstDuplicate('')).toBeUndefined();
	});
});

describe('#removeDuplicates', () => {
	it('should remove all duplicate characters from a string', () => {
		expect(removeDuplicates('abcdefg')).toBe('abcdefg');
		expect(removeDuplicates('hello')).toBe('helo');
		expect(removeDuplicates('programming')).toBe('progamin');
	});

	it('should return an empty string for an empty input string', () => {
		expect(removeDuplicates('')).toBe('');
	});
});
