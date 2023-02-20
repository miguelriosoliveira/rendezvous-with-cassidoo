import { numBalanced } from './numBalanced';

describe('testing numBalanced', () => {
	it('should return 0', () => {
		expect(numBalanced('()')).toBe(0);
	});

	it('should return 1', () => {
		expect(numBalanced('(()')).toBe(1);
	});

	it('should return 6', () => {
		expect(numBalanced('))()))))()')).toBe(6);
	});

	it('should return 5', () => {
		expect(numBalanced(')))))')).toBe(5);
	});

	it('should return 2', () => {
		expect(numBalanced(')(')).toBe(2);
	});
});
