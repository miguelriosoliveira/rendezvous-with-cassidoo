import { buildStaircase } from './buildStaircase';

describe('#buildStaircase', () => {
	it('should return 0 for n equal to 0', () => {
		expect(buildStaircase(0)).toBe(0);
	});

	it('should return 1 for n less than 3', () => {
		expect(buildStaircase(1)).toBe(1);
		expect(buildStaircase(2)).toBe(1);
	});

	it('should return 2 for n less than 6', () => {
		expect(buildStaircase(3)).toBe(2);
		expect(buildStaircase(4)).toBe(2);
		expect(buildStaircase(5)).toBe(2);
	});

	it('should return 3 for n less than 10', () => {
		expect(buildStaircase(6)).toBe(3);
		expect(buildStaircase(7)).toBe(3);
		expect(buildStaircase(8)).toBe(3);
		expect(buildStaircase(9)).toBe(3);
	});

	it('should return 4 for n less than 15', () => {
		expect(buildStaircase(10)).toBe(4);
		expect(buildStaircase(11)).toBe(4);
		expect(buildStaircase(12)).toBe(4);
		expect(buildStaircase(13)).toBe(4);
		expect(buildStaircase(14)).toBe(4);
	});
});
