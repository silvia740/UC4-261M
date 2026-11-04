import { Navio } from "./Navio"

export class Galeao extends Navio {
    Capacidade:number 
VelocidadeAlta:number
ResistênciaIntermediária:number
QuantidadeIntermediáriaCanhao:number
    constructor(nome: string) {
        super(nome, 50, 60, 200, 30, 20);
    }

    public navegar(): void {
        console.log(`${this.nome} avança lentamente pelo mar!`);
    }

    public atacar(): void {
        console.log(`${this.nome} dispara uma poderosa salva de canhões!`);
    }

    public repararNavio(): void {
        console.log(`${this.nome} está sendo reparado!`);

        this.recuperarVida(50);

        console.log(`Vida atual: ${this.getVida()}`);
    }
}