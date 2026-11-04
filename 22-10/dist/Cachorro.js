"use strict";
/*
Crie uma classe chamada cachorro
coloque atributos no cachorro
coloque os atributos 'Private
crie o construtor
crie os métodos 'getteres' e 'setteres'
crie 3 cachorros no index e chame seus métodos
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cachorro = void 0;
class Cachorro {
    nome;
    raca;
    peso;
    constructor(nome, raca, peso) {
        this.nome = nome;
        this.raca = raca;
        this.peso = peso;
    }
    getNome() {
        return this.nome;
    }
    setNome(novoNome) {
        this.nome = novoNome;
    }
    getRaca() {
        return this.raca;
    }
    setRaca(novaRaca) {
        this.raca = novaRaca;
    }
    getPeso() {
        return this.peso;
    }
    setPeso(novoPeso) {
        this.peso = novoPeso;
    }
}
exports.Cachorro = Cachorro;
