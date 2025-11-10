import { merge } from './merge';

describe('#merge', () => {
	it('should merge two sorted arrays correctly', () => {
		const a = [1, 3, 5, 0, 0, 0];
		const b = [2, 4, 6];
		merge(a, b);
		expect(a).toStrictEqual([1, 2, 3, 4, 5, 6]);
	});

	it('should handle when b is empty', () => {
		const a = [1, 2, 3];
		const b: number[] = [];
		merge(a, b);
		expect(a).toStrictEqual([1, 2, 3]);
	});

	it('should handle when a is initially empty (only buffer)', () => {
		const a = [0, 0, 0];
		const b = [2, 4, 6];
		merge(a, b);
		expect(a).toStrictEqual([2, 4, 6]);
	});

	it('should merge correctly when all elements in b are smaller', () => {
		const a = [5, 6, 7, 0, 0, 0];
		const b = [1, 2, 3];
		merge(a, b);
		expect(a).toStrictEqual([1, 2, 3, 5, 6, 7]);
	});

	it('should merge correctly when arrays contain duplicate values', () => {
		const a = [1, 3, 5, 0, 0, 0];
		const b = [3, 5, 7];
		merge(a, b);
		expect(a).toStrictEqual([1, 3, 3, 5, 5, 7]);
	});

	it('should handle negative numbers', () => {
		const a = [-3, -1, 0, 0, 0];
		const b = [-2, 1];
		merge(a, b);
		expect(a).toStrictEqual([-3, -2, -1, 0, 1]);
	});
});
