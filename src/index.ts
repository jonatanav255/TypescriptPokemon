// index.ts
import { Pokemon } from "./Pokemon";

const pokemons: Pokemon[] = []

const pikachu = new Pokemon(1, 'Pikachu', "fire", 50);
const picoro = new Pokemon(2, 'picoro', "water", 40);

pokemons.push(pikachu)
pokemons.push(picoro)

// pikachu.pokemonInfo()
console.log(pikachu.getPokemonID())
console.log(picoro.getPokemonID())

// console.log("------------------")
// console.log("ARRAY OF POKEMONS")
// console.log("------------------")
// console.log(pokemons);