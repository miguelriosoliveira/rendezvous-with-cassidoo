/*
Write a simple postfix calculator function that takes in a string expression and returns the result.

Example usage:
postfix('5 4 * 6 2 / +')
> 23
*/

type OperationsMap = Record<string, (a: number, b: number) => number>;

const OPERATIONS_MAP: OperationsMap = {
	'+': (a, b) => a + b,
	'-': (a, b) => a - b,
	'*': (a, b) => a * b,
	'/': (a, b) => a / b,
};

export function postfix(expression: string): number {
	const stack: number[] = [];
	const tokens = expression.split(' ');

	tokens.forEach(token => {
		const operation = OPERATIONS_MAP[token];
		if (!operation) {
			stack.push(Number(token));
			return;
		}

		const b = stack.pop() as number;
		const a = stack.pop() as number;
		const result = operation(a, b);
		stack.push(result);
	});

	return stack.pop() as number;
}
