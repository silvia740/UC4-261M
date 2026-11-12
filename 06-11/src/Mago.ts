import { IAtacante } from "./IAtacante";

export class Mago implements IAtacante {
  constructor(public nome: string) {}
    atacar(): void {
        throw new Error("Method not implemented.");
    }

  lancarMagia(): void {
    console.log(`${this.nome} lança uma bola de fogo!`);
  }
}