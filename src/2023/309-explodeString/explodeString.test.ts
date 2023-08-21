import { explodeString } from './explodeString';

describe('#explodeString', () => {
	it('should return an array of groups of non-space equal characters, sorted', () => {
		expect(explodeString('Ahh, abracadabra!')).toStrictEqual([
			'!',
			',',
			'A',
			'aaaaa',
			'bb',
			'c',
			'd',
			'hh',
			'rr',
		]);
	});

	it('should handle consecutive characters properly', () => {
		expect(explodeString('\\o/\\o/')).toStrictEqual(['//', '\\\\', 'oo']);
	});

	it('should handle strings with leading and trailing spaces', () => {
		expect(explodeString('  xyz   ')).toStrictEqual(['x', 'y', 'z']);
	});

	it('should handle strings with only spaces', () => {
		expect(explodeString('   ')).toStrictEqual([]);
	});

	it('should handle empty strings', () => {
		expect(explodeString('')).toStrictEqual([]);
	});

	it('should handle strings with special characters', () => {
		expect(explodeString('@#!$%^&*()')).toStrictEqual([
			'!',
			'#',
			'$',
			'%',
			'&',
			'(',
			')',
			'*',
			'@',
			'^',
		]);
	});

	it('should handle strings with numbers', () => {
		expect(explodeString('ab111bc2222cd33')).toStrictEqual([
			'111',
			'2222',
			'33',
			'a',
			'bb',
			'cc',
			'd',
		]);
	});
});
