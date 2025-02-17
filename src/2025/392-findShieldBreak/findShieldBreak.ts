/*
Given an array of attack damages and a shield capacity for a spaceship,
return the index when cumulative damage exceeds the shield.
Return -1 if shield survives.

Example:

> findShieldBreak([10, 20, 30, 40], 50)
> 2

> findShieldBreak([1, 2, 3, 4], 20)
> -1

> findShieldBreak([50], 30)
> 0
*/

export function findShieldBreak(damages: number[], shield: number): number {
	let totalDamage = 0;
	return damages.findIndex(damage => (totalDamage += damage) > shield);
}
