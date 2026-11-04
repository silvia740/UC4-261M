import { Navio } from "./Navio";

export class Bergantim extends Navio{
     constructor(nome: string) {
        super(nome, 60, 20, 100, 80, 8);
    }

    public override navegar(): void {
        console.log(`${this.nome} aproveita os ventos favoráveis para navegar rapidamente!` );
    }

    public override atacar(): void {
        console.log(`${this.nome} realiza uma sequência rápida de disparos!`);
    }
}