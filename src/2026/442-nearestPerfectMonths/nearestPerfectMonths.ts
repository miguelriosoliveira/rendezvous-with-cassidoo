
/*
February 2026 is a perfect month!
Write a function that returns the closest previous and next perfect month around the given Gregorian year.

Examples:

nearestPerfectMonths(2025)
> { prev: "2021-02", next: "2026-02" }

nearestPerfectMonths(2026)
> { prev: "2026-02", next: "2027-02" }
*/

type YearFebruary = `${number}-02`;

type NearestPerfectMonths = {
	prev: YearFebruary;
	next: YearFebruary;
}

function hasPerfectFebruary(year: number): boolean {
	// months are 0-based, so February = 1
	const feb1 = new Date(Date.UTC(year, 1, 1)).getUTCDay();
	return feb1 === 0 || feb1 === 1; // 0 = Sunday, 1 = Monday
}

export function nearestPerfectMonths(year: number): NearestPerfectMonths {
	let prevYear = year;
	while (!hasPerfectFebruary(prevYear)) {
		prevYear--;
	}

	let nextYear = year + 1;
	while (!hasPerfectFebruary(nextYear)) {
		nextYear++;
	}

	return {
		prev: `${prevYear}-02`,
		next: `${nextYear}-02`,
	};
}

