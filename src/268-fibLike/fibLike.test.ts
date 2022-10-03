import { fibLike } from './fibLike';

describe('testing fibLike', () => {
	it('should return fibonacci-like sequence', () => {
		expect(fibLike(10, 20, 5)).toStrictEqual([10, 20, 30, 50, 80]);
		expect(fibLike(3, 7, 5)).toStrictEqual([3, 7, 10, 17, 27]);
		expect(fibLike(0, 1, 10)).toStrictEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
	});

	it('should throw error if desired length is less then minimum', () => {
		expect(() => fibLike(0, 1, 1)).toThrow('length should be greater than 1');
	});
});
