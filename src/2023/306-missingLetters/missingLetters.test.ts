import { missingLetters } from './missingLetters';

describe('#missingLetters', () => {
	it("should return ['e']", () => {
		expect(missingLetters(['a', 'b', 'c', 'd', 'f'])).toEqual(['e']);
	});

	it("should return ['f', 'g', 'v']", () => {
		expect(
			missingLetters([
				'a',
				'b',
				'c',
				'd',
				'e',
				'h',
				'i',
				'j',
				'k',
				'l',
				'm',
				'n',
				'o',
				'p',
				'q',
				'r',
				's',
				't',
				'u',
				'w',
				'x',
				'y',
				'z',
			]),
		).toEqual(['f', 'g', 'v']);
	});
});
