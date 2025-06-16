const ROMAN_NUMBERS_MAP: Record<string, number> = {
	I: 1,
	V: 5,
	X: 10,
	L: 50,
	C: 100,
	D: 500,
	M: 1000,
};

export function romanToInt(roman: string): number {
	return Array.from(roman).reduce((total, curr, i, arr) => {
		const currVal = ROMAN_NUMBERS_MAP[curr];
		const nextVal = ROMAN_NUMBERS_MAP[arr[i + 1]] || 0;
		if (currVal < nextVal) {
			return total - currVal;
		}
		return total + currVal;
	}, 0);
}
