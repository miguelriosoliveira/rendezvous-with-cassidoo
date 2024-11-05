/*
Given an array of strings, group the anagrams together.

Example:

groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])
[["eat","tea","ate"],["tan","nat"],["bat"]]

groupAnagrams(["vote", "please"])
[["vote"],["please"]]

groupAnagrams(["debitcard", "badcredit"])
[["debitcard", "badcredit"]]
*/

export function getSortedAnagram(str: string): string {
	return str.toLowerCase().split('').sort().join('');
}

export function groupAnagrams(strings: string[]): string[][] {
	return Object.values(
		strings
			.map(str => [str, getSortedAnagram(str)])
			.reduce<Record<string, string[]>>(
				(map, [str, sortedStr]) => ({
					...map,
					[sortedStr]: [...(map[sortedStr] || []), str],
				}),
				{},
			),
	);
}
