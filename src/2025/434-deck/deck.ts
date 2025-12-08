/*
Make a data structure for a deck of cards, and implement a shuffle() method, and a draw(n) method
(where you draw n cards). Calling draw() when the deck is empty returns an empty array.

Example usage:

const deck = new Deck();
deck.shuffle();
console.log(deck.draw(5)); // Example: ['10♠', 'K♥', '3♣', 'J♦', '7♠']
console.log(deck.draw(5).length); // 5
console.log(deck.draw(2)); // Example: ['5♣', 'A♠']
*/

const SUITS = ['♠', '♥', '♣', '♦'] as const;
const RANKS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'] as const;

type Suit = (typeof SUITS)[number];
type Rank = (typeof RANKS)[number];
type Card = `${Rank}${Suit}`;

export class Deck {
	cards: Card[];

	constructor() {
		this.cards = SUITS.flatMap<Card>(suit => RANKS.map<Card>(rank => `${rank}${suit}`));
	}

	draw(n: number): Card[] {
		return this.cards.splice(0, n);
	}

	shuffle() {
		return this.cards.sort(() => Math.random() - 0.5);
	}
}
