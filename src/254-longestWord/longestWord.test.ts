import { longestWord } from './longestWord';

describe('testing longText', () => {
	it('should return apple', () => {
		const longest = longestWord('abppplee', ['able', 'ale', 'apple', 'bale', 'kangaroo']);
		expect(longest).toBe('apple');
	});

	it('should return null because no word in dict is subsequence', () => {
		const longest = longestWord('bpppleea', ['able', 'ale', 'apple', 'bale', 'kangaroo']);
		expect(longest).toBeNull();
	});
});
