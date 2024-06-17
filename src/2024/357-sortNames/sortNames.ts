/*
Write a function that takes a list of names and returns the names sorted by the number of vowels in
each name in descending order.
If two names have the same number of vowels, sort them alphabetically.

Example:

> sortNames(["Goku", "Vegeta", "Piccolo", "Gohan"])
> ["Piccolo", "Vegeta", "Gohan", "Goku"]

> sortNames(["Edward", "Alphonse", "Roy", "Winry"])
> ["Alphonse", "Edward", "Winry", "Roy"]
*/

export function vowelCount(name: string): number {
	return name.match(/[aeiouy]/gi)?.length || 0;
}

export function sortNames(names: string[]): string[] {
	return names.sort((a, b) => vowelCount(b) - vowelCount(a) || a.localeCompare(b));
}
