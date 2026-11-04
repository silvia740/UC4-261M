"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Bergantim_1 = require("./Bergantim");
const Chalupa_1 = require("./Chalupa");
const Galeao_1 = require("./Galeao");
// Criando os objetos
const bergantim = new Bergantim_1.Bergantim("Vento Forte");
const chalupa = new Chalupa_1.Chalupa("Pequena Aventura");
const galeao = new Galeao_1.Galeao("Rei dos Mares");
// Exibindo informações
console.log("===== INFORMAÇÕES DOS NAVIOS =====");
bergantim.exibirInformacoes();
chalupa.exibirInformacoes();
galeao.exibirInformacoes();
// Navegando
console.log("===== NAVEGAÇÃO =====");
bergantim.navegar();
chalupa.navegar();
galeao.navegar();
// Atacando
console.log("===== ATAQUES =====");
bergantim.atacar();
chalupa.atacar();
galeao.atacar();
// Recebendo danos
console.log("===== RECEBENDO DANOS =====");
bergantim.receberDano(30);
chalupa.receberDano(20);
galeao.receberDano(80);
// Consultando vida
console.log("===== VIDA ATUAL =====");
console.log("Bergantim:", bergantim.getVida());
console.log("Chalupa:", chalupa.getVida());
console.log("Galeão:", galeao.getVida());
// Explorando ilha
console.log("===== EXPLORAÇÃO =====");
chalupa.explorarIlha();
// Reparando navio
console.log("===== REPARAÇÃO =====");
galeao.repararNavio();
// Testando dano negativo
console.log("===== TESTE DE DANO INVÁLIDO =====");
bergantim.receberDano(-10);
// Testando polimorfismo
console.log("===== POLIMORFISMO =====");
const navios = [
    bergantim,
    chalupa,
    galeao
];
navios.forEach((navio) => {
    navio.exibirInformacoes();
    navio.navegar();
    navio.atacar();
});
