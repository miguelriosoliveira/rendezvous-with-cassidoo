import { repeatedGroups } from './repeatedGroups';

describe('#repeatedGroups', () => {
	it('should return a group of 2s', () => {
		const numbers = [1, 2, 2, 4, 5];
		expect(repeatedGroups(numbers)).toStrictEqual([[2, 2]]);
	});

	it('should return groups of 1s, 0s, 4s and 9s', () => {
		const numbers = [1, 1, 0, 0, 8, 4, 4, 4, 3, 2, 1, 9, 9];
		expect(repeatedGroups(numbers)).toStrictEqual([
			[1, 1],
			[0, 0],
			[4, 4, 4],
			[9, 9],
		]);
	});

	it('should return empty', () => {
		const numbers: number[] = [];
		expect(repeatedGroups(numbers)).toStrictEqual([]);
	});

	it('should return groups of 1s, 0s, 4s and 1s again', () => {
		const numbers = [1, 1, 0, 0, 8, 4, 4, 4, 3, 2, 1, 1, 1];
		expect(repeatedGroups(numbers)).toStrictEqual([
			[1, 1],
			[0, 0],
			[4, 4, 4],
			[1, 1, 1],
		]);
	});
});
