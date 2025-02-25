import { Pokemon } from './Pokemon'
import { RegisterResult, TrainingResult } from './utils/PokemonTeamUtils'
export class PokemonTeam {
  team: Pokemon[] = []

  private existsPokemonByID (_id: number): boolean {
    return this.team.some(pokemon => pokemon.id === _id)
  }

  public registerPokemon (
    _id: number,
    _name: string,
    _type: string,
    _powerLevel: number
  ): RegisterResult {
    // Check for duplicate IDs
    if (this.existsPokemonByID(_id)) {
      return { success: false, message: 'The ID already exists' }
    }

    try {
      const newPokemon = new Pokemon(_id, _name, _type, _powerLevel)
      this.team.push(newPokemon)
      return { success: true, message: 'Pokemon registered successfully' }
    } catch (error: any) {
      return { success: false, message: error.message }
    }
  }

  public pokemonTraining (
    _id: number,
    trainingType: string,
    difficulty: number
  ): TrainingResult {
    // implementation
    if (difficulty <= 1 || difficulty >= 100) {
      return { success: false, message: 'Difficulty must be between 1 and 100' }
    }

    const pokemon = this.team.find(pokemon => pokemon.id === _id)

    if (!pokemon) {
      return { success: false, message: 'No Pokémon found with the given ID' }
    }

    // Check if the Pokémon's power level meets or exceeds the difficulty
    if (pokemon.powerLevel >= difficulty) {
      pokemon.successfulPokemonTraining()
      return {
        success: true,
        message: `Training successful: ${pokemon.name} has gained +10 power!`
      }
    } else {
      return {
        success: false,
        message: `Training failed: ${pokemon.name} does not meet the required power level.`
      }
    }
  }

  public getStrongestPokemon (): Pokemon | null {
    if (this.team.length === 0) {
      return null
    }
    let strongest = this.team[0]

    for (const pokemon of this.team) {
      if (pokemon.powerLevel > strongest.powerLevel) {
        strongest = pokemon
      }
    }
    return strongest
  }

  public showTeam (): void {
    if (this.team.length === 0) {
      console.log('No Pokémon registered in the team.')
      return
    }

    console.log('Current Pokémon Team:')
    this.team.forEach(pokemon => {
      console.log(
        `ID: ${pokemon.id}, Name: ${pokemon.name}, Type: ${pokemon.type}, Power Level: ${pokemon.powerLevel}`
      )
    })
  }
}
