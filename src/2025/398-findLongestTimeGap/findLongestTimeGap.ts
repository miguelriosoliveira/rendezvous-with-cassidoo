/*
Write a function that takes an array of timestamps (HH:MM) from the same day and returns the longest
gap in minutes between consecutive timestamps.

Examples:

findLongestTimeGap(['12:00'])
0

findLongestTimeGap(['09:00', '11:00'])
120

findLongestTimeGap(['14:00', '09:00', '15:00', '10:30'])
210

findLongestTimeGap(['08:00', '10:00', '10:00', '14:00'])
240
*/

const hours = [
	0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23,
] as const;
const minutes = [
	0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26,
	27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
	51, 52, 53, 54, 55, 56, 57, 58, 59,
] as const;

type Pad<T extends number> = T extends 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 ? `0${T}` : `${T}`;

type Hour = Pad<(typeof hours)[number]>;
type Minute = Pad<(typeof minutes)[number]>;

type Timestamp = `${Hour}:${Minute}`;

export function findLongestTimeGap(timestamps: Timestamp[]): number {
	const sortedDates = timestamps
		.map(timestamp => timestamp.split(':').map(Number))
		.map(([hours, minutes]) => new Date().setUTCHours(hours, minutes, 0, 0))
		.sort((a, b) => a - b);

	return (
		Math.max(
			0,
			...sortedDates.map((date, i, dates) => (dates[i + 1] ? dates[i + 1] - date : 0)),
		) /
		1000 /
		60
	);
}
