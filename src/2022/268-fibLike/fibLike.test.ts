import { fibLike, isFibLike } from './fibLike';

describe('#fibLike', () => {
	it('should return fibonacci-like sequence', () => {
		expect(fibLike(10, 20, 5)).toStrictEqual([10, 20, 30, 50, 80]);
		expect(fibLike(3, 7, 5)).toStrictEqual([3, 7, 10, 17, 27]);
		expect(fibLike(3, 7, 2)).toStrictEqual([3, 7]);
		expect(fibLike(0, 1, 10)).toStrictEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
	});

	it('should throw error if desired length is less then minimum', () => {
		expect(() => fibLike(0, 1, 1)).toThrow('length should be greater than 1');
	});
});

describe('#isFibLike', () => {
	it('should return that is a fibonacci-like sequence', () => {
		expect(isFibLike([10, 20, 30, 50, 80])).toBe(true);
		expect(isFibLike([3, 7, 10, 17, 27])).toBe(true);
		expect(isFibLike([1, 2, 3])).toBe(true);
		expect(isFibLike([0, 1, 1, 2, 3, 5, 8, 13, 21, 34])).toBe(true);
	});

	it('should return that is NOT a fibonacci-like sequence', () => {
		expect(isFibLike([])).toBe(false);
		expect(isFibLike([1, 1, 1])).toBe(false);
		expect(isFibLike([0, 1, 2, 3, 4, 5])).toBe(false);
	});
});
