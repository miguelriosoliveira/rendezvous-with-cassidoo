import { fractionMath } from './fractionMath';

describe('testing fractionMath', () => {
	it('should add fractions', () => {
		expect(fractionMath('3/4', 'add', '3/4')).toBe('3/2');
		expect(fractionMath('3/4', 'add', '3/5')).toBe('27/20');
	});

	it('should subtract fractions', () => {
		expect(fractionMath('3/4', 'subtract', '3/4')).toBe('0/1'); // should be '0/4', but both 0 and 4 can be divided by 4, so the "simplified" version is '0/1'
		expect(fractionMath('3/4', 'subtract', '3/2')).toBe('-3/4');
		expect(fractionMath('3/4', 'subtract', '3/5')).toBe('3/20');
	});

	it('should multiply fractions', () => {
		expect(fractionMath('1/8', 'multiply', '2/2')).toBe('1/8');
		expect(fractionMath('-3/4', 'multiply', '-5/8')).toBe('15/32');
	});

	it('should divide fractions', () => {
		expect(fractionMath('1/8', 'divide', '2/2')).toBe('1/8');
		expect(fractionMath('-3/4', 'divide', '-5/8')).toBe('6/5');
	});
});
