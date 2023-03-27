import { longestWord } from './longestWord';

describe('#longestWord', () => {
	it('should return apple', () => {
		const longest = longestWord('abppplee', ['able', 'ale', 'apple', 'bale', 'kangaroo']);
		expect(longest).toBe('apple');
	});

	it('should return able', () => {
		const longest = longestWord('abplee', ['able', 'ale', 'apple', 'bale', 'kangaroo']);
		expect(longest).toBe('able');
	});

	it('should return ale', () => {
		const longest = longestWord('aflee', ['able', 'ale', 'apple', 'bale', 'kangaroo']);
		expect(longest).toBe('ale');
	});

	it('should return null because the single P', () => {
		const longest = longestWord('abplee', ['cable', 'dale', 'apple', 'bale', 'kangaroo']);
		expect(longest).toBeNull();
	});

	it('should return null because no word in dict is subsequence', () => {
		const longest = longestWord('bpppleea', ['able', 'ale', 'apple', 'bale', 'kangaroo']);
		expect(longest).toBeNull();
	});
});
