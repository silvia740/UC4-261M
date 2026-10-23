/*
Crie uma classe chamada cachorro
coloque atributos no cachorro
coloque os atributos 'Private
crie o construtor
crie os métodos 'getteres' e 'setteres'
crie 3 cachorros no index e chame seus métodos
*/

export class Cachorro { 
   private nome:string 
   private raca:string 
   private peso:number

constructor(nome:string, raca:string, peso:number) {
    this.nome = nome
    this.raca = raca
    this.peso = peso
}
public getNome():string{
    return this.nome
}
public setNome(novoNome:string):void{
    this.nome = novoNome
}
public getRaca():string{
    return this.raca 
}
public setRaca(novaRaca:string):void{
    this.raca = novaRaca
}
public getPeso():number{
    return this.peso
}
public setPeso(novoPeso:number):void{
    this.peso = novoPeso
}
}        