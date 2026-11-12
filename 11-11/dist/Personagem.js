"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personagem = void 0;
class Personagem {
    nome;
    vida;
    vidaMaxima;
    ataque;
    defesa;
    constructor(nome, vida, vidaMaxima, ataque, defesa) {
        this.nome = nome;
        this.vidaMaxima = Math.max(0, vidaMaxima);
        this.vida = Math.min(this.vidaMaxima, Math.max(0, vida));
        this.ataque = ataque;
        this.defesa = defesa;
    }
    // Getter para consultar a vida atual
    getVida() {
        return this.vida;
    }
    // Getter para consultar a vida máxima
    getVidaMaxima() {
        return this.vidaMaxima;
    }
    // Receber dano
    receberDano(valor) {
        if (valor <= 0) {
            console.log("O dano precisa ser positivo!");
            return;
        }
        this.vida = Math.max(0, this.vida - valor);
        console.log(`${this.nome} recebeu ${valor} de dano.`);
    }
    // Curar personagem
    curar(valor) {
        if (valor <= 0) {
            console.log("A cura precisa ser positiva!");
            return;
        }
        this.vida = Math.min(this.vidaMaxima, this.vida + valor);
        console.log(`${this.nome} recebeu ${valor} de cura.`);
    }
    // Verificar se está vivo
    estaVivo() {
        return this.vida > 0;
    }
    exibirStatus() {
        console.log(`Nome: ${this.nome}`);
        console.log(`Vida: ${this.vida}/${this.vidaMaxima}`);
        console.log(`Ataque: ${this.ataque}`);
        console.log(`Defesa: ${this.defesa}`);
        console.log(`Está vivo? ${this.estaVivo() ? "Sim" : "Não"}`);
    }
}
exports.Personagem = Personagem;
exports.default = Personagem;
