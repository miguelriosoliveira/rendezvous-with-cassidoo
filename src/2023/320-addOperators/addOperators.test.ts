import { addOperators } from './addOperators';

describe('#addOperators', () => {
	it("should return ['1*2*3', '1+2+3'] for source 123 and target 6", () => {
		const result = addOperators(123, 6);
		expect(result.sort()).toStrictEqual(['1*2*3', '1+2+3'].sort());
	});

	it('should return an empty array for source 3456237490 and target 9191', () => {
		const result = addOperators(3456237490, 9191);
		expect(result).toStrictEqual([]);
	});

	it("should return ['-1+2*3'] for source 1123 and target 6", () => {
		const result = addOperators(-123, 5);
		expect(result).toStrictEqual(['-1+2*3']);
	});

	it("should return ['5*5'] for source 55 and target 25", () => {
		const result = addOperators(55, 25);
		expect(result.sort()).toStrictEqual(['5*5'].sort());
	});

	it("should return ['1*0+5', '10-5'] for source 105 and target 5", () => {
		const result = addOperators(105, 5);
		expect(result).toStrictEqual(['1*0+5', '10-5']);
	});

	it("should return ['1+2*3+4', '1-2+3*4', '12+3-4'] for source 1234 and target 11", () => {
		const result = addOperators(1234, 11);
		expect(result.sort()).toStrictEqual(['1+2*3+4', '1-2+3*4', '12+3-4'].sort());
	});
});
