/* Crie a classe Carro
Siga as instrucoes para cria-la usando de exemplo a classe Cachorro
o carro deve ter:
marca, tipo, ano

o que o carro faz:
ele anda
ele buzinaq

Depois de criar a classe, crie 3 casrros diferentes no index.ts, chame seus atributos em console.loge chame seus metodos */

export class Carro{
    marca:string
    tipo:string
    ano:number
    constructor (minhaMarca:string, meuTipo:string, meuAno:number){
        this.marca = minhaMarca    /// outro exemplo This.marca = marca, this.tipo = tipo e this.ano = ano
        this.tipo = meuTipo
        this.ano = meuAno
    }
    anda():void {
        console.log(`${this.marca} O carro esta andando!`)
}
     buzina():void {
        console.log(`${this.marca} O carro buzina!`)
    }
  
}

