
import Personagem from "./Personagem";
import { HabilidadeEspecial } from "../Interfaces.ts/HabilidadeEspecial";

export class Arqueiro extends Personagem implements HabilidadeEspecial {
    private precisao: number;

    constructor(
        nome: string,
        vida: number,
        vidaMaxima: number,
        ataque: number,
        defesa: number
    ) {
        super(nome, vida, vidaMaxima, ataque, defesa);

        this.precisao = 20;
    }

    usarHabilidadeEspecial(): void {
        console.log("Arqueiro utilizou Chuva de Flechas!");
    }

    exibirStatus(): void {
        super.exibirStatus();

        console.log(`Precisão: ${this.precisao}`);
    }
}