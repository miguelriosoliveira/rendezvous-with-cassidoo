import { sortMonarchs } from './sortMonarchs';

describe('#sortMonarchs', () => {
	it('sorts monarchs with same name by Roman numeral', () => {
		expect(sortMonarchs(['Louis IX', 'Louis VIII', 'Philip II', 'Philip I'])).toStrictEqual([
			'Louis VIII',
			'Louis IX',
			'Philip I',
			'Philip II',
		]);
	});

	it('handles typical British monarchs', () => {
		expect(sortMonarchs(['George VI', 'George V', 'Elizabeth II', 'Edward VIII'])).toStrictEqual([
			'Edward VIII',
			'Elizabeth II',
			'George V',
			'George VI',
		]);
	});

	it('returns an empty array when given one', () => {
		expect(sortMonarchs([])).toStrictEqual([]);
	});

	it('returns the same array when all names are unique and in order', () => {
		expect(sortMonarchs(['Anne I', 'Bob II', 'Catherine III'])).toStrictEqual([
			'Anne I',
			'Bob II',
			'Catherine III',
		]);
	});

	it('sorts monarchs with same name but non-consecutive numerals', () => {
		expect(sortMonarchs(['Henry IV', 'Henry I', 'Henry V', 'Henry III', 'Henry II'])).toStrictEqual(
			['Henry I', 'Henry II', 'Henry III', 'Henry IV', 'Henry V'],
		);
	});

	it('sorts multiple names and numerals mixed', () => {
		expect(sortMonarchs(['John X', 'John I', 'Alexandra III', 'Alexandra I'])).toStrictEqual([
			'Alexandra I',
			'Alexandra III',
			'John I',
			'John X',
		]);
	});
});
