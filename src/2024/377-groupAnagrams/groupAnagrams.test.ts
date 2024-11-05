import { getSortedAnagram, groupAnagrams } from './groupAnagrams';

describe('#getSortedAnagram', () => {
	it('should return a sorted anagram', () => {
		expect(getSortedAnagram('debitcard')).toBe('abcddeirt');
	});
});

describe('#groupAnagrams', () => {
	it('should group common anagrams together', () => {
		expect(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat'])).toStrictEqual([
			['eat', 'tea', 'ate'],
			['tan', 'nat'],
			['bat'],
		]);
	});

	it('should handle words with no common anagrams', () => {
		expect(groupAnagrams(['vote', 'please'])).toStrictEqual([['vote'], ['please']]);
	});

	it('should handle longer anagrams correctly', () => {
		expect(groupAnagrams(['debitcard', 'badcredit'])).toStrictEqual([['debitcard', 'badcredit']]);
	});

	it('should return an empty array when input is empty', () => {
		expect(groupAnagrams([])).toStrictEqual([]);
	});

	it('should handle single-word input correctly', () => {
		expect(groupAnagrams(['listen'])).toStrictEqual([['listen']]);
	});

	it('should handle all identical words', () => {
		expect(groupAnagrams(['see', 'see', 'see'])).toStrictEqual([['see', 'see', 'see']]);
	});

	it('should handle words that are anagrams with different cases', () => {
		expect(groupAnagrams(['Eat', 'Tea', 'ate', 'TEA'])).toStrictEqual([
			['Eat', 'Tea', 'ate', 'TEA'],
		]);
	});

	it('should handle words that are anagrams with numbers and symbols', () => {
		expect(groupAnagrams(['123', '231', '312', '@!#', '!@#'])).toStrictEqual([
			['123', '231', '312'],
			['@!#', '!@#'],
		]);
	});
});
