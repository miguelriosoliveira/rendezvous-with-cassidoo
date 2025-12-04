import { lexoNext } from './lexoNext';

describe('#lexoNext', () => {
	it('should return the next lexicographically greater permutation for a given number', () => {
		expect(lexoNext(123)).toBe(132);
		expect(lexoNext(12)).toBe(21);
		expect(lexoNext(314159)).toBe(314195);
		expect(lexoNext(13420)).toBe(14023);
	});

	it('should handle numbers with repeated digits', () => {
		expect(lexoNext(1223334444)).toBe(1223343444);
		expect(lexoNext(77777)).toBe(77777);
	});

	it('should handle single-digit numbers', () => {
		expect(lexoNext(5)).toBe(5);
	});

	it('should handle edge case with repeated digits at the end', () => {
		expect(lexoNext(1234555)).toBe(1235455);
		expect(lexoNext(1233)).toBe(1323);
	});

	it('should handle case where swap digit equals pivot (tests > vs >=)', () => {
		// For 1131, the pivot i is at index 1 (digit 1 < 3), and we need to find
		// the rightmost digit > 1 (which is 3 at index 2). If >= were used, it would
		// incorrectly pick the last 1 at index 3, giving wrong result 1113 instead of 1311.
		expect(lexoNext(1131)).toBe(1311);
	});
});
