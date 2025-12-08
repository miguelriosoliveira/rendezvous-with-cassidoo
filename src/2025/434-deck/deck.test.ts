import { Deck } from './deck.js';

describe('#Deck', () => {
	let deck: Deck;

	beforeEach(() => {
		deck = new Deck();
	});

	describe('initialization', () => {
		it('should create a deck with 52 cards', () => {
			expect(deck.draw(52)).toHaveLength(52);
		});

		it('should have all four suits', () => {
			const allCards = deck.draw(52);
			const suits = new Set(allCards.map(card => card.at(-1)));
			expect(suits.size).toBe(4);
			expect(suits).toContain('♠');
			expect(suits).toContain('♥');
			expect(suits).toContain('♣');
			expect(suits).toContain('♦');
		});

		it('should have all 13 ranks', () => {
			const allCards = deck.draw(52);
			const ranks = new Set(allCards.map(card => card.slice(0, -1)));
			expect(ranks.size).toBe(13);
		});
	});

	describe('#shuffle()', () => {
		it('should shuffle the deck', { retry: 3 }, () => {
			const deck1 = new Deck();
			const deck2 = new Deck();

			deck1.shuffle();
			deck2.shuffle();

			const cards1 = deck1.draw(52);
			const cards2 = deck2.draw(52);

			// Very unlikely that two shuffled decks are in the same order
			expect(cards1).not.toEqual(cards2);
		});

		it('should not lose any cards during shuffle', () => {
			deck.shuffle();
			const allCards = deck.draw(52);
			expect(allCards).toHaveLength(52);
			expect(new Set(allCards).size).toBe(52);
		});
	});

	describe('#draw(n)', () => {
		it('should draw n cards from the deck', () => {
			deck.shuffle();
			const drawn = deck.draw(5);
			expect(drawn).toHaveLength(5);
		});

		it('should draw cards in the order they appear in the deck', () => {
			deck.shuffle();
			const first5 = deck.draw(5);
			const next5 = deck.draw(5);
			expect(first5).toHaveLength(5);
			expect(next5).toHaveLength(5);
			// Cards should be different
			expect(first5).not.toEqual(next5);
		});

		it('should return an empty array when deck is empty', () => {
			deck.shuffle();
			deck.draw(52); // Draw all cards
			const drawn = deck.draw(5);
			expect(drawn).toEqual([]);
		});

		it('should return remaining cards if draw exceeds deck size', () => {
			deck.shuffle();
			deck.draw(50);
			const drawn = deck.draw(5);
			expect(drawn).toHaveLength(2); // Only 2 cards left
		});

		it('should draw 0 cards when n is 0', () => {
			deck.shuffle();
			const drawn = deck.draw(0);
			expect(drawn).toEqual([]);
		});

		it('should maintain 52 unique cards across all draws', () => {
			deck.shuffle();
			const drawn1 = deck.draw(25);
			const drawn2 = deck.draw(27);
			const allCards = [...drawn1, ...drawn2];
			expect(allCards).toHaveLength(52);
			expect(new Set(allCards).size).toBe(52);
		});
	});
});
