"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Navio = void 0;
class Navio {
    nome;
    capacidadeTripulacao;
    vida;
    vidaMaxima;
    velocidade;
    canhoes;
    constructor(nome, capacidadeTripulacao, vida, vidaMaxima, velocidade, canhoes) {
        this.nome = nome;
        this.capacidadeTripulacao = capacidadeTripulacao;
        this.vida = vida;
        this.vidaMaxima = vidaMaxima;
        this.velocidade = velocidade;
        this.canhoes = canhoes;
    }
    getVida() {
        return this.vida;
    }
    receberDano(dano) {
        if (dano < 0) {
            console.log("Dano inválido!");
            return;
        }
        this.vida -= dano;
        if (this.vida < 0) {
            this.vida = 0;
        }
        console.log(`${this.nome} recebeu ${dano} de dano.`);
    }
    recuperarVida(valor) {
        if (valor <= 0) {
            console.log("Valor de recuperação inválido!");
            return;
        }
        this.vida += valor;
        if (this.vida > this.vidaMaxima) {
            this.vida = this.vidaMaxima;
        }
    }
    navegar() {
        console.log(`${this.nome} está navegando pelo mar.`);
    }
    atacar() {
        console.log(`${this.nome} está atacando com seus canhões!`);
    }
    exibirInformacoes() {
        console.log(`
        ----- INFORMAÇÕES DO NAVIO -----
        Nome: ${this.nome}
        Capacidade: ${this.capacidadeTripulacao}
        Vida: ${this.vida}/${this.vidaMaxima}
        Velocidade: ${this.velocidade}
        Canhões: ${this.canhoes}`);
    }
}
exports.Navio = Navio;
