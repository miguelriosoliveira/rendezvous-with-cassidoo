/*
Write a function where given integer `n`, it returns the angles at each point of a star with n points.
Hint: The sum of the angles at each point of a 5 pointed star is 180 degrees,
and at a 6 pointed is 360 degrees.
*/

export function starAngles(n: number): number {
	if (n < 5) {
		throw new Error("stars with less than 5 points don't exist");
	}
	return Number(((n % 2 ? 180 : 360) / n).toFixed(3));
}
