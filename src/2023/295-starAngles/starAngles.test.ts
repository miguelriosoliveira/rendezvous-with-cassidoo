import { starAngles } from './starAngles';

describe('#starAngles', () => {
	it('should throw error for a less than 5 pointed star', () => {
		expect(() => starAngles(4)).toThrow();
	});

	it('should return 36 degrees for a 5 pointed star', () => {
		expect(starAngles(5)).toBe(36);
	});

	it('should return 60 degrees for a 6 pointed star', () => {
		expect(starAngles(6)).toBe(60);
	});

	it('should return 25.714 degrees for a 7 pointed star', () => {
		expect(starAngles(7)).toBe(25.714);
	});

	it('should return 45 degrees for a 8 pointed star', () => {
		expect(starAngles(8)).toBe(45);
	});

	it('should return 20 degrees for a 9 pointed star', () => {
		expect(starAngles(9)).toBe(20);
	});
});
