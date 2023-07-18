/*
Given a string, separate it into groups of non-space equal characters, sorted.

Example:

> explodeString('Ahh, abracadabra!')
> ['!',',','A','aaaaa','bb','c','d','hh','rr']

> explodeString('\o/\o/')
> ['//','\\','oo']
*/

type StrMap = Record<string, string>;

export function explodeString(str: string): string[] {
	const map = new Proxy(
		{},
		{
			get: (target: StrMap, key: string) => target[key] || '',
		},
	);
	str
		.split('')
		.filter(c => c !== ' ')
		.sort()
		.forEach(char => (map[char] += char));
	return Object.values(map);
}
