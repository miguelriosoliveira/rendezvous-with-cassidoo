/*
Implement the Luhn algorithm to validate a credit card number.
Bonus points if you can identify what brand of credit card the user inputted!

Example:

> luhnCheck(123456789)
> false

> luhnCheck(5555555555554444)
> true // Mastercard
*/

const BRANDS = ['Mastercard', 'Visa', 'American Express'] as const;

type Brand = (typeof BRANDS)[number];

// thanks to https://gist.github.com/alexpvieira/9629e62c6d68ff2700a8efe42ee42758
const BrandsRegex: Record<Brand, RegExp> = {
	Mastercard: /^5[1-5][0-9]{14}$/,
	Visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
	'American Express': /^3[47][0-9]{13}$/,
} as const;

function getBrand(cardNumber: number): Brand | null {
	const entries = Object.entries(BrandsRegex) as Array<[Brand, RegExp]>;
	const found = entries.find(([, regex]) => regex.test(cardNumber.toString()));
	if (!found) {
		return null;
	}
	return found[0];
}

interface Result {
	isValid: boolean;
	brand: Brand | 'Unknown';
}

export function luhnCheck(cardNumber: number): Result {
	const sum = Math.floor(cardNumber / 10)
		.toString()
		.split('')
		.reverse()
		.map(Number)
		.map((num, i) => num * (((i + 1) % 2) + 1))
		.map(n => Math.floor(n / 10) + (n % 10))
		.reduce((sum, n) => sum + n, 0);
	const checkDigit = 10 - (sum % 10);

	return {
		isValid: cardNumber % 10 === checkDigit,
		brand: getBrand(cardNumber) || 'Unknown',
	};
}
