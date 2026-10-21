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
1) Crie uma classe chamada Pokemon.
o pokemon deve ter um nome(string), vida(number), e um poder(number).
o poder é uma classe que vamos criar tambem.

Metodos de Pokemon:
falar -> um metodo que recebe o nome do pokemon algumas vezes(this.repet(3))

atacar -> um metodo que recebe outro pokemon e ataca ele, tirando a vida dele.

atacarcomPoder -> um metodo que recebe outro pokemon e ataca ele tambem, porem diz o nome do poder e usa o ataque do poder.

2) Crie uma classe chamada Poder. Ela deve ter um nome(string) e ataque(number).
Nao precisa de nenhum metodo, exceto o constructor.

3) Crie dois poderes e dois pokemons no index e simule uma pequena batalha entre eles.

*/
const Pokemon_1 = require("./Pokemon");
const Poder_1 = require("./Poder");
// Criando dois poderes
const poder1 = new Poder_1.Poder("Choque do Trovão", 30);
const poder2 = new Poder_1.Poder("Lança-Chamas", 25);
// Criando dois Pokémons
const pikachu = new Pokemon_1.Pokemon("Pikachu", 100, 30, poder1);
const charmander = new Pokemon_1.Pokemon("Charmander", 100, 20, poder2);
// Pequena batalha
pikachu.falar();
charmander.falar();
pikachu.atacar(charmander);
charmander.atacar(pikachu);
pikachu.atacarComPoder(charmander);
charmander.atacarComPoder(pikachu);
console.log(pikachu);
console.log(charmander);
