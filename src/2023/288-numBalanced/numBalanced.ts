/*
Given a string of parenthesis, return the number of parenthesis you need to add to the string in order for it to be balanced.

Examples:

> numBalanced(`()`)
> 0

> numBalanced(`(()`)
> 1

> numBalanced(`))()))))()`)
> 6

> numBalanced(`)))))`)
> 5
*/

export function numBalanced(parens: string): number {
	const { openCount, toBalanceCount } = parens.split('').reduce(
		(acc, paren) => {
			if (paren === '(') {
				acc.openCount++;
				return acc;
			}
			if (acc.openCount > 0) {
				acc.openCount--;
				return acc;
			}
			acc.toBalanceCount++;
			return acc;
		},
		{ openCount: 0, toBalanceCount: 0 },
	);

	return openCount + toBalanceCount;
}
