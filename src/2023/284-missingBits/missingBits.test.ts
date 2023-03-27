import { missingBits } from './missingBits';

describe('#missingBits', () => {
	it('should show 1 gap', () => {
		const missing = missingBits([1, 2, 3, 4, 20, 21, 22, 23]);
		expect(missing).toBe('[1,2,3,4,...,20,21,22,23]');
	});

	it('should fill the gap', () => {
		const missing = missingBits([1, 2, 3, 5, 6]);
		expect(missing).toBe('[1,2,3,4,5,6]');
	});

	it('should fill first gap and show 2 next gaps', () => {
		const missing = missingBits([1, 3, 20, 27]);
		expect(missing).toBe('[1,2,3,...,20,...,27]');
	});

	it('should fill first gap, show 2 next gaps and fill last gap', () => {
		const missing = missingBits([1, 3, 20, 27, 29]);
		expect(missing).toBe('[1,2,3,...,20,...,27,28,29]');
	});

	it('should return empty array', () => {
		const missing = missingBits([]);
		expect(missing).toBe('[]');
	});

	it('should return array with one item', () => {
		const missing = missingBits([2]);
		expect(missing).toBe('[2]');
	});
});
