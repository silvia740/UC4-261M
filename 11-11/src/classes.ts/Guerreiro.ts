import Personagem from "./Personagem";

export class Guerreiro extends Personagem {
     private forcaExtra: number;

    constructor(
        nome: string,
        vida: number,
        vidaMaxima: number,
        ataque: number,
        defesa: number
    ) {
        super(nome, vida, vidaMaxima, ataque, defesa);

        this.forcaExtra = 15;
    }

    exibirStatus(): void {
        super.exibirStatus();

        console.log(`Força extra: ${this.forcaExtra}`);
    }
}
