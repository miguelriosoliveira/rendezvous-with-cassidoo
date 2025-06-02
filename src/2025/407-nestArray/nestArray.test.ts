import { nestArray } from './nestArray';

describe('#nestArray', () => {
	it('returns a nested array for multiple elements', () => {
		expect(nestArray([1, 2, 3, 4])).toStrictEqual([1, [2, [3, [4]]]]);
	});

	it('returns the same array for a single element', () => {
		expect(nestArray([1])).toStrictEqual([1]);
	});

	it('returns an empty array for empty input', () => {
		expect(nestArray([])).toStrictEqual([]);
	});

	it('handles two elements correctly', () => {
		expect(nestArray([7, 8])).toStrictEqual([7, [8]]);
	});

	it('handles negative numbers and zeros', () => {
		expect(nestArray([0, -1, -2])).toStrictEqual([0, [-1, [-2]]]);
	});

	it('handles large arrays', () => {
		const input = [1, 2, 3, 4, 5, 6];
		const expected = [1, [2, [3, [4, [5, [6]]]]]];
		expect(nestArray(input)).toStrictEqual(expected);
	});
});
