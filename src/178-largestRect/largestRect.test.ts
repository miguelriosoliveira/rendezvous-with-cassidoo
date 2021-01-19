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

	// it("should return -1 because the string don't contains '2020'", () => {
	// 	const position2020 = find2020('2220000202220020220');
	// 	expect(position2020).toBe(-1);
	// });

	// it('should return the position 4', () => {
	// 	const position2020 = find2020('22222020');
	// 	expect(position2020).toBe(4);
	// });

	// it('should return the position 0', () => {
	// 	const position2020 = find2020('20202222');
	// 	expect(position2020).toBe(0);
	// });
});
