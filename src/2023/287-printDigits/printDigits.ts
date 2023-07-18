/*
Print the digits 0 through 100 without using the characters 1, 2, 3, 4, 5, 6, 7, 8, or 9 in your code. Get creative!
*/

export function printDigits(): void {
	Array.from({ length: 'e'.codePointAt(0) as number }).forEach((_, i) => {
		console.log(i);
	});
}
