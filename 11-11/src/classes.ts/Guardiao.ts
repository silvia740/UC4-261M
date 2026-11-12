
import Personagem from "./Personagem";
import { curavel } from "../Interfaces.ts/Curavel";
import { equipavel } from "../Interfaces.ts/Equipavel";

export class Guardiao extends Personagem implements Curavel, Equipavel {
    private protecaoExtra: number;

    constructor(
        nome: string,
        vida: number,
        vidaMaxima: number,
        ataque: number,
        defesa: number
    ) {
        super(nome, vida, vidaMaxima, ataque, defesa);

        this.protecaoExtra = 10;
    }

    equipar(item: string): void {
        console.log(`Guardião equipou: ${item}`);
    }

    exibirStatus(): void {
        super.exibirStatus();

        console.log(`Proteção extra: ${this.protecaoExtra}`);
    }
}
