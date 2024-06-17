import { sortNames, vowelCount } from './sortNames';

describe('#vowelCount', () => {
	it('should return 1 for "John"', () => {
		expect(vowelCount('John')).toBe(1);
	});

	it('should return 2 for "Johnny"', () => {
		expect(vowelCount('Johnny')).toBe(2);
	});

	it('should return 3 for "Miguel"', () => {
		expect(vowelCount('Miguel')).toBe(3);
	});
});

describe('#sortNames', () => {
	it('should sort names by the number of vowels in descending order', () => {
		expect(sortNames(['Goku', 'Vegeta', 'Piccolo', 'Gohan'])).toStrictEqual([
			'Piccolo',
			'Vegeta',
			'Gohan',
			'Goku',
		]);
	});

	it('should sort names alphabetically if they have the same number of vowels', () => {
		expect(sortNames(['Edward', 'Alphonse', 'Roy', 'Winry'])).toStrictEqual([
			'Alphonse',
			'Edward',
			'Roy',
			'Winry',
		]);
	});

	it('should handle names with no vowels correctly', () => {
		expect(sortNames(['Kr', 'Bbb', 'C', 'Ddd'])).toStrictEqual(['Bbb', 'C', 'Ddd', 'Kr']);
	});

	it('should handle an empty array', () => {
		expect(sortNames([])).toStrictEqual([]);
	});

	it('should handle names with different cases correctly', () => {
		expect(sortNames(['goku', 'GOKU', 'GoKu', 'gOkU'])).toStrictEqual([
			'goku',
			'gOkU',
			'GoKu',
			'GOKU',
		]);
	});

	it('should handle names with special characters', () => {
		expect(sortNames(['Jean-Luc', "O'Neill", 'Anne-Marie', 'Elon-Musk'])).toStrictEqual([
			'Anne-Marie',
			'Elon-Musk',
			'Jean-Luc',
			"O'Neill",
		]);
	});
});
