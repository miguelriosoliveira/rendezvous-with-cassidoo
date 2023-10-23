/*
Given two strings s and t, determine if they are isomorphic. Two strings are isomorphic if there is a one-to-one mapping possible for every character of the first string to every character of the second string.

Example:

> isIsomorphic('abb', 'cdd')
> true // 'a' maps to 'c' and 'b' maps to 'd'

> isIsomorphic('cassidy', '1234567')
> false // 's' cannot have a mapping to both '3' and '4'

> isIsomorphic('cass', '1233')
> true
*/

export function isIsomorphic(s: string, t: string): boolean {
	if (s.length !== t.length) {
		return false;
	}

	const isoMap: Record<string, Set<string>> = {};

	s.split('').forEach((c, i) => {
		if (isoMap[c]) {
			isoMap[c].add(t[i]);
		} else {
			isoMap[c] = new Set(t[i]);
		}
	});

	return Object.values(isoMap).every(set => set.size === 1);
}
