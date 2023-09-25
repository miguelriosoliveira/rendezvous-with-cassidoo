import { typeMatchup } from './typeMatchup';

describe('#typeMatchup', () => {
	it('returns type matchups for "fighting" type', async () => {
		const result = await typeMatchup('fighting');
		expect(result).toBe(
			'Weak against flying, psychic, and fairy. Strong against normal, rock, steel, ice, and dark.',
		);
	});

	it('returns an error message for an invalid type "cassidy"', async () => {
		const result = await typeMatchup('cassidy');
		expect(result).toBe('This is not a valid Pokémon type.');
	});

	it('returns type matchups for "normal" type', async () => {
		const result = await typeMatchup('normal');
		expect(result).toBe('Weak against fighting. Strong against nothing.');
	});
});
