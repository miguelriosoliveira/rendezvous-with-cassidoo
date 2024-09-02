import { maxPairs } from './maxPairs';

describe('#maxPairs', () => {
	it('should return the maximum number of matching pairs', () => {
		expect(maxPairs(['L-10', 'R-10', 'L-11', 'R-10', 'L-10', 'R-11'])).toBe(3);
	});

	it('should return 0 when there are no matching pairs', () => {
		expect(maxPairs(['L-10', 'L-11', 'L-12', 'L-13'])).toBe(0);
	});

	it('should return 1 when there is only one matching pair', () => {
		expect(maxPairs(['L-8', 'L-8', 'L-8', 'R-8'])).toBe(1);
	});

	it('should return 4 when there are multiple pairs of different sizes', () => {
		expect(maxPairs(['L-7', 'R-7', 'L-8', 'R-8', 'L-9', 'R-9', 'L-10', 'R-10'])).toBe(4);
	});

	it('should handle cases with excess shoes of one type', () => {
		expect(maxPairs(['L-10', 'L-10', 'R-10', 'R-10', 'R-10'])).toBe(2);
	});

	it('should return 0 when all shoes are of the same type', () => {
		expect(maxPairs(['L-6', 'L-6', 'L-6', 'L-6'])).toBe(0);
	});

	it('should return 0 when the input is empty', () => {
		expect(maxPairs([])).toBe(0);
	});

	it('should handle large numbers with repeated sizes', () => {
		expect(maxPairs(['L-9', 'L-9', 'R-9', 'R-9', 'R-9', 'L-9', 'L-9', 'R-9', 'L-9'])).toBe(4);
	});

	it('should return 0 when no matching sizes exist', () => {
		expect(maxPairs(['L-1', 'R-2', 'L-3', 'R-4', 'L-5', 'R-6'])).toBe(0);
	});

	it('should return 1 when there is only one pair', () => {
		expect(maxPairs(['L-15', 'R-15'])).toBe(1);
	});
});
