import { parensSubstring } from './parensSubstring';

describe('testing parensSubstring', () => {
	it('should return 2 for "(()("', () => {
		const substr = parensSubstring('(()(');
		expect(substr).toBe(2);
	});

	it('should return 2 for "((()"', () => {
		const substr = parensSubstring('((()');
		expect(substr).toBe(2);
	});

	it('should return 4 for ")()())"', () => {
		const substr = parensSubstring(')()())');
		expect(substr).toBe(4);
	});

	it('should return 6 for "()(()))))"', () => {
		const substr = parensSubstring('()(()))))');
		expect(substr).toBe(6);
	});

	it('should return 6 for ")()(()))"', () => {
		const substr = parensSubstring(')()(()))');
		expect(substr).toBe(6);
	});
});
