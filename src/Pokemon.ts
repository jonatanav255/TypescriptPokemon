import { ALLOWED_POKEMON_TYPES, isValidPokemonType } from './utils/PokemonUtils'
export class Pokemon {
  private _id: number
  private _name: string
  private _type: string
  private _powerLevel: number

  constructor (
    newID: number,
    newName: string,
    newType: string,
    newPowerLevel: number
  ) {
    // Validate that the name isn't empty
    if (!newName.trim()) {
      throw new Error('Name cannot be empty')
    }

    // Validate power level boundaries (assuming 1 and 100 are not allowed)
    if (newPowerLevel <= 1 || newPowerLevel >= 100) {
      throw new Error('Power level should be between 1 and 100')
    }

    // Validate ID is within the required range
    if (newID < 100000 || newID > 999999) {
      throw new Error('The ID should have 6 numbers (e.g., 100000 - 999999).')
    }

    if (!isValidPokemonType(newType)) {
      throw new Error(
        `Invalid Pokemon type. Allowed types are: ${ALLOWED_POKEMON_TYPES.join(
          ', '
        )}`
      )
    }

    this._id = newID
    this._name = newName
    this._type = newType
    this._powerLevel = newPowerLevel
  }

  public get id (): number {
    return this._id
  }
  public set id (newID: number) {
    if (newID < 100000 || newID > 999999) {
      throw new Error('The ID should have 6 numbers (e.g., 100000 - 999999).')
    }
    this._id = newID
  }

  public get name (): string {
    return this._name
  }
  public set name (newName: string) {
    if (!newName.trim()) {
      throw new Error('Name cannot be empty')
    }
    this._name = newName
  }

  public get type (): string {
    return this._type
  }
  public set type (newType: string) {
    if (!isValidPokemonType(newType)) {
      throw new Error(
        `Invalid Pokemon type. Allowed types are: ${ALLOWED_POKEMON_TYPES.join(
          ', '
        )}`
      )
    }
    this._type = newType
  }

  public get powerLevel (): number {
    return this._powerLevel
  }
  public set powerLevel (newPowerLevel: number) {
    if (newPowerLevel <= 1 || newPowerLevel >= 100) {
      throw new Error('Power level should be between 1 and 100')
    }
    this._powerLevel = newPowerLevel
  }

  public pokemonInfo (): void {
    console.log(
      `ID: ${this._id}, Name: ${this._name}, Type: ${this._type}, PowerLevel: ${this._powerLevel}`
    )
  }

  public successfulPokemonTraining (): void {
    if (this._powerLevel + 10 < 100) {
      this._powerLevel += 10
    } else {
      this._powerLevel = 99
    }
  }
}
