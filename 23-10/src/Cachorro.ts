// usando a palavra 'extends',
// informamos que a classe Cachorro herda da classe Mamifero
// private -> só a propria classe pode acessar diretamente usando 'this.atributo'.
// O restante precisa usar 'getAtributo' ou 'setAtributo'
// public -> qualquer um acessas e modifica diretamente. Não precisa de getters ou setters
// Protected -> tanto a classe pai quanto as classes filhas podem acessar diretamente.
// O restante precisa usar 'getAtributo' ou 'setAtributo'
import { Mamifero } from "./Mamifero"

export class Cachorro extends Mamifero {
    raca:string

    constructor(raca:string, nome:string, patas:number, pelo:string) {
        // super vem de 'superclass', que e a classe pai
        // super() nada mais é que o contructor da classe pai
        super(raca, patas, pelo);
        this.raca = raca
    }

correr():void {
    console.log(`${this.getNome()} esta correndo com suas ${this.patas}!`)
}
}


 
