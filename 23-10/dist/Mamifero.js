"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mamifero = void 0;
// Esta classe sera nossa 'classe pai", tambem chamada de 'superclasse'
class Mamifero {
    nome;
    patas;
    pelo;
    constructor(nome, patas, pelo) {
        this.nome = nome;
        this.patas = patas;
        this.pelo = pelo;
    }
    fazerSom() {
        console.log(`{$this.nome} esta fazendo um barulho.`);
    }
    getNome() {
        return this.nome;
    }
    setNome(novoNome) {
        this.nome = novoNome;
    }
}
exports.Mamifero = Mamifero;
