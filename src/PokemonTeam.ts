import { Pokemon } from './Pokemon'

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
  ): boolean {
    // Implementation
    if (this.existsPokemonByID(_id)) {
      throw new Error('The ID already exists')
    }

    if (!_name.trim()) {
      throw new Error('Name Cannot be empty')
    }

    if (_powerLevel <= 1 || _powerLevel >= 100) {
      throw new Error('Power level should be between 1 and 100')
    }

    if (_id < 100000 || _id > 999999) {
      throw new Error('El ID should have 6 numbers (ej. 100000 - 999999).')
    }

    const newPokemon = new Pokemon(_id, _name, _type, _powerLevel)

    this.team.push(newPokemon)

    return true
  }
}
