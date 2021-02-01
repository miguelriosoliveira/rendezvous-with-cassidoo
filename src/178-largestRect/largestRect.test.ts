import largestRect from './largestRect';

describe('testing largetRect', () => {
	it('should return 4', () => {
		const matrix = [
			['1', '0', '1', '0', '0'],
			['1', '0', '1', '1', '1'],
			['1', '1', '0', '1', '1'],
			['1', '0', '0', '1', '0'],
		];
		const maxArea = largestRect(matrix);
		expect(maxArea).toBe(4);
	});

	it('should return 6', () => {
		const matrix = [
			['1', '0', '1', '0', '0'],
			['1', '0', '1', '1', '1'],
			['1', '1', '0', '1', '1'],
			['1', '0', '0', '1', '1'],
		];
		const maxArea = largestRect(matrix);
		expect(maxArea).toBe(6);
	});
});
