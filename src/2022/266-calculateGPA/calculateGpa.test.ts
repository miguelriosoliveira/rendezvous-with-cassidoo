import { calculateGPA } from './calculateGpa';

describe('#calculateGPA', () => {
	it('should return 4', () => {
		expect(calculateGPA(['A'])).toBe(4);
	});

	it('should return 0', () => {
		expect(calculateGPA(['F', 'F', 'F'])).toBe(0);
	});

	it('should return 3.3', () => {
		expect(calculateGPA(['A', 'A-', 'B+', 'B', 'B-'])).toBe(3.3);
	});

	it('should return 3.3 again', () => {
		expect(calculateGPA(['A', 'B+', 'C-', 'A'])).toBe(3.3);
	});
});
