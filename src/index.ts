// index.ts
import { PokemonTeam } from './PokemonTeam'

const pokemonTeam = new PokemonTeam()

const result1 = pokemonTeam.registerPokemon(100001, 'Pikachu', 'Electric', 50)
if (result1.success) {
  console.log('Pokemon was created successfully:', result1.message)
} else {
  console.error('Failed to create Pokemon:', result1.message)
}

const result2 = pokemonTeam.registerPokemon(100001, 'Charmander', 'Fire', 60)
if (result2.success) {
  console.log('Pokemon was created successfully:', result2.message)
} else {
  console.error('Failed to create Pokemon:', result2.message)
}

const result3 = pokemonTeam.registerPokemon(100003, 'Bulbasaur', 'Grass', 55)
if (result3.success) {
  console.log('Pokemon was created successfully:', result3.message)
} else {
  console.error('Failed to create Pokemon:', result3.message)
}

console.log(pokemonTeam)
