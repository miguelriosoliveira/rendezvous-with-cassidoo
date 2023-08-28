import { reversedSquaresConvertingTypes, reversedSquaresUsingMath } from './reversedSquares';

describe('#reversedSquares', () => {
	describe('converting types', () => {
		it('returns true for a perfect square whose reverse is also a perfect square', () => {
			expect(reversedSquaresConvertingTypes(9)).toBe(true);
			expect(reversedSquaresConvertingTypes(441)).toBe(true);
			expect(reversedSquaresConvertingTypes(0)).toBe(true);
		});

		it('returns false for a negative number', () => {
			expect(reversedSquaresConvertingTypes(-9)).toBe(false);
			expect(reversedSquaresConvertingTypes(-441)).toBe(false);
		});

		it('returns false for a fractional number', () => {
			expect(reversedSquaresConvertingTypes(9.1)).toBe(false);
			expect(reversedSquaresConvertingTypes(441.6)).toBe(false);
		});

		it('returns false for a perfect square whose reverse is not a perfect square', () => {
			expect(reversedSquaresConvertingTypes(25)).toBe(false);
		});

		it('returns false for non-perfect squares', () => {
			expect(reversedSquaresConvertingTypes(17)).toBe(false);
			expect(reversedSquaresConvertingTypes(123_456)).toBe(false);
		});
	});

	describe('using math', () => {
		it('returns true for a perfect square whose reverse is also a perfect square', () => {
			expect(reversedSquaresUsingMath(9)).toBe(true);
			expect(reversedSquaresUsingMath(441)).toBe(true);
			expect(reversedSquaresUsingMath(0)).toBe(true);
		});

		it('returns false for a negative number', () => {
			expect(reversedSquaresUsingMath(-9)).toBe(false);
			expect(reversedSquaresUsingMath(-441)).toBe(false);
		});

		it('returns false for a fractional number', () => {
			expect(reversedSquaresUsingMath(9.1)).toBe(false);
			expect(reversedSquaresUsingMath(441.6)).toBe(false);
		});

		it('returns false for a perfect square whose reverse is not a perfect square', () => {
			expect(reversedSquaresUsingMath(25)).toBe(false);
		});

		it('returns false for non-perfect squares', () => {
			expect(reversedSquaresUsingMath(17)).toBe(false);
			expect(reversedSquaresUsingMath(123_456)).toBe(false);
		});
	});
});
