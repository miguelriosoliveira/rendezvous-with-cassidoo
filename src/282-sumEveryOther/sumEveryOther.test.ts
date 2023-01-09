import { sumEveryOther } from './sumEveryOther';

describe('testing sumEveryOther', () => {
	it('should sum to 26', () => {
		expect(sumEveryOther(548_915_381)).toBe(26);
	});

	it('should sum to 0', () => {
		expect(sumEveryOther(10)).toBe(0);
	});

	it('should sum to 1', () => {
		expect(sumEveryOther(1010.11)).toBe(1);
	});

	it('should sum to 27', () => {
		expect(sumEveryOther(79_088_555)).toBe(27);
	});

	it('should sum to 11', () => {
		expect(sumEveryOther(50_036_157)).toBe(11);
	});

	it('should sum to 23', () => {
		expect(sumEveryOther(34_798_327)).toBe(23);
	});

	it('should sum to 23', () => {
		expect(sumEveryOther(34_798_327.801)).toBe(23);
	});
});
