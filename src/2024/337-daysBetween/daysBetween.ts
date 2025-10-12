/*
Write a function called daysBetween that takes in two dates, and returns the number of days between those dates.
You can choose the date format you'd like to accept!

Example:

> daysBetween('Jan 1, 2024', 'Jan 29, 2024')
> 28

> daysBetween('Feb 29, 2020', 'Oct 31, 2023')
> 1340
*/

const ONE_DAY_IN_MILLISECONDS = 1000 * 60 * 60 * 24;

export function daysBetween(dateStr1: string, dateStr2: string): number {
	let date1 = new Date(dateStr1);
	let date2 = new Date(dateStr2);

	// thanks to https://www.freecodecamp.org/news/how-to-validate-a-date-in-javascript/
	if ([date1, date2].some(date => Number.isNaN(date.getDate()))) {
		throw new Error('Invalid date');
	}

	// Create new dates using year/month/day to force midnight local time
	date1 = new Date(Date.UTC(date1.getFullYear(), date1.getMonth(), date1.getDate()));
	date2 = new Date(Date.UTC(date2.getFullYear(), date2.getMonth(), date2.getDate()));

	return Math.abs(Number(date1) - Number(date2)) / ONE_DAY_IN_MILLISECONDS;
}
