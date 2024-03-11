import { maxGap } from './maxGap';

describe('#maxGap', () => {
	it('returns 3 for the array [3, 6, 9, 1, 2]', () => {
		expect(maxGap([3, 6, 9, 1, 2])).toBe(3);
	});

	it('returns 0 for an empty array', () => {
		expect(maxGap([])).toBe(0);
	});

	it('returns 0 for an array with one element', () => {
		expect(maxGap([5])).toBe(0);
	});

	it('returns the difference between two elements for an array with exactly two elements', () => {
		expect(maxGap([8, 2])).toBe(6);
	});
});
