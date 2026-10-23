import { Cachorro } from "./Cachorro";

const cachorro:Cachorro = new Cachorro("Golden-retriver", "Marley", 4 , "Amarelo")
cachorro.fazerSom()
cachorro.getNome()



/*
Exercicio heranca e protected
Crie uma classe chamada Personagem com:
-Os atributos protected nome:string e protected vida:number;
-Um construtor que receba o nome e inicie a vida em 100;
-Um método curar(), que aumente a vida em 10;
-Um método mostrarDados(), que exiba o nome e a vida.
*/

/*
Crie a classe Guerreiro, que herda de Personagem (lembre-se de usar o 'extends)
- Crie um atributo"armadura:string que mostra o tipo de armadura(exemplo: de ferro, de ouro, de aço)
-Crie o constructor:
constructor (armadura:string, nome:string, vida:number) {
super(nome,vida)
this.armadura = armadura
}
-Crie o método usarEscudo() que retorna uma frase "Fulano usou o escudo para se defender".
*/

const personagem:personagem = new Personagem("Cacau", 100) 