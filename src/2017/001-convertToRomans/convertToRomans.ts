// Write a function that takes in a number from 1 to 1000 and returns that number in Roman Numerals.

const SYMBOLS_MAP: Record<number, string> = {
	1: 'I',
	4: 'IV',
	5: 'V',
	9: 'IX',
	10: 'X',
	40: 'XL',
	50: 'L',
	90: 'XC',
	100: 'C',
	400: 'CD',
	500: 'D',
	900: 'CM',
	1000: 'M',
};

const ARABIC_NUMBERS_DESC = Object.keys(SYMBOLS_MAP)
	.map(Number)
	.sort((a, b) => b - a);

interface ConvertRecursivelyProps {
	number: number;
	romanNumber?: string;
}

function convertRecursively({ number, romanNumber = '' }: ConvertRecursivelyProps): string {
	if (number === 0) {
		return romanNumber;
	}

	const largestValue = ARABIC_NUMBERS_DESC.find(value => value <= number)!;
	const quotient = Math.floor(number / largestValue);
	const remainder = number % largestValue;
	const result = SYMBOLS_MAP[largestValue].repeat(quotient);

	return convertRecursively({ number: remainder, romanNumber: romanNumber + result });
}

export function convertToRomans(number: number): string {
	if (number === 0) {
		return 'nulla';
	}
	return convertRecursively({ number });
}
