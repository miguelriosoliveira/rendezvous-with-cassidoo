/*
Given two integers source and target,
add operators in the source number to make it equal target, if possible.
You can return just one, or all possibilities for this!

Example:

> addOperators(123, 6)
> ["1*2*3", "1+2+3"]

> addOperators(3456237490, 9191)
> [] // none possible
*/

function backtrack(
	expression: string,
	current: number,
	index: number,
	previous: number,
	source: number,
	target: number,
	results: string[],
): void {
	const sourceStr = source.toString();

	if (index === sourceStr.length) {
		if (current === target) {
			results.push(expression);
		}
		return;
	}

	for (let i = index + 1; i <= sourceStr.length; i++) {
		const numStr = sourceStr.slice(index, i);
		const num = parseInt(numStr, 10);

		if (index === 0) {
			backtrack(numStr, num, i, num, source, target, results);
		} else {
			backtrack(expression + '+' + numStr, current + num, i, num, source, target, results);
			backtrack(expression + '-' + numStr, current - num, i, -num, source, target, results);
			backtrack(
				expression + '*' + numStr,
				current - previous + previous * num,
				i,
				previous * num,
				source,
				target,
				results,
			);
		}

		if (num === 0) {
			break; // Avoid adding leading zeros
		}
	}
}

export function addOperators(source: number, target: number): string[] {
	const results: string[] = [];
	backtrack(source.toString(), source, 0, source, source, target, results);
	return results;
}
