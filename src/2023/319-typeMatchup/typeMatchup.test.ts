import { describe, it, expect, vi, afterEach } from 'vitest';
import { typeMatchup } from './typeMatchup';

describe('#typeMatchup', () => {
	const fetchSpy = vi.spyOn(global, 'fetch');

	afterEach(() => fetchSpy.mockReset());

	it('returns type matchups for "fighting" type', async () => {
		fetchSpy
			.mockResolvedValueOnce({
				json: async () => ({
					results: [{ name: 'fighting', url: 'https://pokeapi.co/api/v2/type/2/' }],
				}),
			} as Response)
			.mockResolvedValueOnce({
				json: async () => ({
					damage_relations: {
						double_damage_from: [{ name: 'flying' }, { name: 'psychic' }, { name: 'fairy' }],
						double_damage_to: [
							{ name: 'normal' },
							{ name: 'rock' },
							{ name: 'steel' },
							{ name: 'ice' },
							{ name: 'dark' },
						],
					},
				}),
			} as Response);

		const result = await typeMatchup('fighting');
		expect(result).toBe(
			'Weak against flying, psychic, and fairy. Strong against normal, rock, steel, ice, and dark.',
		);
	});

	it('returns an error message for an invalid type "cassidy"', async () => {
		fetchSpy.mockResolvedValueOnce({
			json: async () => ({
				results: [
					{ name: 'normal', url: 'https://pokeapi.co/api/v2/type/1/' },
					{ name: 'fighting', url: 'https://pokeapi.co/api/v2/type/2/' },
				],
			}),
		} as Response);

		const result = await typeMatchup('cassidy');
		expect(result).toBe('This is not a valid Pokémon type.');
	});

	it('returns type matchups for "normal" type', async () => {
		fetchSpy
			.mockResolvedValueOnce({
				json: async () => ({
					results: [{ name: 'normal', url: 'https://pokeapi.co/api/v2/type/1/' }],
				}),
			} as Response)
			.mockResolvedValueOnce({
				json: async () => ({
					damage_relations: {
						double_damage_from: [{ name: 'fighting' }],
						double_damage_to: [],
					},
				}),
			} as Response);

		const result = await typeMatchup('normal');
		expect(result).toBe('Weak against fighting. Strong against nothing.');
	});
});
