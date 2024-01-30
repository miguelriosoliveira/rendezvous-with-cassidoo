import { daysBetween } from './daysBetween';

describe('#daysBetween', () => {
	it('should return the correct number of days between two dates', () => {
		expect(daysBetween('Jan 1, 2024', 'Jan 29, 2024')).toBe(28);
		expect(daysBetween('Feb 29, 2020', 'Oct 31, 2023')).toBe(1340);
	});

	it('should return 0 for the same date', () => {
		expect(daysBetween('Mar 10, 2022', 'Mar 10, 2022')).toBe(0);
	});

	it('should handle leap years correctly', () => {
		expect(daysBetween('Feb 28, 2020', 'Mar 1, 2020')).toBe(2);
		expect(daysBetween('Feb 28, 2023', 'Mar 1, 2023')).toBe(1);
	});

	it('should throw error for invalid dates', () => {
		expect(() => daysBetween('Feb 28, 2020', 'Mar 1, -2020')).toThrow('Invalid date');
		expect(() => daysBetween('Feb 98, 2023', 'Mar 1, 2023')).toThrow('Invalid date');
	});
});
