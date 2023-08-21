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

/**
 * thanks to https://stackoverflow.com/a/1527820/4916416
 *
 * Returns a random integer between min (inclusive) and max (inclusive).
 * The value is no lower than min (or the next integer greater than min
 * if min isn't an integer) and no greater than max (or the next integer
 * lower than max if max isn't an integer).
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt(min: number, max: number): number {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

interface Response {
	success: boolean;
	hint: '>' | '<' | '=';
	guessCount: number;
}

export function guessingGame(randomFunction = getRandomInt): (guess: number) => Response {
	const theNumber = randomFunction(0, 100);
	let guessCount = 1;

	return (guess: number) => {
		if (guess === theNumber) {
			return { success: true, hint: '=', guessCount };
		}
		guessCount++;
		return { success: false, hint: guess > theNumber ? '<' : '>', guessCount };
	};
}
