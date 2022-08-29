import { addg } from './addg';

describe('testing addg', () => {
	it('should return undefined', () => {
		expect(addg()).toBeUndefined();
	});

	it('should return 2', () => {
		expect(addg(2)()).toBe(2);
	});

	it('should return 9', () => {
		expect(addg(2)(7)()).toBe(9);
	});

	it('should return 7', () => {
		expect(addg(3)(4)(0)()).toBe(7);
	});

	it('should not handle floating point sum well', () => {
		expect(addg(0.1)(0.2)()).not.toBe(0.3);
	});

	it('should throw error when called after the end call', () => {
		expect(() => addg(2)(3)()()).toThrow('(0 , addg_1.addg)(...)(...)(...) is not a function');
	});
});
