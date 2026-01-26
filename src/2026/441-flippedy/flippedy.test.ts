import { describe, expect, it } from "vitest";
import { flippedy } from "./flippedy";

describe("flippedy", () => {
	it("should reverse words with same vowel count as first word", () => {
		expect(flippedy("cat and mice")).toBe("cat dna mice");
	});

	it("should keep words with different vowel count unchanged", () => {
		expect(flippedy("banana healthy")).toBe("banana healthy");
	});

	it("should handle single word", () => {
		expect(flippedy("hello")).toBe("hello");
	});

	it("should reverse all words when they all have same vowel count", () => {
		expect(flippedy("cat bat rat")).toBe("cat tab tar");
	});

	it("should handle words with no vowels", () => {
		expect(flippedy("sh by my")).toBe("sh yb ym");
	});

	it("should handle first word with no vowels", () => {
		expect(flippedy("shy hello world")).toBe("shy hello world");
	});

	it("should handle multiple vowels", () => {
		expect(flippedy("aeiou queue beautiful")).toBe("aeiou queue lufituaeb");
	});

	it("should handle mixed vowel counts", () => {
		expect(flippedy("dog cat elephant bee")).toBe("dog tac elephant bee");
	});

	it("should handle words with consecutive vowels", () => {
		expect(flippedy("tea sea tree")).toBe("tea aes eert");
	});

	it("should handle long sentence with varying vowel counts", () => {
		expect(flippedy("the quick brown fox jumps")).toBe("the quick nworb xof spmuj");
	});
});
