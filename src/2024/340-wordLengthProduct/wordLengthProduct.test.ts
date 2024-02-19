import { wordLengthProduct } from './wordLengthProduct';

describe('#wordLengthProduct', () => {
	it('should return 16 for "fish" and "cake"', () => {
		const result1 = wordLengthProduct(['fish', 'fear', 'boo', 'egg', 'cake', 'abcdef']);
		expect(result1).toStrictEqual(16);
	});

	it('should return 16 for "fish" and "cake" in different positions', () => {
		const result1 = wordLengthProduct(['fear', 'boo', 'egg', 'cake', 'abcdef', 'fish']);
		expect(result1).toStrictEqual(16);
	});

	it('should return 0 for all words sharing the letter "a"', () => {
		const result2 = wordLengthProduct(['havana', 'brazil', 'cuba', 'usa']);
		expect(result2).toStrictEqual(0);
	});

	it('should return 0 for an empty array', () => {
		const result = wordLengthProduct([]);
		expect(result).toStrictEqual(0);
	});

	it('should return 0 for an array with one word', () => {
		const result = wordLengthProduct(['hello']);
		expect(result).toStrictEqual(0);
	});
});
