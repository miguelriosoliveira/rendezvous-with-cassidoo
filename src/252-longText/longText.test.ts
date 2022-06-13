import { longText } from './longText';

describe('testing longText', () => {
	it('should return long hello world', () => {
		const text = longText('hello world', 3);
		expect(text).toBe('heeellooo wooorld');
	});

	it('should return long lol', () => {
		const text = longText('lol', 10);
		expect(text).toBe('looooooooool');
	});

	it('should return long LOL', () => {
		const text = longText('LOL', 10);
		expect(text).toBe('LOOOOOOOOOOL');
	});
});
