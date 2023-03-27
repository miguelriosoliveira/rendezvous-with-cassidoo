import { longText } from './longText';

describe('#longText', () => {
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

	it('should return long car', () => {
		const text = longText('car', 3);
		expect(text).toBe('caaar');
	});

	it('should return long pizza', () => {
		const text = longText('pizza', 3);
		expect(text).toBe('piiizzaaa');
	});

	it('should return long uber', () => {
		const text = longText('uber', 3);
		expect(text).toBe('uuubeeer');
	});
});
