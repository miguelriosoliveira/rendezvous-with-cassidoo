/*
Make a "guessing game" where there is a target number, and as the user makes guesses,
the output returns higher or lower until the user is correct.

Example usage:

Guess the number!
> 10
higher
> 20
higher
> 30
lower
> 25
higher
> 27
Correct! You won in 5 guesses!
*/

import { getRandomInt } from './getRandomInt';

type Hint = '>' | '<' | '=';

interface Response {
	success: boolean;
	hint: Hint;
	guessCount: number;
}

export function guessingGame(randomFunction = getRandomInt): (guess: number) => Response {
	const theNumber = randomFunction(0, 100);
	let guessCount = 0;

	return (guess: number) => {
		let hint: Hint = '=';
		guessCount++;
		if (guess > theNumber) {
			hint = '<';
		} else if (guess < theNumber) {
			hint = '>';
		}
		return { success: hint === '=', hint, guessCount };
	};
}
