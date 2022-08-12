import { postfix } from './postfix';

describe('testing postfix', () => {
	it('should result in 23', () => {
		const result = postfix('5 4 * 6 2 / +');
		expect(result).toBe(23);
	});

	it('should result in 25', () => {
		const result = postfix('5 4 6 + * 2 /');
		expect(result).toBe(25);
	});

	it('should result in 35', () => {
		const result = postfix('5 4 6 2 / + *');
		expect(result).toBe(35);
	});

	it('should result in 32', () => {
		const result = postfix('5 4 6 2 / + * 3 -');
		expect(result).toBe(32);
	});
});
