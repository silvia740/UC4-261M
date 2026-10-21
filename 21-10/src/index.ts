// nome guarda um texto.
// const nome: string = "Pipoca";

import { Personagem } from "./Personagem";

// energia guarda um número.
// const energia: number = 50;

// console.log mostra informações no terminal.
// console.log("Nome:", nome);
// console.log("Energia:", energia);

/*
Criem uma classe Personagem que tenha:
nome
vida
dinheiro

Coloque todos os atributoscomo 'private'
Crie um método que mostra a vida(exemplo: mostrarVida())
Crie um método que modifica a vida(exemplo:mudarVida(vida:number))
*/


const personagem:Personagem = new Personagem("Fulaninho", 100, 10)
console.log(personagem.getVida())// 100
personagem.setVida(50)
console.log(personagem.getVida())//0

personagem.setNome("Jo")
console.log(personagem.getNome())

/*
Crie uma classe chamada cachorro
coloque atributos no cachorro
coloque os atributos 'Private
crie o construtor
crie os métodos 'getters' e 'setters'
crie 3 cachorros no index e chame seus métodos
*/

