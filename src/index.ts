// index.ts
import { Pokemon } from "./Pokemon";

const pokemons: Pokemon[] = []

const pikachu = new Pokemon(1, 'Pikachu', "fire", 50);
const picoro = new Pokemon(2, 'picoro', "water", 40);

pokemons.push(pikachu)
pokemons.push(picoro)

// pikachu.pokemonInfo()
pikachu.setPokemonName("Cat")
picoro.setPokemonName("Dog")
console.log(pikachu.getPokemonName())
console.log(picoro.getPokemonName())

// console.log("------------------")
// console.log("ARRAY OF POKEMONS")
// console.log("------------------")
// console.log(pokemons);