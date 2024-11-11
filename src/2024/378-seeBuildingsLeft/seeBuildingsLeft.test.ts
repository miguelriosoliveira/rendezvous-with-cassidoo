import { seeBuildingsLeft } from './seeBuildingsLeft';

describe('#seeBuildingsLeft', () => {
	it('returns the correct count for a strictly increasing list', () => {
		expect(seeBuildingsLeft([1, 2, 3, 4, 5])).toBe(5);
	});

	it('returns the correct count for a strictly decreasing list', () => {
		expect(seeBuildingsLeft([5, 4, 3, 2, 1])).toBe(1);
	});

	it('returns the correct count for a list with mixed values', () => {
		expect(seeBuildingsLeft([3, 7, 8, 3, 6, 1])).toBe(3);
	});

	it('returns 1 for a list with all buildings of the same height', () => {
		expect(seeBuildingsLeft([5, 5, 5, 5, 5])).toBe(1);
	});

	it('returns the correct count for a list with one building', () => {
		expect(seeBuildingsLeft([10])).toBe(1);
	});

	it('returns the correct count for a list with some buildings taller after shorter ones', () => {
		expect(seeBuildingsLeft([4, 3, 7, 6, 9, 2])).toBe(3);
	});

	it('returns the correct count when the tallest building is at the end of the list', () => {
		expect(seeBuildingsLeft([1, 2, 3, 4, 10])).toBe(5);
	});

	it('returns the correct count for an empty list', () => {
		expect(seeBuildingsLeft([])).toBe(0);
	});

	it('returns the correct count when there are zeros in the heights', () => {
		expect(seeBuildingsLeft([0, 2, 0, 4, 6, 0, 8])).toBe(4);
	});
});
