import { letters } from './letters';

describe('#letters', () => {
	const log = console.log;

	beforeAll(() => {
		console.log = vi.fn();
	});

	afterAll(() => {
		console.log = log;
	});

	it('should return 1 for an array with a single letter', () => {
		expect(letters(['X'])).toBe(1);
		expect(console.log).toHaveBeenCalledWith(['X']);
	});

	it('should return 8 for an array with repeated letters', () => {
		expect(letters(['A', 'A', 'B'])).toBe(8);
		expect(console.log).toHaveBeenCalledWith(['A', 'B', 'AA', 'AB', 'BA', 'AAB', 'ABA', 'BAA']);
	});

	it('should return 15 for an array with three different letters', () => {
		expect(letters(['A', 'B', 'C'])).toBe(15);
		expect(console.log).toHaveBeenCalledWith([
			'A',
			'B',
			'C',
			'AB',
			'AC',
			'BA',
			'BC',
			'CA',
			'CB',
			'ABC',
			'ACB',
			'BAC',
			'BCA',
			'CAB',
			'CBA',
		]);
	});

	it('should return 0 for an empty array', () => {
		expect(letters([])).toBe(0);
		expect(console.log).toHaveBeenCalledWith([]);
	});
});
