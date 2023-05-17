import { binaryPal } from './binaryPal';

describe('#binaryPal', () => {
	it('should return true for -1', () => {
		expect(binaryPal(-1)).toBe(true);
	});

	it('should return true for 5', () => {
		expect(binaryPal(5)).toBe(true);
	});

	it('should return false for 10', () => {
		expect(binaryPal(10)).toBe(false);
	});

	it('should return false for 256', () => {
		expect(binaryPal(256)).toBe(false);
	});
});
