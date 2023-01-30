/*
Given a number, sum every second digit in that number.

Example:

> sumEveryOther(548915381)
> 26 // 4+9+5+8

> sumEveryOther(10)
> 0

> sumEveryOther(1010.11)
> 1 // 0+0+1
*/

export function sumEveryOther(number: number): number {
	return number
		.toString()
		.replace('.', '') // to ignore the floating separator
		.split('')
		.map(Number)
		.filter((_, i) => i % 2 === 1) // 1, 3, 5, 7...
		.reduce((sum, num) => sum + num, 0);
}
