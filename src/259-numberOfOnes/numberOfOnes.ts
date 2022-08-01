/*
Given an integer `n`, count the total number of `1` digits appearing in all non-negative integers
less than or equal to `n`.

Example:
```js
> numberOfOnes(14)
> 7 // 1, 10, 11, 12, 13, 14
```
*/

export function numberOfOnes(target: number) {
	return Array.from({ length: target + 1 }, (_, index) => index)
		.map(
			currentNumber =>
				currentNumber
					.toString()
					.split('')
					.filter(digit => digit === '1').length,
		)
		.reduce((acc, currentNumber) => acc + currentNumber, 0);
}
