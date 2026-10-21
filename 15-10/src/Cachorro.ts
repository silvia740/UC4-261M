// Toda a classe comeca com letra maiuscula sempre 
// A palvara "export" permite que outros arquivos importem e usem esta classe
// A palavra "class"  inicia a declaracao da classe
// Depois colocamos o nome da classe que deve ser igual ao nome do arquivo seguido de chaves 
export class Cachorro {
    // todo o codigo da classe vai aqui dentro
    // Atributos sao as coisas que um cachorro tem
    // Sao como variaveis, so que sem const e sem let 

    nome:string
    peso:number
    raca:string
    
    // Toda classe precisa de um metodo especial chamado 'contructor'
    // E ele que recebe os valores de nome, peso, raca etc e cria o objeto.
   constructor(meuNome:string, meuPeso:number, minhaRaca:string){
    this.nome = meuNome
    this.peso = meuPeso
    this.raca = minhaRaca

   }


    // Metodos sao funcoes. Elas sao as coisas que o cachorro faz.
    latir():void {
        console.log(`${this.nome}: au au au!`)
    }
    comer():void {
        console.log(`${this.nome}: nham nham!`)
    }
}
