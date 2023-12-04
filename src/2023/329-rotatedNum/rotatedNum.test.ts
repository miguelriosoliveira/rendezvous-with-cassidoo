import { rotatedNum } from './rotatedNum';

describe('#rotatedNum', () => {
	it('should return the correct number of rotations for a rotated array', () => {
		expect(rotatedNum([4, 0, 1, 2, 3])).toBe(1);
		expect(rotatedNum([7, 9, 20])).toBe(0);
		expect(rotatedNum([7, 7, 314, 1337, 7])).toBe(4);
	});

	it('should handle arrays with duplicate numbers', () => {
		expect(rotatedNum([3, 3, 3, 4, 5, 3])).toBe(5);
		expect(rotatedNum([1, 1, 1, 2, 1])).toBe(4);
	});

	it('should handle arrays with no rotation', () => {
		expect(rotatedNum([1, 2, 3, 4, 5])).toBe(0);
		expect(rotatedNum([10, 20, 30, 40, 50])).toBe(0);
	});

	it('should handle empty arrays', () => {
		expect(rotatedNum([])).toBe(0);
	});
});
