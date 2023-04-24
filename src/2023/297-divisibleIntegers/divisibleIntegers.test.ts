import { divisibleIntegers } from './divisibleIntegers';

describe('#divisibleIntegers', () => {
	it('should return true', () => {
		expect(divisibleIntegers(3, [40, 50, 90])).toBe(true);
	});

	it('should return false', () => {
		expect(divisibleIntegers(133, [40, 50, 90])).toBe(false);
	});
});
