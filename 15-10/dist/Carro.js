"use strict";
/* Crie a classe Carro
Siga as instrucoes para cria-la usando de exemplo a classe Cachorro
o carro deve ter:
marca, tipo, ano

o que o carro faz:
ele anda
ele buzinaq

Depois de criar a classe, crie 3 casrros diferentes no index.ts, chame seus atributos em console.loge chame seus metodos */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Carro = void 0;
class Carro {
    marca;
    tipo;
    ano;
    constructor(minhaMarca, meuTipo, meuAno) {
        this.marca = minhaMarca; /// outro exemplo This.marca = marca, this.tipo = tipo e this.ano = ano
        this.tipo = meuTipo;
        this.ano = meuAno;
    }
    anda() {
        console.log(`${this.marca} O carro esta andando!`);
    }
    buzina() {
        console.log(`${this.marca} O carro buzina!`);
    }
}
exports.Carro = Carro;
//# sourceMappingURL=Carro.js.map