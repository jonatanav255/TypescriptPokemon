export class Pokemon {
  private _id: number;
  private _name: string;
  private _type: string;
  private _powerLevel: number;

  constructor(newID: number, newName: string, newType: string, newPowerLevel: number) {
    this._id = newID;
    this._name = newName;
    this._type = newType;
    this._powerLevel = newPowerLevel;
  }

  public get id(): number {
    return this._id;
  }
  public set id(newID: number) {
    this._id = newID;
  }

  public get name(): string {
    return this._name;
  }
  public set name(newName: string) {
    this._name = newName;
  }

  public get type(): string {
    return this._type;
  }
  public set type(newType: string) {
    this._type = newType;
  }

  public get powerLevel(): number {
    return this._powerLevel;
  }
  public set powerLevel(newPowerLevel: number) {
    this._powerLevel = newPowerLevel;
  }

  public pokemonInfo(): void {
    console.log(
      `ID: ${this._id}, Name: ${this._name}, Type: ${this._type}, PowerLevel: ${this._powerLevel}`
    );
  }

  public successfulPokemonTraining(): void {
    this._powerLevel += 10;
  }
}
