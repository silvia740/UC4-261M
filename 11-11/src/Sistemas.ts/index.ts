// importe tudo da biblioteca 'readline-sync'
// dentro de um objeto chamado 'readline'
// este objeto tera os atributos e m étodos da biblioteca

import * as readline from "readline-sync"

// // const nome:string = readline.question("digite seu nome: ")

// const escolha:number = readline.question("escolha uma opcao: ")

// switch(escolha) {
// case 1:
//     console.log("voce escolheu uma opcao 1")
//     case 2:
//     console.log("voce escolheu uma opcao 2")
//     case 3:
//     console.log("voce escolheu uma opcao 3")
//     break
//     default:
//     console.log("voce escolheu uma opcao invalida")
//     break
    
// }
import { Personagem } from "../classes.ts/Personagem";
import { Guerreiro } from "../classes.ts/Guerreiro";
import { Arqueiro } from "../classes.ts/Arqueiro";
import { Guardiao } from "../classes.ts/Guardiao";
const ze = new Personagem("Seu Zé", 100, 100, 20, 10);
const fredo = new Guerreiro("Fredo", 100, 100, 20, 12);
const diegolas = new Arqueiro("Diegolas", 90, 90, 30, 8);
const samuel = new Guardiao("Samuel", 120, 120, 15, 20);

import { curavel } from "../Interfaces.ts/Curavel";
import { equipavel } from "../Interfaces.ts/Equipavel";
import { HabilidadeEspecial } from "../Interfaces.ts/HabilidadeEspecial";

// Função que recebe uma interface Curavel
function recuperarVida(personagem: curavel): void {
    personagem.curar(20);
}

// Função que recebe uma interface Equipavel
function equiparItem(personagem: equipavel, item: string): void {
    personagem.equipar(item);
}

// Função que recebe uma interface HabilidadeEspecial
function ativarHabilidade(personagem: HabilidadeEspecial): void {
    personagem.usarHabilidadeEspecial();
}

// Testando os contratos
console.log("=== TESTANDO INTERFACES ===");

console.log("\n=== CURA ===");
recuperarVida(samuel);

console.log("\n=== EQUIPAMENTO ===");
equiparItem(fredo, "Espada de Ferro");
equiparItem(samuel, "Escudo de Ouro");

console.log("\n=== HABILIDADE ESPECIAL ===");
ativarHabilidade(diegolas);
