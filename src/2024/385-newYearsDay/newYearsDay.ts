/*
Given a year, return the day of the week for New Year's Day of that year.

Example:

> newYearsDay(2025)
> "Wednesday"

> newYearsDay(2024)
> "Monday"
*/

export function newYearsDay(year: number): string {
	return new Date(year.toString()).toLocaleDateString('en-us', { weekday: 'long' });
}
