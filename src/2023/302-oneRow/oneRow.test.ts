import { oneRow } from './oneRow';

describe('#oneRow', () => {
	it('should return words that can be typed using letters of one row on a keyboard', () => {
		expect(
			oneRow({ words: ['candy', 'fart', 'pop', 'Zelda', 'flag', 'typewriter'] }),
		).toStrictEqual(['pop', 'flag', 'typewriter']);
	});

	it('should return words that can be typed using letters of only the first row on a keyboard', () => {
		expect(
			oneRow({
				words: ['qwerty', 'ui', 'io', 'keyboard'],
				keyboardType: 'ANSI',
				allowedRows: [1],
			}),
		).toStrictEqual(['qwerty', 'ui', 'io']);
	});

	it('should return words that can be typed using letters of only the second row on a keyboard', () => {
		expect(
			oneRow({
				words: ['lag', 'sad', 'io', 'keyboard'],
				keyboardType: 'ANSI',
				allowedRows: [2],
			}),
		).toStrictEqual(['lag', 'sad']);
	});

	it('should return words that can be typed using letters of only the first and third rows on a keyboard', () => {
		expect(
			oneRow({
				words: ['qwerty', 'ui', 'io', 'keyboard', 'zxcv'],
				keyboardType: 'ANSI',
				allowedRows: [1, 3],
			}),
		).toStrictEqual(['qwerty', 'ui', 'io', 'zxcv']);
	});

	it('should return words that can be typed using letters of only one row on an ISO keyboard', () => {
		expect(
			oneRow({
				words: ['qwerty', 'ui', 'ça', 'keyboard'],
				keyboardType: 'ISO',
			}),
		).toStrictEqual(['qwerty', 'ui', 'ça']);
	});

	it('should return words that can be typed using letters of only one row on a JIS keyboard', () => {
		expect(
			oneRow({
				words: ['qwerty', 'ui', 'ça', 'keyboard'],
				keyboardType: 'JIS',
			}),
		).toStrictEqual(['qwerty', 'ui']);
	});

	it('should return words that can be typed using letters of only one row on a Dvorak keyboard', () => {
		expect(
			oneRow({
				words: ['duh', 'BMW', 'crl', 'keyboard'],
				keyboardType: 'Dvorak',
			}),
		).toStrictEqual(['duh', 'BMW', 'crl']);
	});

	it('should return words that can be typed using letters of only one row on a Colemak keyboard', () => {
		expect(
			oneRow({
				words: ['io', 'glu', 'neo', 'mk', 'keyboard'],
				keyboardType: 'Colemak',
			}),
		).toStrictEqual(['io', 'glu', 'neo', 'mk']);
	});
});
