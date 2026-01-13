import { hungryBears } from './hungryBears';

interface Bear {
	name: string;
	hunger: number;
}

describe('hungryBears', () => {
	it('should return bears with hunger above average, sorted alphabetically', () => {
		const bears: Bear[] = [
			{ name: 'Baloo', hunger: 6 },
			{ name: 'Yogi', hunger: 9 },
			{ name: 'Paddington', hunger: 4 },
			{ name: 'Winnie', hunger: 10 },
			{ name: 'Chicago', hunger: 20 },
		];
		// Average: (6 + 9 + 4 + 10 + 20) / 5 = 9.8
		// Above average: Winnie (10), Chicago (20)
		expect(hungryBears(bears)).toEqual(['Chicago', 'Winnie']);
	});

	it('should return empty array when no bears are above average', () => {
		const bears: Bear[] = [
			{ name: 'Alice', hunger: 5 },
			{ name: 'Bob', hunger: 5 },
			{ name: 'Charlie', hunger: 5 },
		];
		// Average: 5, no bears above average
		expect(hungryBears(bears)).toEqual([]);
	});

	it('should handle empty array', () => {
		expect(hungryBears([])).toEqual([]);
	});

	it('should handle single bear', () => {
		const bears: Bear[] = [{ name: 'Solo', hunger: 10 }];
		// Average: 10, not above average (equal to)
		expect(hungryBears(bears)).toEqual([]);
	});

	it('should sort results alphabetically', () => {
		const bears: Bear[] = [
			{ name: 'Zoe', hunger: 15 },
			{ name: 'Alice', hunger: 15 },
			{ name: 'Mike', hunger: 15 },
			{ name: 'Ben', hunger: 10 },
		];
		// Average: 13.75, all except Ben are above average
		expect(hungryBears(bears)).toEqual(['Alice', 'Mike', 'Zoe']);
	});

	it('should handle bears with identical hunger levels', () => {
		const bears: Bear[] = [
			{ name: 'Bear1', hunger: 8 },
			{ name: 'Bear2', hunger: 8 },
			{ name: 'Bear3', hunger: 12 },
		];
		// Average: 9.33, only Bear3 is above average
		expect(hungryBears(bears)).toEqual(['Bear3']);
	});

	it('should handle decimal average values correctly', () => {
		const bears: Bear[] = [
			{ name: 'Drake', hunger: 10 },
			{ name: 'Eve', hunger: 11 },
		];
		// Average: 10.5, only Eve is above average
		expect(hungryBears(bears)).toEqual(['Eve']);
	});
});
