import { maxProduct } from './maxProduct';

describe('#maxProduct', () => {
	it('should return 72 for 6*3*4', () => {
		expect(maxProduct([2, 4, 1, 3, -5, 6])).toBe(72);
	});

	it('should return 120 for 6*5*4', () => {
		expect(maxProduct([2, 4, 1, 3, 5, 6])).toBe(120);
	});

	it('should return 120 for (-5)*(-4)*6 when two large negatives produce bigger product', () => {
		expect(maxProduct([-2, -4, -1, 3, -5, 6])).toBe(120);
	});

	it('should return 60 for (-5)*(-2)*6 when two negatives times positive beats three positives', () => {
		expect(maxProduct([-2, 0, -1, 3, -5, 6])).toBe(60);
	});

	it('should return 100 for 5*5*4', () => {
		expect(maxProduct([2, 4, 1, 3, 5, 5])).toBe(100);
	});

	it('should return 150 for 6*5*5', () => {
		expect(maxProduct([2, 4, 1, 3, 5, 5, 6])).toBe(150);
	});

	it('should return 90 for 6*5*3', () => {
		expect(maxProduct([-2, -4, -1, -1, 3, 5, 6])).toBe(90);
	});

	it('should return 6 for 3*2*1', () => {
		expect(maxProduct([1, 2, 3])).toBe(6);
	});

	it('should throw error for list too short', () => {
		expect(() => maxProduct([5, 6])).toThrow('Invalid list, must have size 3!');
	});
});
