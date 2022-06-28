import { longestWord } from './longestWord';

describe('testing longText', () => {
	it('should return apple', () => {
		const longest = longestWord('abppplee', ['able', 'ale', 'apple', 'bale', 'kangaroo']);
		expect(longest).toBe('apple');
	});
});
