import { flip } from './flip';

describe('#flip', () => {
	it('should flip the array horizontally', () => {
		const array = [
			[1, 2, 3],
			[4, 5, 6],
			[7, 8, 9],
		];
		expect(flip(array, 'horizontal')).toStrictEqual([
			[3, 2, 1],
			[6, 5, 4],
			[9, 8, 7],
		]);
	});

	it('should flip the array vertically', () => {
		const array = [
			[1, 2, 3],
			[4, 5, 6],
			[7, 8, 9],
		];
		expect(flip(array, 'vertical')).toStrictEqual([
			[7, 8, 9],
			[4, 5, 6],
			[1, 2, 3],
		]);
	});

	it('should handle an empty array', () => {
		expect(flip([], 'horizontal')).toStrictEqual([]);
	});

	it('should handle a single-row array horizontally', () => {
		const array = [[1, 2, 3]];
		expect(flip(array, 'horizontal')).toStrictEqual([[3, 2, 1]]);
	});

	it('should handle a single-column array vertically', () => {
		const array = [[1], [4], [7]];
		expect(flip(array, 'vertical')).toStrictEqual([[7], [4], [1]]);
	});

	it('should handle a non-squared matrix horizontally', () => {
		const array = [
			[1, 2, 3, 4],
			[5, 6, 7, 8],
			[9, 10, 11, 12],
		];
		expect(flip(array, 'horizontal')).toStrictEqual([
			[4, 3, 2, 1],
			[8, 7, 6, 5],
			[12, 11, 10, 9],
		]);
	});

	it('should handle a non-squared matrix vertically', () => {
		const array = [
			[1, 2, 3, 4],
			[5, 6, 7, 8],
			[9, 10, 11, 12],
		];
		expect(flip(array, 'vertical')).toStrictEqual([
			[9, 10, 11, 12],
			[5, 6, 7, 8],
			[1, 2, 3, 4],
		]);
	});
});
