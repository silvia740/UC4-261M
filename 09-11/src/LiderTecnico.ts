import { IGerente } from "./IGerente";
import { IProgramador } from "./IProgramador";
import { ITrabalhador } from "./ITrabalhador";

export class LiderTecnico implements ITrabalhador, IProgramador, IGerente {
    nome: string;

    constructor(nome: string) {
        this.nome = nome;
    }

    trabalhar(): void {
        console.log(`${this.nome} está trabalhando...`);
    }

    programar(): void {
        console.log(`${this.nome} está programando...`);
    }

    gerenciarEquipes(): void {
        console.log(`${this.nome} está gerenciando equipes...`);
    }
}