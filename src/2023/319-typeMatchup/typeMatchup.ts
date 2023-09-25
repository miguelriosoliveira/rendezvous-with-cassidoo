/*
Using the PokéAPI (or your own local setup) write a function that takes in a Pokémon type,
and returns what that type is weak against, and strong against.

Example:

> typeMatchup('fighting')
> "Weak against flying, psychic, and fairy. Strong against normal, rock, steel, ice, and dark."

> typeMatchup('cassidy')
> "This is not a valid Pokémon type, she's weak against everything."
// You can put whatever you want in this response, heh.
*/

interface TypeLink {
	name: string;
	url: string;
}

interface TypeList {
	results: TypeLink[];
}

interface DamageRelations {
	double_damage_from: TypeLink[];
	double_damage_to: TypeLink[];
	half_damage_from: TypeLink[];
	half_damage_to: TypeLink[];
	no_damage_from: TypeLink[];
	no_damage_to: TypeLink[];
}

type DamageRelation = keyof DamageRelations;

interface TypeData {
	damage_relations: DamageRelations;
}

async function request<T>(url: string): Promise<T> {
	const request = await fetch(url);
	return await request.json();
}

function formatTypeArray(types: string[]): string {
	const beforeLast = types.slice(0, -1);
	const last = types.at(-1);
	const formattedStr = [beforeLast.join(', '), last].filter(Boolean).join(', and ');
	return formattedStr || 'nothing';
}

export async function typeMatchup(type: string): Promise<string> {
	const { results: allTypes } = await request<TypeList>('https://pokeapi.co/api/v2/type');

	const typeLink = allTypes.find(t => t.name === type);
	if (!typeLink) {
		return 'This is not a valid Pokémon type.';
	}

	const { damage_relations: damageRelations } = await request<TypeData>(typeLink.url);

	const entries = Object.entries(damageRelations) as Array<[DamageRelation, TypeLink[]]>;
	const damageRelationsParsed = Object.fromEntries(
		entries.map(([relation, types]) => {
			const typeNames = types.map(t => t.name);
			return [relation, typeNames];
		}),
	) as Record<DamageRelation, string[]>;

	const weakAgainst = damageRelationsParsed.double_damage_from;
	const strongAgainst = damageRelationsParsed.double_damage_to;

	return `Weak against ${formatTypeArray(weakAgainst)}. Strong against ${formatTypeArray(
		strongAgainst,
	)}.`;
}
