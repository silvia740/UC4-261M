"use strict";
// nome guarda um texto.
// const nome: string = "Pipoca";
Object.defineProperty(exports, "__esModule", { value: true });
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
const personagem = new Personagem("Fulaninho", 100, 10);
console.log(personagem.getVida()); // 100
personagem.setVida(50);
console.log(personagem.getVida()); //0
