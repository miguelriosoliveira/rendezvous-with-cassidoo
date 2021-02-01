import maxHistogramArea from './maxHistogramArea';

describe('testing maxHistogramArea', () => {
	// it('should return 4', () => {
	// 	const histogram = [1, 2, 4];
	// 	const maxArea = maxHistogramArea(histogram);
	// 	expect(maxArea).toBe(4);
	// });

	// it('should return 6', () => {
	// 	const histogram = [2, 1, 2, 3, 1];
	// 	const maxArea = maxHistogramArea(histogram);
	// 	expect(maxArea).toBe(6);
	// });

	// it('should return 5', () => {
	// 	const histogram = [2, 1, 2, 2, 1];
	// 	const maxArea = maxHistogramArea(histogram);
	// 	expect(maxArea).toBe(6);
	// });

	it('should return 4', () => {
		const histogram = [3, 1, 0, 2, 2];
		const maxArea = maxHistogramArea(histogram);
		expect(maxArea).toBe(4);
	});
});
