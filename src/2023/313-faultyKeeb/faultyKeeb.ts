/*
You have a faulty keyboard.
Whenever you type a vowel on it (a,e,i,o,u,y), it reverses the string that you have written,
instead of typing the character. Typing other characters works as expected.
Given a string, return what will be on the screen after typing with your faulty keyboard.

Example:

> faultyKeeb('string')
> 'rtsng'

> faultyKeeb('hello world!')
> 'w hllrld!'
*/

const VOWELS = ['a', 'e', 'i', 'o', 'u', 'y'];

export function faultyKeeb(str: string): string {
	return str
		.split('')
		.reduce<string[]>((acc, char) => {
			if (VOWELS.includes(char.toLowerCase())) {
				acc.reverse();
			} else {
				acc.push(char);
			}
			return acc;
		}, [])
		.join('');
}
