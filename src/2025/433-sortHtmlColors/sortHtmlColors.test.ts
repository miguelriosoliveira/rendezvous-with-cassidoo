import { BASIC_HTML_COLORS, sortHtmlColors } from './sortHtmlColors';

describe('#sortHtmlColors', () => {
	it('should return colors in ascending order by HEX value', () => {
		const shuffled = [...BASIC_HTML_COLORS].sort(() => Math.random() - 0.5);
		expect(sortHtmlColors(shuffled)).toStrictEqual([
			'000000',
			'000080',
			'0000FF',
			'008000',
			'008080',
			'00FF00',
			'00FFFF',
			'800000',
			'800080',
			'808000',
			'808080',
			'C0C0C0',
			'FF0000',
			'FF00FF',
			'FFFF00',
			'FFFFFF',
		]);
	});

	it('should handle empty array', () => {
		expect(sortHtmlColors([])).toStrictEqual([]);
	});

	it('should handle single color', () => {
		expect(sortHtmlColors(['FF0000'])).toStrictEqual(['FF0000']);
	});

	it('should throw when passing colors not in basic HTML colors', () => {
		expect(() => sortHtmlColors(['123456', 'ABCDEF'])).toThrow();
	});

	it('should be sorted without using built-in sort methods', () => {
		const sortSpy = vi.spyOn(Array.prototype, 'sort');
		const toSortedSpy = vi.spyOn(Array.prototype, 'toSorted');

		sortHtmlColors([...BASIC_HTML_COLORS]);

		expect(sortSpy).not.toHaveBeenCalled();
		expect(toSortedSpy).not.toHaveBeenCalled();
		sortSpy.mockRestore();
		toSortedSpy.mockRestore();
	});

	it('should handle duplicate colors maintaining stable sort order', () => {
		const findLastIndexSpy = vi.spyOn(Array.prototype, 'findLastIndex');

		expect(sortHtmlColors(['FFFFFF', '000000', 'FFFF00', '000000'])).toStrictEqual([
			'000000',
			'000000',
			'FFFF00',
			'FFFFFF',
		]);

		expect(findLastIndexSpy).toHaveNthReturnedWith(1, -1);
		expect(findLastIndexSpy).toHaveNthReturnedWith(2, -1);
		expect(findLastIndexSpy).toHaveNthReturnedWith(3, 0);
		expect(findLastIndexSpy).toHaveNthReturnedWith(4, -1);
		findLastIndexSpy.mockRestore();
	});
});
