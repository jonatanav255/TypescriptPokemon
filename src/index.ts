// index.ts
import { Pokemon } from './Pokemon'
import { PokemonTeam } from './PokemonTeam'

const pokemonTeam = new PokemonTeam()

try {
  if (pokemonTeam.registerPokemon(100001, 'Pikachu', 'Electric', 50)) {
    console.log('Pokemon Pikachu was created successfully.')
  }
  if (pokemonTeam.registerPokemon(100002, 'Charmander', 'Fire', 60)) {
    console.log('Pokemon Charmander was created successfully.')
  }
  if (pokemonTeam.registerPokemon(100003, 'Bulbasaur', 'Grass', 55)) {
    console.log('Pokemon Bulbasaur was created successfully.')
  }
} catch (error) {
  console.error('Error registering Pokemon:', error)
}

console.log(pokemonTeam)
