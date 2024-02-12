import { getDirection, fromTo } from './fromTo';

describe('#getDirection', () => {
	it('should positive direction', () => {
		expect(getDirection(0, 3)).toBe(1);
		expect(getDirection(0, 0)).toBe(1);
	});

	it('should negative direction', () => {
		expect(getDirection(3, 0)).toBe(-1);
	});
});

describe('#fromTo', () => {
	it('should generate values in the specified range', () => {
		const range = fromTo(0, 3);
		expect(range()).toBe(0);
		expect(range()).toBe(1);
		expect(range()).toBe(2);
		expect(range()).toBeNull();
	});

	it('should generate values in single-step range', () => {
		const range = fromTo(0, 0);
		expect(range()).toBeNull();
	});

	it('should generate values in an inverse range', () => {
		const range = fromTo(3, 0);
		expect(range()).toBe(3);
		expect(range()).toBe(2);
		expect(range()).toBe(1);
		expect(range()).toBeNull();
	});
});
