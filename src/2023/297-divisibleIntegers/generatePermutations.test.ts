import { generatePermutations } from './generatePermutations';

describe('#generatePermutations', () => {
	it('should generate permutations with same digits', () => {
		expect(generatePermutations([4, 0, 5, 0, 9, 0])).not.toContain(594);
	});
});
