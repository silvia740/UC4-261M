export class Cachorro {
   private nome:string
   private raca:string
   private peso:number

   constructor(nome:string, raca:string, peso:number){
        this.nome = nome
        this.raca = raca
        this.peso = peso
   }
   public getNome(): string{
    return this.nome
   }
   public setNome(novoNome:string):void {
         this.nome = novoNome
    
   }
}