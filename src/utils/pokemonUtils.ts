// pokemonUtils.ts
export const ALLOWED_POKEMON_TYPES: string[] = [
  'Fire',
  'Water',
  'Electric',
  'Grass',
  'Psychic',
  'Normal',
  'Fighting',
  'Flying',
  'Ground',
  'Rock',
  'Bug',
  'Ghost',
  'Steel',
  'Dragon',
  'Dark',
  'Fairy',
  'Ice'
]

// Optional: A helper function to check if a type is valid
export function isValidPokemonType (type: string): boolean {
  return ALLOWED_POKEMON_TYPES.includes(type)
}
