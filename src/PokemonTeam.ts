import { Pokemon } from './Pokemon'

interface RegisterResult {
  success: boolean
  message?: string
}
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
}
