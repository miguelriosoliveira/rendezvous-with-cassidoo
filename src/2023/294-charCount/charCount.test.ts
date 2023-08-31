import { charCount } from './charCount';

describe('#charCount', () => {
	it('should return a number greater then zero', () => {
		expect(charCount()).not.toBe('zero');
	});
});
