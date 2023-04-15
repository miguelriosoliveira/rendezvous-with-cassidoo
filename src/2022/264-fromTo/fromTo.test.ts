import { fromTo } from './fromTo';

describe('#fromTo', () => {
	it('should generate from 5 to 7', () => {
		const gen = fromTo(5, 7);
		expect(gen()).toBe(5);
		expect(gen()).toBe(6);
		expect(gen()).toBe(7);
		expect(gen()).toBeUndefined();
		expect(gen()).toBeUndefined();
	});

	it('should generate from -16 to 73', () => {
		const [from, to] = [-16, 73];

		const gen = fromTo(from, to);

		Array.from({ length: to - from + 1 }, (_, index) => index + from).forEach(number => {
			expect(gen()).toBe(number);
		});
		expect(gen()).toBeUndefined();
	});

	it('should generate from 2 to -2 (descending order)', () => {
		const gen = fromTo(2, -2);
		expect(gen()).toBe(2);
		expect(gen()).toBe(1);
		expect(gen()).toBe(0);
		expect(gen()).toBe(-1);
		expect(gen()).toBe(-2);
		// eslint-disable-next-line jest/max-expects
		expect(gen()).toBeUndefined();
	});

	it('should generate only one number', () => {
		const gen = fromTo(2, 2);
		expect(gen()).toBe(2);
		expect(gen()).toBeUndefined();
	});
});
