import { divisibleIntegers } from './divisibleIntegers';

describe('#divisibleIntegers', () => {
	it('should return true when a divisible integer can be constructed', () => {
		expect(divisibleIntegers(3, [40, 50, 90])).toBe(true);
		expect(divisibleIntegers(4, [12, 34, 56])).toBe(true);
		expect(divisibleIntegers(4, [42, 2, 6])).toBe(true);
		expect(divisibleIntegers(4, [42, 20, 60])).toBe(true);
	});

	it('should return false when a divisible integer cannot be constructed', () => {
		expect(divisibleIntegers(7, [78, 11])).toBe(false);
		expect(divisibleIntegers(9, [123, 456])).toBe(false);
	});
});
