import { findLongestTimeGap } from './findLongestTimeGap';

describe('#findLongestTimeGap', () => {
	it('should return 0 for a single timestamp', () => {
		expect(findLongestTimeGap(['12:00'])).toBe(0);
	});

	it('should return the correct gap for two timestamps', () => {
		expect(findLongestTimeGap(['09:00', '11:00'])).toBe(120);
	});

	it('should return the longest gap for unsorted timestamps', () => {
		expect(findLongestTimeGap(['14:00', '09:00', '15:00', '10:30'])).toBe(360);
	});

	it('should handle duplicate timestamps correctly', () => {
		expect(findLongestTimeGap(['08:00', '10:00', '10:00', '14:00'])).toBe(240);
	});

	it('should return 0 for an empty array', () => {
		expect(findLongestTimeGap([])).toBe(0);
	});
});
