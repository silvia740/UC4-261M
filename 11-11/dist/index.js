"use strict";
// importe tudo da biblioteca 'readline-sync'
// dentro de um objeto chamado 'readline'
// este objeto tera os atributos e m étodos da biblioteca
Object.defineProperty(exports, "__esModule", { value: true });
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
const Personagem_1 = require("./Personagem");
const guerreiro_1 = require("./guerreiro");
const Arqueiro_1 = require("./Arqueiro");
const Guardiao_1 = require("./Guardiao");
const ze = new Personagem_1.Personagem("Seu Zé", 100, 100, 20, 10);
const fredo = new guerreiro_1.Guerreiro("Fredo", 100, 100, 20, 12);
const diegolas = new Arqueiro_1.Arqueiro("Diegolas", 90, 90, 30, 8);
const samuel = new Guardiao_1.Guardiao("Samuel", 120, 120, 15, 20);
// Criando a Sociedade
const sociedade = [
    ze,
    fredo,
    diegolas,
    samuel
];
// Exibindo os personagens
console.log("=== A SOCIEDADE DOS MERCADOS ===");
sociedade.forEach((personagem) => {
    console.log("\n-------------------------");
    personagem.exibirStatus();
});
// Teste inicial
console.log("=== VIDA INICIAL ===");
ze.exibirStatus();
// Teste 1: Dano maior que a vida
console.log("\n=== DANO EXAGERADO ===");
ze.receberDano(150);
console.log("Vida atual:", ze.getVida());
// Teste 2: Cura maior que a vida máxima
console.log("\n=== CURA EXAGERADA ===");
ze.curar(500);
console.log("Vida atual:", ze.getVida());
// Teste 3: Dano negativo
console.log("\n=== DANO NEGATIVO ===");
ze.receberDano(-50);
console.log("Vida atual:", ze.getVida());
// Teste 4: Cura negativa
console.log("\n=== CURA NEGATIVA ===");
ze.curar(-30);
console.log("Vida atual:", ze.getVida());
// Teste 5: Verificar se está vivo
console.log("\n=== VERIFICAR VIDA ===");
console.log("Está vivo?", ze.estaVivo());
// Status final
console.log("\n=== STATUS FINAL ===");
ze.exibirStatus();
