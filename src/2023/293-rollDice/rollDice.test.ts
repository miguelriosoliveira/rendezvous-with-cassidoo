import { rollDice } from './rollDice';

describe('#rollDice', () => {
	it('should roll 4 4-sided dice', () => {
		const result = rollDice('4d4');
		expect(result).toBeGreaterThanOrEqual(4);
		expect(result).toBeLessThanOrEqual(16);
	});

	it('should roll 3 20-sided dices', () => {
		const result = rollDice('3d20');
		expect(result).toBeGreaterThanOrEqual(3);
		expect(result).toBeLessThanOrEqual(60);
	});

	it('should roll 1 8-sided and 2 10-sided dices', () => {
		const result = rollDice('1d8+2d10');
		expect(result).toBeGreaterThanOrEqual(3);
		expect(result).toBeLessThanOrEqual(28);
	});

	it('should roll 4 4-sided, 3 20-sided, 1 8-sided and 2 10-sided dices', () => {
		const result = rollDice('4d4+3d20+1d8+2d10');
		expect(result).toBeGreaterThanOrEqual(10);
		expect(result).toBeLessThanOrEqual(104);
	});
});
