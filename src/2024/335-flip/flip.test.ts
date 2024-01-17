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
});
