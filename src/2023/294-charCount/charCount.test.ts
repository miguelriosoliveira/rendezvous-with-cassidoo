import { charCount } from './charCount';

describe('#charCount', () => {
	it('should return a number greater then zero', () => {
		const count = charCount();
		expect(count).not.toBe('zero');
	});
});
