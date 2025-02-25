export class Pokemon {
  ID: number
  name: string
  type: string
  powerLevel: number

  // Constructor
  constructor (
    newID: number,
    newName: string,
    newType: string,
    newPowerLevel: number
  ) {
    this.ID = newID
    this.name = newName
    this.type = newType
    this.powerLevel = newPowerLevel
  }

  pokemonInfo (): void {
    console.log(
      `ID: ${this.ID}, Name: ${this.name}, Type: ${this.type}, PowerLevel: ${this.powerLevel} `
    )
  }
// Getters
  getPokemonID() : number {
    return this.ID
  }

  getPokemonName(): string {
    return this.name
  }

  getPokemonType(): string {
    return this.type
  }

  getPokemonPowerLevel(): number {  
    return this.powerLevel
  }

  // Setters

  setPokemonID(newID: number) : void {
    this.ID = newID
  }


  setPokemonName(newName: string): void {
    this.name = newName
  }

}
