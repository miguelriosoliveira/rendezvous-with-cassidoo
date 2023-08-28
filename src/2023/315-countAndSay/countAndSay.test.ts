import { countAndSay } from './countAndSay';

describe('#countAndSay', () => {
	it('should generate the correct "count and say" string for input 112222555', () => {
		const result = countAndSay(112222555);
		expect(result).toBe('two 1s, then four 2s, then three 5s');
	});

	it('should generate the correct "count and say" string for input 3333333333', () => {
		const result = countAndSay(3333333333);
		expect(result).toBe('ten 3s');
	});

	it('should generate the correct "count and say" string for input 1111', () => {
		const result = countAndSay(1111);
		expect(result).toBe('four 1s');
	});

	it('should generate the correct "count and say" string for input 5', () => {
		const result = countAndSay(5);
		expect(result).toBe('one 5');
	});
});
