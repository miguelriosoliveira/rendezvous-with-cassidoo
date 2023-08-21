import readline from 'readline';
import { guessingGame } from './guessingGame';

const HINT_MAP = {
	'>': () => 'higher',
	'<': () => 'lower',
	'=': (guessCount: number) =>
		`Correct! You won in ${guessCount} ${guessCount === 1 ? 'guess' : 'guesses'}!`,
};

function game() {
	console.log('Guess the number!');

	const gameInstance = guessingGame();

	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout,
	});

	rl.on('line', line => {
		const guess = Number(line);
		const { success, hint, guessCount } = gameInstance(guess);
		console.log(HINT_MAP[hint](guessCount));
		if (success) {
			rl.close();
		}
	});
}

game();
