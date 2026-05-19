import { describe, it, expect } from 'vitest';
import { toggleChar } from './toggleChar';

describe('toggleChar', () => {
	it('should convert every lowercase letter to uppercase and vice versa', () => {
		expect(toggleChar('Hello, world!')).toBe('hELLO, WORLD!');
		expect(toggleChar('HeheHeheHEheheHeH')).toBe('hEHEhEHEheHEHEhEh');
	});

	it('should return the string in alternate case when alternate is true', () => {
		expect(toggleChar('This will be alternated', true)).toBe('ThIs WiLl Be AlTeRnAtEd');
		expect(toggleChar('These will be alternated', true)).toBe('ThEsE wIlL bE aLtErNaTeD');
	});

	it('should handle empty strings', () => {
		expect(toggleChar('')).toBe('');
	});

	it('should ignore non-alphabetic characters', () => {
		expect(toggleChar('123!@#')).toBe('123!@#');
	});
});
