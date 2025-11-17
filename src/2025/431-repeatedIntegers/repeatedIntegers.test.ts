import { repeatedIntegers } from './repeatedIntegers';

describe('#repeatedIntegers', () => {
	it('should return the correct array for n=4', () => {
		expect(repeatedIntegers(4)).toStrictEqual([1, 2, 2, 3, 3, 3, 4, 4, 4, 4]);
	});

	it('should return an empty array for n<0', () => {
		expect(repeatedIntegers(-1)).toStrictEqual([]);
	});

	it('should return an empty array for n=0', () => {
		expect(repeatedIntegers(0)).toStrictEqual([]);
	});

	it('should return [1] for n=1', () => {
		expect(repeatedIntegers(1)).toStrictEqual([1]);
	});

	it('should return the correct array for n=3', () => {
		expect(repeatedIntegers(3)).toStrictEqual([1, 2, 2, 3, 3, 3]);
	});

	it('should work for larger values', () => {
		expect(repeatedIntegers(10)).toStrictEqual([
			1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 8, 8, 8,
			8, 8, 8, 8, 8, 9, 9, 9, 9, 9, 9, 9, 9, 9, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
		]);
	});
});
