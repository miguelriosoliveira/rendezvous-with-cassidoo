/*
Write a program that prints `Happy new year!`
without using the string/character literals for the characters in the string!
*/

const charCodeMap = {
	H: 72,
	a: 97,
	p: 112,
	y: 121,
	space: 32,
	n: 110,
	e: 101,
	w: 119,
	r: 114,
	exclamation: 33,
};

export function happyNewYear(): void {
	console.log(
		[
			charCodeMap.H,
			charCodeMap.a,
			charCodeMap.p,
			charCodeMap.p,
			charCodeMap.y,
			charCodeMap.space,
			charCodeMap.n,
			charCodeMap.e,
			charCodeMap.w,
			charCodeMap.space,
			charCodeMap.y,
			charCodeMap.e,
			charCodeMap.a,
			charCodeMap.r,
			charCodeMap.exclamation,
		]
			.map(code => String.fromCharCode(code))
			.join(String()),
	);
}
