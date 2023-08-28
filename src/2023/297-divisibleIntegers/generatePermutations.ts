function generatePermutationArrays(digits: number[]): number[][] {
	if (digits.length === 0) {
		return [[]];
	}

	return digits.reduce<number[][]>((permutations, digit, index) => {
		const otherDigits = digits.filter((_, i) => i !== index);
		const subPermutations = generatePermutationArrays(otherDigits);
		return permutations.concat(subPermutations.map(permutation => permutation.concat(digit)));
	}, []);
}

function makeNumberFromDigits(digits: number[]) {
	return Number(digits.join(''));
}

export function generatePermutations(digits: number[]) {
	return Array.from(
		new Set(
			generatePermutationArrays(digits)
				.map(makeNumberFromDigits)
				.filter(numArray => numArray.toString().length === digits.length),
		),
	);
}
