import { compress } from './compress';

describe('#compress', () => {
	it('should return [] for an empty array', () => {
		expect(compress([])).toStrictEqual([]);
	});

	it('should handle a single character', () => {
		expect(compress(['x'])).toStrictEqual(['x']);
	});

	it('should handle no consecutive duplicates', () => {
		expect(compress(['a', 'b', 'c', 'd'])).toStrictEqual(['a', 'b', 'c', 'd']);
	});

	it('should compress simple consecutive duplicates', () => {
		expect(compress(['a', 'a', 'b', 'b', 'c', 'c', 'c'])).toStrictEqual([
			'a',
			'2',
			'b',
			'2',
			'c',
			'3',
		]);
	});

	it('should compress the given example with three bs', () => {
		expect(compress(['a', 'b', 'b', 'b', 'c'])).toStrictEqual(['a', 'b', '3', 'c']);
	});

	it('should handle a long run of the same character', () => {
		const input = Array(12).fill('z');
		expect(compress(input)).toStrictEqual(['z', '12']);
	});

	it('should handle alternating duplicates and singles', () => {
		expect(compress(['a', 'a', 'b', 'c', 'c', 'd'])).toStrictEqual(['a', '2', 'b', 'c', '2', 'd']);
	});

	it('should handle digits as characters', () => {
		expect(compress(['1', '1', '1', '2'])).toStrictEqual(['1', '3', '2']);
	});

	it('should handle alternating duplicates', () => {
		expect(compress(['a', 'a', 'b', 'a', 'a', 'c'])).toStrictEqual(['a', '2', 'b', 'a', '2', 'c']);
	});
});
