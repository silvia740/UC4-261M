"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Chalupa = void 0;
const Navio_1 = require("./Navio");
class Chalupa extends Navio_1.Navio {
    constructor(nome) {
        super(nome, 10, 100, 100, 50, 2);
    }
    navegar() {
        console.log(`${this.nome} utiliza sua agilidade para realizar manobras rápidas!`);
    }
    atacar() {
        console.log(`${this.nome} dispara seus poucos canhões e tenta escapar rapidamente!`);
    }
    explorarIlha() {
        console.log(`${this.nome}: a tripulação está explorando uma ilha em busca de tesouros!`);
    }
}
exports.Chalupa = Chalupa;
