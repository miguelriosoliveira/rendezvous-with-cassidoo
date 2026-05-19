/*
Given a string s consisting of letters, convert each character to its opposite case that is, change
every lowercase letter to uppercase, and every uppercase letter to lowercase.
Bonus: add an "alternate" parameter that converts the whole string to AlTeRnAtE cAsE!

Examples:

let alternating = true

toggleChar("Hello, world!")
> "hELLO, WORLD!"

toggleChar("HeheHeheHEheheHeH")
> "hEHEhEHEheHEHEhEh"

toggleChar("This will be alternated", alternating)
> "ThIs WiLl Be AlTeRnAtEd"
*/

function setCase(char: string, forceLower = false): string {
	if (forceLower) {
		return char.toLowerCase();
	}
	return char.toUpperCase();
}

export function toggleChar(s: string, alternate = false): string {
	if (!alternate) {
		return [...s].map(char => setCase(char, char === char.toUpperCase())).join('');
	}

	let forceLowerCase = true;
	return [...s]
		.map(char => {
			forceLowerCase = char === ' ' ? forceLowerCase : !forceLowerCase;
			return setCase(char, forceLowerCase);
		})
		.join('');
}
