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
const charmander = new Pokemon_1.Pokemon("Charmander", 100, 25, poder2);
// Pequena batalha
pikachu.falar();
charmander.falar();
pikachu.atacar(charmander);
charmander.atacar(pikachu);
pikachu.atacarComPoder(charmander);
charmander.atacarComPoder(pikachu);
console.log(pikachu);
console.log(charmander);
/*ENCAPSULAMENTO
 Encapsulamento é o método de proteger os dados dos nossos objetos(tanto os atributos quanto os métodos)
  e controlar como podem ser acessados ou modificados.

 Exemplo: usando encapsulamento, podemos impedir que alguém deixe a vida do pokémon negativo.

 Para utilizar encapsulamento nas nossas clasees precisamos colocar certas palavras antes dos atrinutos e antesd dos métodos.
 São elas:
 - public (que se significa 'público')
 - private (que significa 'privado')
 - protected (que significa 'protegido')

 Chamamos estes tres de modificadores de acesso. O 'públic' permite que o atributo ou método seja
 acessado e modificado em qualquer arquivo do meu programa DIRETAMENTE.
 EXEMPLO:

 na classe -> public vida:number
 no index : pokemon.vida = 999

 O 'private' NÂO permite que o atributo ou método seja acessando e modificado de qualquer jeito. Para fazer isso,precisamos chamar os métodos da classe.
 
 */
