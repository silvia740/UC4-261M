
/*   o dev pode trabalhar e programar 
o gerente pode trabalhar e gerenciar equipes 
o lider tecnico pode trabalhar e programar e gerenciar equipes 
itrabalhador possui metodo trabalhar 
iprogramador possui metodo programar

igerente possui o metodo gerenciar 

todas as classes dev gerente lidertecnico devertao possuir 
tambem atributo nome cada metodo deve retornar uma mensagem 
crie um objeto de cada no main e chame seus metodos .  */

import { Desenvolvedor } from "./Desenvolvedor";
import { Gerente } from "./Gerente";
import { LiderTecnico } from "./LiderTecnico";



/* 
  O dev pode trabalhar e programar 
  O gerente pode trabalhar e gerenciar equipes 
  O líder técnico pode trabalhar, programar e gerenciar equipes 
*/


const gerente: Gerente = new Gerente("Daniel Vorcaro");
const trabalhador: Desenvolvedor = new Desenvolvedor("Alex Telles");
const liderTecnico: LiderTecnico = new LiderTecnico("Pedro Pascal");

// Chamando os métodos de cada um
console.log("--- GERENTE ---");
gerente.gerenciarEquipes();
gerente.trabalhar();

console.log("\-- DESENVOLVEDOR --");
trabalhador.programar();
trabalhador.trabalhar();

console.log("\--- LÍDER TÉCNICO ---");
liderTecnico.programar();
liderTecnico.trabalhar();
liderTecnico.gerenciarEquipes();