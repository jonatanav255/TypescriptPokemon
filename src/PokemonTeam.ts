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
    // Validate that the name isn't empty
    if (!_name.trim()) {
      return { success: false, message: 'Name cannot be empty' }
    }

    // Validate power level boundaries (assuming 1 and 100 are not allowed)
    if (_powerLevel <= 1 || _powerLevel >= 100) {
      return {
        success: false,
        message: 'Power level should be between 1 and 100'
      }
    }

    // Validate ID is within the required range
    if (_id < 100000 || _id > 999999) {
      return {
        success: false,
        message: 'The ID should have 6 numbers (e.g., 100000 - 999999).'
      }
    }

    // Check for duplicate IDs
    if (this.existsPokemonByID(_id)) {
      return { success: false, message: 'The ID already exists' }
    }

    // If all validations pass, register the new Pokemon
    const newPokemon = new Pokemon(_id, _name, _type, _powerLevel)
    this.team.push(newPokemon)

    return { success: true, message: 'Pokemon registered successfully' }
  }
}
