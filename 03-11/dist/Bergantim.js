"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bergantim = void 0;
const Navio_1 = require("./Navio");
class Bergantim extends Navio_1.Navio {
    constructor(nome) {
        super(nome, 20, 20, 100, 80, 8);
    }
    navegar() {
        console.log(`${this.nome} aproveita os ventos favoráveis para navegar rapidamente!`);
    }
    atacar() {
        console.log(`${this.nome} realiza uma sequência rápida de disparos!`);
    }
}
exports.Bergantim = Bergantim;
