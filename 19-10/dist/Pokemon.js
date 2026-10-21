"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pokemon = void 0;
class Pokemon {
    // atributos todos são public 
    nome; // exemplo de pubilc. Normalmente as classes sao públic os atributos nem sempre
    vida; // Exemplo de private. Nao consigo acessar no index. 
    ataque;
    poder;
    constructor(nome, vida, ataque, poder) {
        this.nome = nome;
        this.vida = vida;
        this.ataque = ataque;
        this.poder = poder;
    }
    falar() {
        console.log(`${this.nome} `.repeat(3));
    }
    atacar(alvo) {
        if (alvo.vida > 0) {
            alvo.vida -= this.ataque;
            console.log(`${this.nome} atacou ${alvo.nome} e causou ${this.vida} de dano!`);
            console.log(`Vida restante de ${alvo.nome}: ${alvo.vida}`);
        }
        else {
            console.log(`${alvo.nome} já está derrotado!`);
        }
    }
    atacarComPoder(outroPokemon) {
        console.log(`${this.nome} usou ${this.poder.nome}!`);
        outroPokemon.vida -= this.poder.ataque;
        console.log(`${outroPokemon.nome} perdeu ${this.poder.ataque} de vida!`);
        console.log(`Vida restante: ${outroPokemon.vida}`);
    }
}
exports.Pokemon = Pokemon;
