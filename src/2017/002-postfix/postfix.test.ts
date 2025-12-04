import { postfix } from './postfix';

describe('#postfix', () => {
	it('should result in 23', () => {
		expect(postfix('5 4 * 6 2 / +')).toBe(23);
	});

	it('should result in 25', () => {
		expect(postfix('5 4 6 + * 2 /')).toBe(25);
	});

	it('should result in 35', () => {
		expect(postfix('5 4 6 2 / + *')).toBe(35);
	});

	it('should result in 32', () => {
		expect(postfix('5 4 6 2 / + * 3 -')).toBe(32);
	});

	it('should handle single number', () => {
		expect(postfix('42')).toBe(42);
	});

	it('should handle unbalanced expression with extra operator', () => {
		expect(postfix('+')).toBeNaN();
	});
});
