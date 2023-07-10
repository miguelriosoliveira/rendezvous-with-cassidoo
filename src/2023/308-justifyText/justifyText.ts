/*
Given an array of strings and a max width, format the text such that
each line has exactly `maxWidth` characters and is fully justified.
You can choose how you want to wrap a word.

Example:

> justifyText(["This", "is", "an", "example", "of", "text", "justification."], 16)
> [
    "This    is    an",
    "example  of text",
    "justification.  "
  ]
*/

function countSpacesBetween(strings: string[]): number {
	return strings.length - 1;
}

function countStringsLen(strings: string[]): number {
	const charCount = strings.reduce((count, str) => count + str.length, 0);
	return charCount + countSpacesBetween(strings);
}

function justifyLine(currentLine: string[], maxWidth: number) {
	const spacesBetween = countSpacesBetween(currentLine);
	const spacesToFill = maxWidth - countStringsLen(currentLine);
	const amountToFillEvenly = spacesBetween ? Math.floor(spacesToFill / spacesBetween) + 1 : 0;
	const remainderToFill = spacesToFill % spacesBetween;
	return currentLine
		.map((word, i) => (i < remainderToFill ? `${word} ` : word))
		.join(' '.repeat(amountToFillEvenly))
		.padEnd(maxWidth);
}

export function justifyText(strings: string[], maxWidth: number): string[] {
	const result: string[] = [];
	let currentLine: string[] = [];

	strings.forEach(str => {
		if (currentLine.length === 1 && currentLine[0].length > maxWidth) {
			const word = currentLine[0];
			result.push(word.slice(0, maxWidth));
			currentLine = [word.slice(maxWidth)];
		}
		if (countStringsLen([...currentLine, str]) <= maxWidth) {
			currentLine.push(str);
		} else {
			result.push(justifyLine(currentLine, maxWidth));
			currentLine = [str];
		}
	});

	result.push(justifyLine(currentLine, maxWidth)); // repeat for the last line
	return result;
}
