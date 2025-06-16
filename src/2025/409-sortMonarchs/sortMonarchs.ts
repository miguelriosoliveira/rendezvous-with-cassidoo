/*
Given an array of strings representing the names of monarchs and their ordinal numbers,
write a function that returns the list of names sorted first by name and then by their ordinal value
(in Roman numerals), in ascending order.

Example:

> sortMonarchs(["Louis IX", "Louis VIII", "Philip II", "Philip I"])
> ["Louis VIII", "Louis IX", "Philip I", "Philip II"]

> sortMonarchs(["George VI", "George V", "Elizabeth II", "Edward VIII"])
> ["Edward VIII", "Elizabeth II", "George V", "George VI"]
*/

import { romanToInt } from '../../utils/romanToInt';

export function sortMonarchs(monarchs: string[]): string[] {
	return monarchs
		.map(monarch => monarch.split(' '))
		.sort(
			([name1, romanNumber1], [name2, romanNumber2]) =>
				name1.localeCompare(name2) || romanToInt(romanNumber1) - romanToInt(romanNumber2),
		)
		.map(([name, romanNumber]) => [name, romanNumber].join(' '));
}
