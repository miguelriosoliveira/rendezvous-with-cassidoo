import { onlyEvens } from './onlyEvens';

describe('#onlyEvens', () => {
	it('should return an array of even numbers sorted in ascending order', () => {
		expect(onlyEvens([1, 2, 3, 4, 5, 2])).toStrictEqual([2, 2, 4]);
		expect(onlyEvens([7, 8, 1, 0, 2, 5])).toStrictEqual([0, 2, 8]);
		expect(onlyEvens([11, 13, 15])).toStrictEqual([]);
		expect(onlyEvens([4, 1, 3, 8, 2, 6])).toStrictEqual([2, 4, 6, 8]);
	});

	it('should handle an empty array', () => {
		expect(onlyEvens([])).toStrictEqual([]);
	});

	it('should handle an array with no even numbers', () => {
		expect(onlyEvens([1, 3, 5, 7, 9])).toStrictEqual([]);
	});

	it('should handle an array with all even numbers', () => {
		expect(onlyEvens([2, 4, 6, 8, 10])).toStrictEqual([2, 4, 6, 8, 10]);
	});

	it('should handle an array with duplicate even numbers', () => {
		expect(onlyEvens([4, 2, 4, 6, 2])).toStrictEqual([2, 2, 4, 4, 6]);
	});
});
