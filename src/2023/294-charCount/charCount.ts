/*
Write a program that prints the amount of characters its source has in English words.
So a program that is 44 characters long would output "forty four" and a program that is
108 characters long would output "one hundred eight".
*/

import fs from 'node:fs';
import { numToWords } from './numToWords';

export function charCount(): string {
	const file = fs.readFileSync(__filename, 'utf8');
	return numToWords(file.length);
}
