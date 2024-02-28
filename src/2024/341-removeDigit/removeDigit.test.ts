import { removeDigit } from './removeDigit';

describe('#removeDigit', () => {
	it('should handle an invalid digit', () => {
		expect(() => removeDigit(987654, -1)).toThrow('Digit must be between 0 and 9');
		expect(() => removeDigit(987654, 10)).toThrow('Digit must be between 0 and 9');
	});

	it('should remove the specified digit and maximize the resulting number', () => {
		expect(removeDigit(31415926, 1)).toStrictEqual(3415926);
		expect(removeDigit(314159261, 1)).toStrictEqual(34159261);
		expect(removeDigit(1231, 1)).toStrictEqual(231);
	});

	it('should handle a digit not existing in the number', () => {
		expect(removeDigit(123456, 9)).toStrictEqual(123456);
		expect(removeDigit(987654, 0)).toStrictEqual(987654);
	});
});
