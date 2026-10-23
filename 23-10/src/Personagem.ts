export class Personagem {
    protected nome:string
    protected vida:number = 100

      constructor(nome:string, vida:number) {
        this.nome = nome
        this.vida = vida
        
    }
 curar(): void {
        if (this.vida >= 100) {
            this.vida = 100
        } else {
            this.vida += 10
        }
    }
mostrarDados():void {
     console.log(`Nome: ${this.nome}`)
     console.log(`Raça: ${this.vida}`)
   
}
}