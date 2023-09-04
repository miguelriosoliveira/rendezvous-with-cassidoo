/*
Write a function that takes in a string and returns the first duplicate character it finds.

Bonus points: write another function that takes in a string and removes all the duplicate characters.
*/

export function firstDuplicate(string: string): string | undefined {
	const charCount: Record<string, number> = {};

	string.split('').forEach(char => {
		const count = charCount[char] || 0;
		charCount[char] = count + 1;
	});

	return Object.entries(charCount)
		.filter(([char, count]) => count > 1)
		.map(([char, count]) => char)
		.at(0);
}

export function removeDuplicates(string: string): string {
	const charSet = new Set(string.split(''));
	return Array.from(charSet).join('');
}
