import { anagramCheck } from './anagramCheck';

describe('#anagramCheck', () => {
	it('should return true for valid anagrams', () => {
		expect(anagramCheck('listen', 'silent')).toBe(true);
		expect(anagramCheck('debit card', 'bad credit')).toBe(true);
		expect(anagramCheck('Astronomer', 'MoonStarer')).toBe(true);
		expect(anagramCheck('orchestra', 'carthorse')).toBe(true);
		expect(anagramCheck('', '')).toBe(true);
		expect(anagramCheck('12345', '54321')).toBe(true);
		expect(anagramCheck('test', 'sett')).toBe(true);
	});

	it('should return false for invalid anagrams: hello and world', () => {
		expect(anagramCheck('hello', 'world')).toBe(false);
		expect(anagramCheck('abc', 'def')).toBe(false);
		expect(anagramCheck('aaa', 'aa')).toBe(false);
	});
});
