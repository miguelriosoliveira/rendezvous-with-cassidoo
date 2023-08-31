/*
Given a string in dice notation, return a random integer you can get by rolling those dice.

Example:

> rollDice('4d4') // Four 4-sided dice
> 13

> rollDice('3d20') // Three 20-sided dice
> 28

> rollDice('1d8+2d10') // One 8-sided dice, and two 10-sided dice
> 21
*/

import { getRandomInt } from './getRandomInt';

function rollSingleDice(diceNotation: string) {
	const [diceCount, sidesCount] = diceNotation.split('d').map(Number);
	return getRandomInt(diceCount, diceCount * sidesCount);
}

export function rollDice(diceNotation: string): number {
	return diceNotation.split('+').reduce((sum, dice) => sum + rollSingleDice(dice), 0);
}
