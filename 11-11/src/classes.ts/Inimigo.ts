import Personagem from "./Personagem";

export default class Inimigo extends Personagem {
    constructor(nome: string, vida: number, defesa: number) {
        super(nome, vida, vida, 0, defesa);
    }
}