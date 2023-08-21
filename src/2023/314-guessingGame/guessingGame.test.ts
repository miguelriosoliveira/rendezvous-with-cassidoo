import { guessingGame } from './guessingGame';

describe('#guessingGame', () => {
	function fakeRandomFunc(n: number) {
		return () => n;
	}

	it('should return success when guess is correct', () => {
		const game = guessingGame(fakeRandomFunc(42));
		const theNumber = game(42);
		expect(theNumber).toStrictEqual({ success: true, hint: '=', guessCount: 1 });
	});

	it('should return hint "<" when guess is too high', () => {
		const game = guessingGame(fakeRandomFunc(70));
		const response = game(75);
		expect(response).toStrictEqual({ success: false, hint: '<', guessCount: 2 });
	});

	it('should return hint ">" when guess is too low', () => {
		const game = guessingGame(fakeRandomFunc(42));
		const response = game(25);
		expect(response).toStrictEqual({ success: false, hint: '>', guessCount: 2 });
	});

	it('should track guess count correctly', () => {
		const game = guessingGame(fakeRandomFunc(61));
		game(50); // First guess
		game(75); // Second guess
		const response = game(60); // Third guess
		expect(response).toStrictEqual({ success: false, hint: '>', guessCount: 4 });
	});
});
