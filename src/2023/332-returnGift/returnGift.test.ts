import { returnGift } from './returnGift';

describe('#returnGift', () => {
	it('returns the last day to return a gift bought in December', () => {
		expect(returnGift('Dec 25, 2023')).toBe('Mar 24, 2024');
	});

	it('returns the last day to return a gift bought in a month other than December', () => {
		expect(returnGift('Jan 15, 2023')).toBe('Feb 14, 2023');
	});

	it('handles dates at the end of the year for December purchases', () => {
		expect(returnGift('Dec 31, 2023')).toBe('Mar 30, 2024');
	});

	it('handles dates at the end of the month for non-December purchases', () => {
		expect(returnGift('Feb 28, 2023')).toBe('Mar 30, 2023');
	});

	it('handles leap year for non-December purchases', () => {
		expect(returnGift('Feb 29, 2024')).toBe('Mar 30, 2024');
	});

	it('handles invalid date string', () => {
		expect(() => returnGift('Feb 32, 2024')).toThrow('Invalid date');
	});
});
