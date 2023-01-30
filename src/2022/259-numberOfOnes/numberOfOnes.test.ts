import { numberOfOnes } from './numberOfOnes';

describe('testing numberOfOnes', () => {
	it('should find 7 ones', () => {
		const ones = numberOfOnes(14);
		expect(ones).toBe(7);
	});

	it('should find 4 ones', () => {
		const ones = numberOfOnes(11);
		expect(ones).toBe(4);
	});

	it('should find 42 ones', () => {
		const ones = numberOfOnes(114);
		expect(ones).toBe(42);
	});

	it('should find 301 ones', () => {
		const ones = numberOfOnes(1000);
		expect(ones).toBe(301);
	});
});
