import { betweenNums } from './betweenNums';

describe('#betweenNums', () => {
	it('should return odd numbers between a and b', () => {
		expect(betweenNums(3, 11, 'even')).toStrictEqual([4, 6, 8, 10]);
	});

	it('should return prime numbers between a and b', () => {
		expect(betweenNums(15, 1, 'prime')).toStrictEqual([2, 3, 5, 7, 11, 13]);
	});

	it('should return even numbers between a and b', () => {
		expect(betweenNums(4, 10, 'even')).toStrictEqual([4, 6, 8, 10]);
	});

	it('should return odd numbers between a and b', () => {
		expect(betweenNums(3, 11, 'odd')).toStrictEqual([3, 5, 7, 9, 11]);
	});

	it('should return empty array if there are no even numbers between a and b', () => {
		expect(betweenNums(1, 1, 'even')).toStrictEqual([]);
	});

	it('should return empty array if there are no odd numbers between a and b', () => {
		expect(betweenNums(2, 2, 'odd')).toStrictEqual([]);
	});

	it('should return empty array if there are no prime numbers between a and b', () => {
		expect(betweenNums(8, 10, 'prime')).toStrictEqual([]);
	});

	it('should handle the case where a is greater than b', () => {
		expect(betweenNums(10, 5, 'even')).toStrictEqual([6, 8, 10]);
	});
});
