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

const vowels: { [key: string]: boolean } = {
	a: true,
	e: true,
	i: true,
	o: true,
	u: true,
};

export function longText(text: string, nVowels: number) {
	const newText = text.split('').map(letter => {
		if (!vowels[letter.toLowerCase()]) {
			return letter;
		}
		return letter.repeat(nVowels);
	});

	return newText.join('');
}
