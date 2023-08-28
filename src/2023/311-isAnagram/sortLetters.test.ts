import { sortLetters } from './sortLetters';

describe('#sortLetters', () => {
	it('should sort the letters in alphabetical order', () => {
		expect(sortLetters('barbie')).toBe('abbeir');
		expect(sortLetters('race')).toBe('acer');
		expect(sortLetters('listen')).toBe('eilnst');
		expect(sortLetters('debit card')).toBe(' abcddeirt');
		expect(sortLetters('')).toBe('');
	});
});
