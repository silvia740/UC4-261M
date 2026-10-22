// nome guarda um texto.
// const nome: string = "Pipoca";

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


// import { Pokemon } from "./Pokemon"
// import { Poder } from "./Poder"

// // Criando dois poderes
// const poder1 = new Poder("Choque do Trovão", 30)
// const poder2 = new Poder("Lança-Chamas", 25)

// // Criando dois Pokémons
// const pikachu = new Pokemon("Pikachu", 100, 30, poder1)
// const charmander = new Pokemon("Charmander", 100, 25, poder2)

// // Pequena batalha
// pikachu.falar()
// charmander.falar()

// pikachu.atacar(charmander)
// charmander.atacar(pikachu)

// pikachu.atacarComPoder(charmander)
// charmander.atacarComPoder(pikachu)

// console.log(pikachu)
// console.log(charmander)



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
// nome guarda um texto.
// const nome: string = "Pipoca";

// import { Personagem } from "./Personagem";

// // energia guarda um número.
// // const energia: number = 50;

// // console.log mostra informações no terminal.
// // console.log("Nome:", nome);
// // console.log("Energia:", energia);

// /*
// Criem uma classe Personagem que tenha:
// nome
// vida
// dinheiro

// Coloque todos os atributoscomo 'private'
// Crie um método que mostra a vida(exemplo: mostrarVida())
// Crie um método que modifica a vida(exemplo:mudarVida(vida:number))
// */


// const personagem:Personagem = new Personagem("Fulaninho", 100, 10)
// console.log(personagem.getVida())// 100
// personagem.setVida(50)
// console.log(personagem.getVida())//0

// personagem.setNome("Jo")
// console.log(personagem.getNome())




