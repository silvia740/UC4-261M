"use strict";
// // nome guarda um texto.
// const nome: string = "Pipoca";
Object.defineProperty(exports, "__esModule", { value: true });
// // energia guarda um número.
// const energia: number = 50;
// // console.log mostra informações no terminal.
// console.log("Nome:", nome);
// console.log("Energia:", energia);
const Cachorro_1 = require("./Cachorro");
const cachorro = new Cachorro_1.Cachorro("Pepe", "vira-lata", 8);
const outroCachorro = new Cachorro_1.Cachorro("Margarida", "vira-lata", 14);
const maisCachorro = new Cachorro_1.Cachorro("Baby", "Kokoni", 10);
console.log(cachorro.getNome());
console.log(cachorro.getRaca());
console.log(cachorro.getPeso());
console.log(outroCachorro.getNome());
console.log(outroCachorro.getRaca());
console.log(outroCachorro.getPeso());
console.log(maisCachorro.getNome());
console.log(maisCachorro.getRaca());
console.log(maisCachorro.getPeso());
