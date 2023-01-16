/*
Implement a “spin the wheel” game where the player can bet on each spin of a wheel and either
double their money, lose their money, or keep their money.
You can choose how the user bets, and what data structures you might want to use for the player
and their money!
*/

const MULTIPLIER = {
	LOSE: 0,
	KEEP: 1,
	DOUBLE: 2,
} as const;

type Interval = [number, number];

const INTERVALS: { [k: number]: Interval } = {
	[MULTIPLIER.LOSE]: [1, 1],
	[MULTIPLIER.KEEP]: [2, 7],
	[MULTIPLIER.DOUBLE]: [8, 10],
};

function isInInterval(number: number, [min, max]: Interval) {
	return number >= min && number <= max;
}

function getMultiplier(number: number) {
	const multiplier = isInInterval(number, INTERVALS[MULTIPLIER.LOSE])
		? MULTIPLIER.LOSE
		: isInInterval(number, INTERVALS[MULTIPLIER.KEEP])
		? MULTIPLIER.KEEP
		: isInInterval(number, INTERVALS[MULTIPLIER.DOUBLE])
		? MULTIPLIER.DOUBLE
		: -1;

	if (multiplier < 0) {
		throw new Error('invalid interval');
	}

	return multiplier;
}

export class SpinTheWheel {
	constructor(private interval: Interval) {}

	spin(bet: number): number {
		const [min, max] = this.interval;
		const randomNumber = Math.random() * (max - min) + min;
		const multiplier = getMultiplier(randomNumber);
		return bet * multiplier;
	}
}
