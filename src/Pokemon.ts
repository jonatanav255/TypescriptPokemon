export class Pokemon {
  ID: number;
  name: string;
  type: string;
  powerLevel: number;


  // Constructor
  constructor (newID: number, newName: string, newType: string, newPowerLevel: number) {
    this.ID = newID
    this.name = newName
    this.type = newType
    this.powerLevel = newPowerLevel
  }


  infoPokemon (): void {
    console.log(`Pokemon was created name ${this.name}, ID ${this.ID}, type ${this.type}, Power level ${this.powerLevel} `)
  }
}
