import { Poder } from "./Poder"

export class Pokemon {
    // atributos todos são public 
public nome:string // exemplo de pubilc. Normalmente as classes sao públic os atributos nem sempre
   private vida:number // Exemplo de private. Nao consigo acessar no index. 
    ataque:number
    poder:Poder
    

constructor(nome:string, vida:number, ataque:number, poder:Poder) {
    this.nome = nome
    this.vida = vida
   this.ataque = ataque
    this.poder = poder
}
falar():void {
    console.log(`${this.nome} `.repeat(3))
}

atacar(alvo:Pokemon):void {
     if (alvo.vida > 0) {
            alvo.vida -= this.ataque
            console.log(
                `${this.nome} atacou ${alvo.nome} e causou ${this.vida
                } de dano!`
            );
            console.log(`Vida restante de ${alvo.nome}: ${alvo.vida}`);
        } else {
            console.log(`${alvo.nome} já está derrotado!`);
        }
    }
      atacarComPoder(outroPokemon: Pokemon): void {
        console.log(`${this.nome} usou ${this.poder.nome}!`)

        outroPokemon.vida -= this.poder.ataque

        console.log(`${outroPokemon.nome} perdeu ${this.poder.ataque} de vida!`)
        console.log(`Vida restante: ${outroPokemon.vida}`)
    }
}


