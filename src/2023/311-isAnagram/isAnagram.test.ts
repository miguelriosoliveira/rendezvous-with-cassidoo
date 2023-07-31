import { isAnagram } from './isAnagram';

describe('#isAnagram', () => {
	it('should return true when t is an anagram of s', () => {
		expect(isAnagram('barbie', 'beibra')).toBe(true);
		expect(isAnagram('race', 'care')).toBe(true);
		expect(isAnagram('listen', 'silent')).toBe(true);
		expect(isAnagram('debit card', 'bad credit')).toBe(true);
	});

	it('should return false when t is not an anagram of s', () => {
		expect(isAnagram('barbie', 'oppenheimer')).toBe(false);
		expect(isAnagram('hello', 'world')).toBe(false);
		expect(isAnagram('apple', 'orange')).toBe(false);
		expect(isAnagram('race', 'racer')).toBe(false);
	});

	it('should return false for strings with different lengths', () => {
		expect(isAnagram('hello', 'world!')).toBe(false);
		expect(isAnagram('hello', 'hell')).toBe(false);
	});

	it('should return true for empty strings', () => {
		expect(isAnagram('', '')).toBe(true);
	});
});
