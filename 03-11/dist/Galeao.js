"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Galeao = void 0;
const Navio_1 = require("./Navio");
class Galeao extends Navio_1.Navio {
    Capacidade;
    VelocidadeAlta;
    ResistênciaIntermediária;
    QuantidadeIntermediáriaCanhao;
    constructor(nome) {
        super(nome, 50, 60, 200, 30, 20);
    }
    navegar() {
        console.log(`${this.nome} avança lentamente pelo mar!`);
    }
    atacar() {
        console.log(`${this.nome} dispara uma poderosa salva de canhões!`);
    }
    repararNavio() {
        console.log(`${this.nome} está sendo reparado!`);
        this.recuperarVida(50);
        console.log(`Vida atual: ${this.getVida()}`);
    }
}
exports.Galeao = Galeao;
