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

	it('should generate the correct "count and say" string for input 42', () => {
		const result = countAndSay(42);
		expect(result).toBe('one 4, then one 2');
	});

	it('should generate the correct "count and say" string for input 55555666666', () => {
		const result = countAndSay(55555666666);
		expect(result).toBe('five 5s, then six 6s');
	});

	it('should generate the correct "count and say" string for input 777777788888888', () => {
		const result = countAndSay(777777788888888);
		expect(result).toBe('seven 7s, then eight 8s');
	});

	it('should generate the correct "count and say" string for input 999999999', () => {
		const result = countAndSay(999999999);
		expect(result).toBe('nine 9s');
	});

	it('should generate the correct "count and say" string for input 500000000000', () => {
		const result = countAndSay(500000000000);
		expect(result).toBe('one 5, then eleven 0s');
	});

	it('should generate the correct "count and say" string for input 666666666666', () => {
		const result = countAndSay(666666666666);
		expect(result).toBe('twelve 6s');
	});

	it('should generate the correct "count and say" string for input 7777777777777', () => {
		const result = countAndSay(7777777777777);
		expect(result).toBe('thirteen 7s');
	});

	it('should generate the correct "count and say" string for input 88888888888888', () => {
		const result = countAndSay(88888888888888);
		expect(result).toBe('fourteen 8s');
	});

	it('should generate the correct "count and say" string for input 999999999999999', () => {
		const result = countAndSay(999999999999999);
		expect(result).toBe('fifteen 9s');
	});

	it('should generate the correct "count and say" string for input 1111111111111111', () => {
		const result = countAndSay(1111111111111111);
		expect(result).toBe('sixteen 1s');
	});
});
