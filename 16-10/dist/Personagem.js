"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personagem = void 0;
class Personagem {
    //Atributos
    nome;
    vida = 50;
    forca;
    arma;
    constructor(nome, forca, arma) {
        this.nome = nome;
        this.forca = forca;
        this.arma = arma;
    } // this.vida = 100 ou nos atributos colocar vida:number = 100
    curar() {
        if (this.vida >= 100) {
            this.vida = 100;
        }
        else {
            this.vida += 10;
        }
    }
    perderVida(dano) {
        if (this.vida < 0) {
            this.vida = 0;
        }
        else {
            this.vida -= dano;
        }
    }
    curarOutroPersonagem(per) {
        per.vida += 10;
        if (per.vida > 100) {
            per.vida = 100;
            console.log(`o perdonagem${per.nome}foi curado por${this.nome},
        \n Vida de ${per.nome}:${per.vida}.`);
        }
    }
    // criem um metodo chamado atacar que faca um personagem atacar outro
    atacar(alvo) {
        // 3) modifique o metodo 'atacar' da classe persogagem para usar o dano  da arma    
        if (alvo.vida > 0) {
            alvo.vida -= this.arma.ataque;
            console.log(`${this.nome} atacou ${alvo.nome} e causou ${this.forca} de dano!`);
            console.log(`Vida restante de ${alvo.nome}: ${alvo.vida}`);
        }
        else {
            console.log(`${alvo.nome} já está derrotado!`);
        }
    }
}
exports.Personagem = Personagem;
//1)
// crie uma nova classe chamada arma
// arma deve ter nome e ataque
// nao esqueca de constructor
//2)
// Dentro da classe Personagem, crie o atributo arma(do tipo Arma)
// chame ele no construtor de Personagem tambem 
// 3) modifique o metodo 'atacar' da classe persogagem para usar o dano  da arma
