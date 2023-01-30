/*
Given a string that has a valid email address, write a function to hide the first part of the email
(before the @ sign), minus the first and last character. For extra credit, add a flag to hide the
second part after the @ sign to your function excluding the first character and the domain extension.

Examples:
```js
> hideEmail('example@example.com')
> 'e*****e@example.com'

> hideEmail('example+test@example.co.uk', hideFull)
> 'e**********t@e******.co.uk'
```
*/

function hideWord(word: string, hideLast = false) {
	const hiddenPart = word.slice(1, -1).replace(/./g, '*');
	const lastLetter = hideLast ? '*' : word.at(-1);
	return word.at(0) + hiddenPart + lastLetter;
}

export function hideEmail(email: string, hideFull = false) {
	const [firstPart, secondPart] = email.split('@');
	const hiddenFirstPart = hideWord(firstPart);

	if (!hideFull) {
		return `${hiddenFirstPart}@${secondPart}`;
	}

	const [firstWordOfSecondPart, ...extensions] = secondPart.split('.');
	const hiddenSecondPart = [hideWord(firstWordOfSecondPart, true), ...extensions].join('.');
	return `${hiddenFirstPart}@${hiddenSecondPart}`;
}
