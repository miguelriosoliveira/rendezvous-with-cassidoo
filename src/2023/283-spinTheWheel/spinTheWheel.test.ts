import { SpinTheWheel } from './spinTheWheel';

describe('#spinTheWheel', () => {
	it('should fail', () => {
		const game = new SpinTheWheel([0, 0]);
		expect(() => game.spin(100)).toThrow('invalid interval');
	});

	it('should lose the user bet', () => {
		const game = new SpinTheWheel([1, 1]);
		expect(game.spin(100)).toBe(0);
	});

	it('should keep the user bet', () => {
		const game = new SpinTheWheel([2, 7]);
		expect(game.spin(100)).toBe(100);
	});

	it('should keep the user bet 2', () => {
		const game = new SpinTheWheel([5, 6]);
		expect(game.spin(100)).toBe(100);
	});

	it('should double the user bet', () => {
		const game = new SpinTheWheel([8, 10]);
		expect(game.spin(100)).toBe(200);
	});

	it('should double the user bet 2', () => {
		const game = new SpinTheWheel([9, 10]);
		expect(game.spin(100)).toBe(200);
	});
});
