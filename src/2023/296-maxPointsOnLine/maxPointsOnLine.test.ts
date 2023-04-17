import { maxPointsOnLine } from './maxPointsOnLine';

describe('#maxPointsOnLine', () => {
	it('should return 4 points', () => {
		expect(
			maxPointsOnLine([
				[1, 1],
				[3, 2],
				[5, 3],
				[4, 1],
				[2, 3],
				[1, 4],
			]),
		).toBe(4);
	});

	it('should return 3 points', () => {
		expect(
			maxPointsOnLine([
				[2, 4],
				[-3, -1],
				[1, 1],
				[4, 8],
				[6, 12],
				[-2, -4],
				[3, 6],
				[-1, -2],
				[7, 14],
				[0, 0],
			]),
		).toBe(8);
	});
});
