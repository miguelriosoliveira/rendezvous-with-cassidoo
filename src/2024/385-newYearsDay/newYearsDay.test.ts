import { newYearsDay } from './newYearsDay';

describe('#newYearsDay', () => {
	it("should return 'Monday' for the year 2024", () => {
		expect(newYearsDay(2024)).toBe('Monday');
	});

	it("should return 'Wednesday' for the year 2025", () => {
		expect(newYearsDay(2025)).toBe('Wednesday');
	});

	it("should return 'Sunday' for the year 2023", () => {
		expect(newYearsDay(2023)).toBe('Sunday');
	});

	it("should return 'Saturday' for the year 2022", () => {
		expect(newYearsDay(2022)).toBe('Saturday');
	});

	it("should return 'Friday' for the year 2021", () => {
		expect(newYearsDay(2021)).toBe('Friday');
	});

	it("should return 'Wednesday' for the year 2020 (leap year)", () => {
		expect(newYearsDay(2020)).toBe('Wednesday');
	});

	it("should return 'Saturday' for the year 2000 (leap year)", () => {
		expect(newYearsDay(2000)).toBe('Saturday');
	});
});
