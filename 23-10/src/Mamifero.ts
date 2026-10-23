// Esta classe sera nossa 'classe pai", tambem chamada de 'superclasse'
export class Mamifero{
    private nome:string
    protected patas:number
    private pelo:string

    constructor(nome:string, patas:number, pelo:string){
        this.nome = nome
        this.patas = patas
        this.pelo = pelo
    }
fazerSom():void{
    console.log(`{$this.nome} esta fazendo um barulho.`)
}
getNome():string{
    return this.nome
}
setNome(novoNome:string):void{
    this.nome = novoNome
}
}