import { describe, expect, it } from 'vitest';
import { shuffleLine } from './shuffleLine';

describe('shuffleLine', () => {
	it('should move every 3rd customer to the end', () => {
		expect(shuffleLine(['Ada', 'Ben', 'Cam', 'Diya', 'Eli', 'Fay'], 3)).toEqual([
			'Ada',
			'Ben',
			'Diya',
			'Eli',
			'Cam',
			'Fay',
		]);
	});

	it('should move every 2nd customer to the end', () => {
		expect(shuffleLine(['A', 'B', 'C', 'D', 'E'], 2)).toEqual(['A', 'C', 'E', 'B', 'D']);
	});

	it('should return the same array when n = 1', () => {
		expect(shuffleLine(['Mo', 'Noah', 'Oli'], 1)).toEqual(['Mo', 'Noah', 'Oli']);
	});

	it('should handle an empty array', () => {
		expect(shuffleLine([], 2)).toEqual([]);
	});

	it('should not move anyone if n is greater than array length', () => {
		expect(shuffleLine(['A', 'B', 'C'], 5)).toEqual(['A', 'B', 'C']);
	});
});
