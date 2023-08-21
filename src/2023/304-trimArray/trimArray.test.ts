import { trimArray } from './trimArray';

describe('#trimArray', () => {
	it('should remove elements from the front and back of the array', () => {
		expect(trimArray([1, 2, 3, 4, 5, 6], 2, 1)).toStrictEqual([3, 4, 5]);
	});

	it('should remove elements only from the front of the array', () => {
		expect(trimArray([6, 2, 4, 3, 7, 1, 3], 5, 0)).toStrictEqual([1, 3]);
	});

	it('should remove no elements from the front and back of the array', () => {
		expect(trimArray([1, 7], 0, 0)).toStrictEqual([1, 7]);
	});

	it('should remove all elements from the front and back of the array', () => {
		expect(trimArray([1, 2, 3, 4], 2, 2)).toStrictEqual([]);
	});

	it('should remove elements only from the back of the array', () => {
		expect(trimArray([9, 8, 7, 6, 5], 0, 3)).toStrictEqual([9, 8]);
	});

	it('should remove all elements from the front of the array', () => {
		expect(trimArray([1, 2, 3, 4, 5], 5, 0)).toStrictEqual([]);
	});
});
