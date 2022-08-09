/*
Create a loooong teeeext generator that takes in a string and an integer n, and multiplies the vowels in the string by n.

Example:
```js
$ longText('hello world', 3)
$ 'heeellooo wooorld'

$ longText('lol', 10)
$ 'looooooooool'
```
*/

type VowelsMap = { [key: string]: number };

const vowels: VowelsMap = {
	a: 1,
	e: 1,
	i: 1,
	o: 1,
	u: 1,
};

export function longText(text: string, nVowels: number) {
	const newText = text.split('').map(letter => {
		const multiplier = vowels[letter.toLowerCase()] || 1 / nVowels;
		return letter.repeat(nVowels * multiplier);
	});

	return newText.join('');
}
