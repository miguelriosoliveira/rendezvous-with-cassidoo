/*
There are 16 basic HTML Colors. Write a program to output them in ascending order by HEX value.
Don't use any built-in sorting methods!

Example output:

000000
000080
0000FF
008000
008080
00FF00
00FFFF
800000
800080
808000
808080
C0C0C0
FF0000
FF00FF
FFFF00
FFFFFF
*/

export const BASIC_HTML_COLORS = new Set([
	'000000', // Black
	'000080', // Navy
	'0000FF', // Blue
	'008000', // Green
	'008080', // Teal
	'00FF00', // Lime
	'00FFFF', // Aqua/Cyan
	'800000', // Maroon
	'800080', // Purple
	'808000', // Olive
	'808080', // Gray
	'C0C0C0', // Silver
	'FF0000', // Red
	'FF00FF', // Fuchsia/Magenta
	'FFFF00', // Yellow
	'FFFFFF', // White
]);

export function sortHtmlColors(colors: string[]): string[] {
	const sortedColors: string[] = [];

	colors.forEach(color => {
		if (!BASIC_HTML_COLORS.has(color)) {
			throw new Error();
		}
		const i = sortedColors.findLastIndex(
			sortedColor => parseInt(sortedColor, 16) < parseInt(color, 16),
		);
		sortedColors.splice(i + 1, 0, color);
	});

	return sortedColors;
}
