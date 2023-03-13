/*
Write a function that can do the 4 basic operations (add, subtract, multiply and divide) on two fractions.
Return the most simplified form of the result.
You can assume a non-zero denominator in the input, and don’t use any built-in implementations in your language of choice, if you can!

Example:

> fractionMath("3/4", "add", "3/4")
> "3/2"

> fractionMath("1/8", "multiply", "2/2")
> "1/8"
*/

type Fraction = `${number}/${number}`;
type Operation = 'add' | 'subtract' | 'multiply' | 'divide';
type OperationFunc = (f1: Fraction, f2: Fraction) => Fraction;
type OperationsMap = Record<Operation, OperationFunc>;
type Formula = (a: number, b: number, c: number, d: number) => [number, number];

// Greatest Common Divisor
function calculateGcd(num1: number, num2: number): number {
	if (num2 === 0) {
		return num1;
	}
	return calculateGcd(num2, num1 % num2);
}

function simplifyFraction(numerator: number, denominator: number) {
	const gcd = calculateGcd(numerator, denominator);
	return [numerator / gcd, denominator / gcd];
}

function solveOperation(f1: Fraction, f2: Fraction, formula: Formula): Fraction {
	// parse string fractions
	const [a, b] = f1.split('/').map(Number);
	const [c, d] = f2.split('/').map(Number);

	// apply formula
	const [partialNumerator, partialDenominator] = formula(a, b, c, d);

	// simplify
	const [resultNumerator, resultDenominator] = simplifyFraction(
		partialNumerator,
		partialDenominator,
	);

	// stringify fraction
	return `${resultNumerator}/${resultDenominator}`;
}

const OPERATIONS: OperationsMap = {
	add(f1: Fraction, f2: Fraction) {
		return solveOperation(f1, f2, (a, b, c, d) => [a * d + b * c, b * d]);
	},
	subtract(f1: Fraction, f2: Fraction) {
		return this.add(f1, this.multiply('-1/1', f2));
	},
	multiply(f1: Fraction, f2: Fraction) {
		return solveOperation(f1, f2, (a, b, c, d) => [a * c, b * d]);
	},
	divide(f1: Fraction, f2: Fraction) {
		const [numerator2, denominator2] = f2.split('/').map(Number);
		const inverseF2: Fraction = `${denominator2}/${numerator2}`;
		return this.multiply(f1, inverseF2);
	},
};

export function fractionMath(
	fraction1: Fraction,
	operation: Operation,
	fraction2: Fraction,
): Fraction {
	return OPERATIONS[operation](fraction1, fraction2);
}
