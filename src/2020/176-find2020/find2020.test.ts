import { find2020 } from './find2020';

describe('#find2020', () => {
	it('should return the position 14', () => {
		const position2020 = find2020('2220000202220020200');
		expect(position2020).toBe(14);
	});

	it("should return -1 because the string don't contains '2020'", () => {
		const position2020 = find2020('2220000202220020220');
		expect(position2020).toBe(-1);
	});

	it('should return the position 4', () => {
		const position2020 = find2020('22222020');
		expect(position2020).toBe(4);
	});

	it('should return the position 0', () => {
		const position2020 = find2020('20202222');
		expect(position2020).toBe(0);
	});

	it('should return the position 0 even with 2 occurrences', () => {
		const position2020 = find2020('20202222222020');
		expect(position2020).toBe(0);
	});
});
