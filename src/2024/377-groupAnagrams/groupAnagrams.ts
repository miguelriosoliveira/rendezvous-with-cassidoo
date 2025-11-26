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
	const anagramMap = new Map<string, string[]>();

	for (const str of strings) {
		const sortedStr = getSortedAnagram(str);
		const group = anagramMap.get(sortedStr);
		if (group) {
			group.push(str);
		} else {
			anagramMap.set(sortedStr, [str]);
		}
	}

	return Array.from(anagramMap.values());
}
