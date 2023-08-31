export function numToWords(num: number): string {
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
	const tens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

	if (num < 20) {
		return words[num];
	}

	if (num < 100) {
		const remainder = num % 10;
		if (remainder === 0) {
			return tens[Math.floor(num / 10) - 2];
		}
		return `${tens[Math.floor(num / 10) - 2]} ${words[remainder]}`;
	}

	if (num < 1000) {
		const remainder = num % 100;
		if (remainder === 0) {
			return `${words[Math.floor(num / 100)]} hundred`;
		}
		return `${words[Math.floor(num / 100)]} hundred ${numToWords(remainder)}`;
	}

	throw new Error('Number too large');
}
