import { fromTo } from './fromTo';

describe('testing fromTo', () => {
	it('should generate from 5 to 7', () => {
		const gen = fromTo(5, 7);
		expect(gen()).toBe(5);
		expect(gen()).toBe(6);
		expect(gen()).toBe(7);
		expect(gen()).toBeUndefined();
	});
});
