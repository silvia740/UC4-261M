import { Navio } from "./Navio";

export class Chalupa extends Navio {

    constructor(nome: string) {
        super(nome, 60, 10, 60, 100, 2);
    }

    public navegar(): void {
        console.log(`${this.nome} utiliza sua agilidade para realizar manobras rápidas!`);
    }

    public atacar(): void {
        console.log(
            `${this.nome} dispara seus poucos canhões e tenta escapar rapidamente!`
        );
    }

    public explorarIlha(): void {
        console.log(`${this.nome}: a tripulação está explorando uma ilha em busca de tesouros!`);
    }
}