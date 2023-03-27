import { capitalAfterVowel, capitalAfterVowelWithRegex } from './capitalAfterVowel';

describe('#capitalAfterVowel', () => {
	it('"hello world" should evaluate to "heLlo WoRld"', () => {
		expect(capitalAfterVowel('hello world')).toBe('heLlo WoRld');
	});

	it('"xaabeuekadii" should evaluate to "xaaBeueKaDii"', () => {
		expect(capitalAfterVowel('xaabeuekadii')).toBe('xaaBeueKaDii');
	});

	it('"cinema information passage" should evaluate to "ciNeMa iNfoRmaTioN paSsaGe"', () => {
		expect(capitalAfterVowel('cinema information passage')).toBe('ciNeMa iNfoRmaTioN paSsaGe');
	});
});

describe('#capitalAfterVowelWithRegex', () => {
	it('"hello world" should evaluate to "heLlo WoRld"', () => {
		expect(capitalAfterVowelWithRegex('hello world')).toBe('heLlo WoRld');
	});

	it('"xaabeuekadii" should evaluate to "xaaBeueKaDii"', () => {
		expect(capitalAfterVowelWithRegex('xaabeuekadii')).toBe('xaaBeueKaDii');
	});

	it('"cinema information passage" should evaluate to "ciNeMa iNfoRmaTioN paSsaGe"', () => {
		expect(capitalAfterVowelWithRegex('cinema information passage')).toBe(
			'ciNeMa iNfoRmaTioN paSsaGe',
		);
	});

	it('"cinema information passage" should evaluate to "ciNeMa iNfoRmaTioN paSsaGe"', () => {
		expect(capitalAfterVowelWithRegex('cinema information passage')).toBe(
			'ciNeMa iNfoRmaTioN paSsaGe',
		);
	});
});
