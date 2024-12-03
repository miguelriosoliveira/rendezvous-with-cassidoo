import { rollCall } from './rollCall';

describe('#rollCall', () => {
	it('should reverse names and sort them alphabetically', () => {
		expect(rollCall(['yzneT', 'ydissaC', 'enimA'])).toStrictEqual(['Amine', 'Cassidy', 'Tenzy']);
	});

	it('should handle a list of all the reindeer names', () => {
		expect(
			rollCall([
				'rennoD',
				'nexiV',
				'recnarP',
				'temoC',
				'neztilB',
				'recnaD',
				'dipuC',
				'rehsaD',
				'hploduR',
			]),
		).toStrictEqual([
			'Blitzen',
			'Comet',
			'Cupid',
			'Dancer',
			'Dasher',
			'Donner',
			'Prancer',
			'Rudolph',
			'Vixen',
		]);
	});

	it('should handle single-letter names without any change', () => {
		expect(rollCall(['A', 'B', 'C'])).toStrictEqual(['A', 'B', 'C']);
	});

	it('should handle an empty list gracefully', () => {
		expect(rollCall([])).toStrictEqual([]);
	});

	it('should handle a single name correctly', () => {
		expect(rollCall(['adniL'])).toStrictEqual(['Linda']);
	});

	it('should handle names with mixed cases correctly', () => {
		expect(rollCall(['AIz', 'aRiD', 'eMmA'])).toStrictEqual(['AmMe', 'DiRa', 'zIA']);
	});

	it('should handle duplicate reversed names and sort them properly', () => {
		expect(rollCall(['adnaL', 'adnaL'])).toStrictEqual(['Landa', 'Landa']);
	});

	it('should handle names that are palindromes (no visible change after reversing)', () => {
		expect(rollCall(['anna', 'bob', 'otto'])).toStrictEqual(['anna', 'bob', 'otto']);
	});
});
