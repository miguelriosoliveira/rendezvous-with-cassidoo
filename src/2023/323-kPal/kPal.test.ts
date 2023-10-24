import { kPal } from './kPal';

describe('#kPal', () => {
	it('should return true for strings that can be made palindrome by deleting at most k characters', () => {
		expect(kPal('abcweca', 2)).toBe(true);
		expect(kPal('abcdeedcba', 3)).toBe(true);
		expect(kPal('racecar', 0)).toBe(true);
		expect(kPal('racecar1', 1)).toBe(true);
		expect(kPal('racecar12', 2)).toBe(true);
		expect(kPal('racecar123', 3)).toBe(true);
		expect(kPal('hello', 10)).toBe(true);
	});

	it('should return false for strings that cannot be made palindrome by deleting at most k characters', () => {
		expect(kPal('acxcb', 1)).toBe(false);
		expect(kPal('abcdefg', 2)).toBe(false);
	});

	it('should handle empty strings', () => {
		expect(kPal('', 0)).toBe(true);
		expect(kPal('', 1)).toBe(true);
	});

	it('should handle k = 0', () => {
		expect(kPal('abcdeedcba', 0)).toBe(true);
		expect(kPal('acxcb', 0)).toBe(false);
	});
});
