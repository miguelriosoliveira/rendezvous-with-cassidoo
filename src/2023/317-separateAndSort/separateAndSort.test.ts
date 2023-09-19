import { separateAndSort } from './separateAndSort';

describe('#separateAndSort', () => {
	it('should separate and sort even and odd numbers', () => {
		expect(separateAndSort([4, 3, 2, 1, 5, 7, 8, 9])).toStrictEqual([
			[2, 4, 8],
			[1, 3, 5, 7, 9],
		]);
	});

	it('should handle an array with all even numbers', () => {
		expect(separateAndSort([2, 4, 6, 8, 10])).toStrictEqual([[2, 4, 6, 8, 10], []]);
	});

	it('should handle an array with all odd numbers', () => {
		expect(separateAndSort([1, 3, 5, 7, 9])).toStrictEqual([[], [1, 3, 5, 7, 9]]);
	});

	it('should handle an empty array', () => {
		expect(separateAndSort([])).toStrictEqual([[], []]);
	});

	it('should handle an array with zeros and negative numbers', () => {
		expect(separateAndSort([0, -2, 4, -6, 0, 3, 5, 7, 9])).toStrictEqual([
			[-6, -2, 4],
			[3, 5, 7, 9],
		]);
	});

	it('should handle an array with only zeros', () => {
		expect(separateAndSort([0, 0, 0])).toStrictEqual([[], []]);
	});
});
