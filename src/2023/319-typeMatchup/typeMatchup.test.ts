import { afterEach, describe, expect, it, vi } from 'vitest';
import { typeMatchup } from './typeMatchup';

describe('#typeMatchup', () => {
	const fetchSpy = vi.spyOn(global, 'fetch');

	afterEach(() => fetchSpy.mockReset());

	it('parses JSON response bodies from both PokéAPI endpoints', async () => {
		const typeEndpoint = 'https://pokeapi.co/api/v2/type/';
		const water = { name: 'water', url: `${typeEndpoint}11/` };
		const grass = { name: 'grass', url: `${typeEndpoint}12/` };
		const fire = { name: 'fire', url: `${typeEndpoint}10/` };

		// Water damage relations from the official PokeAPI/api-data snapshot.
		fetchSpy.mockResolvedValueOnce(Response.json({ results: [water] })).mockResolvedValueOnce(
			Response.json({
				damage_relations: {
					no_damage_to: [],
					half_damage_to: [water, grass, { name: 'dragon', url: `${typeEndpoint}16/` }],
					double_damage_to: [
						{ name: 'ground', url: `${typeEndpoint}5/` },
						{ name: 'rock', url: `${typeEndpoint}6/` },
						fire,
					],
					no_damage_from: [],
					half_damage_from: [
						{ name: 'steel', url: `${typeEndpoint}9/` },
						fire,
						water,
						{ name: 'ice', url: `${typeEndpoint}15/` },
					],
					double_damage_from: [grass, { name: 'electric', url: `${typeEndpoint}13/` }],
				},
			}),
		);

		await expect(typeMatchup('water')).resolves.toBe(
			'Weak against grass, and electric. Strong against ground, rock, and fire.',
		);
	});

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

	it('calls the correct API URL', async () => {
		fetchSpy
			.mockResolvedValueOnce({
				json: async () => ({
					results: [{ name: 'fire', url: 'https://pokeapi.co/api/v2/type/10/' }],
				}),
			} as Response)
			.mockResolvedValueOnce({
				json: async () => ({
					damage_relations: {
						double_damage_from: [{ name: 'water' }],
						double_damage_to: [{ name: 'grass' }],
					},
				}),
			} as Response);

		await typeMatchup('fire');
		expect(fetchSpy).toHaveBeenCalledWith('https://pokeapi.co/api/v2/type');
		expect(fetchSpy).toHaveBeenCalledWith('https://pokeapi.co/api/v2/type/10/');
	});
});
