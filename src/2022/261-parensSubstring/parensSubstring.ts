/*
Given a string `s` consisting of various parenthesis `(` and `)`,
find the length of the longest valid parenthesis substring.

Example:
```js
> parensSubstring('(()(')
> 2

> parensSubstring(')()(()))')
> 6
```
*/

// All thanks to this GeeksForGeeks algorithm description:
// https://www.geeksforgeeks.org/length-of-the-longest-valid-substring/
export function parensSubstring(parensString: string): number {
	let result = 0;
	const stack = [-1];

	parensString.split('').forEach((char, index) => {
		if (char === '(') {
			stack.push(index);
			return;
		}

		stack.pop();
		if (stack.length === 0) {
			stack.push(index);
			return;
		}

		const top = stack.at(-1)!; // stack.length > 0 guaranteed by above if
		const validSubstringLength = index - top;
		result = Math.max(result, validSubstringLength);
	});

	return result;
}
