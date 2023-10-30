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
});
