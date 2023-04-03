/*
Write a program that prints the amount of characters its source has in English words.
So a program that is 44 characters long would output “forty four” and a program that is
108 characters long would output “one hundred eight”.
*/

import fs from 'node:fs';

function numToWords(num: number): string {
	const words = [
		'zero',
		'one',
		'two',
		'three',
		'four',
		'five',
		'six',
		'seven',
		'eight',
		'nine',
		'ten',
		'eleven',
		'twelve',
		'thirteen',
		'fourteen',
		'fifteen',
		'sixteen',
		'seventeen',
		'eighteen',
		'nineteen',
	];
	const tens = [
		'',
		'',
		'twenty',
		'thirty',
		'forty',
		'fifty',
		'sixty',
		'seventy',
		'eighty',
		'ninety',
	];

	if (num < 20) {
		return words[num];
	}

	if (num < 100) {
		const remainder = num % 10;
		if (remainder === 0) {
			return tens[Math.floor(num / 10)];
		}
		return `${tens[Math.floor(num / 10)]} ${words[remainder]}`;
	}

	if (num < 1000) {
		const remainder = num % 100;
		if (remainder === 0) {
			return `${words[Math.floor(num / 100)]} hundred`;
		}
		return `${words[Math.floor(num / 100)]} hundred ${numToWords(remainder)}`;
	}

	if (num < 10_000) {
		const remainder = num % 1000;
		if (remainder === 0) {
			return `${words[Math.floor(num / 1000)]} thousand`;
		}
		return `${words[Math.floor(num / 1000)]} thousand ${numToWords(remainder)}`;
	}

	return 'Number too large';
}

export function charCount(): string {
	const file = fs.readFileSync(__filename, 'utf8');
	return numToWords(file.length);
}
