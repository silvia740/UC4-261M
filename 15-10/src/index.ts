// como exportamos a classe, nos agora podemos importa-la
// import { Cachorro } from "./Cachorro";
// Para criar um objeto criamos uma variavel que deve ser do tipo da classe (cachorro)
// Depois usamos a palvara new para criar um novo Cachorro
// dentro dos parenteses, precisamos colocar todas as informacoes que o construtor pede (na mesma ordem)
// const meuCachorro:Cachorro = new Cachorro("Tobby", 10.50, "vira-lata")
// const outroCachorro:Cachorro = new Cachorro("Rex", 20.00, "Pitbull")
// agora, podemos acessar as imformacoes do cachorro. Por exemplo, para ver o nome:
// console.log(meuCachorro.nome)
// console.log(outroCachorro.nome)
// console.log(meuCachorro.raca)
// console.log(outroCachorro.raca)

// posso tambem chamar os metodos para ver o que o cachorro faz:
//meuCachorro.latir()

/* Crie a classe Carro
Siga as instrucoes para cria-la usando de exemplo a classe Cachorro
o carro deve ter:
marca, tipo, ano

o que o carro faz:
ele anda
ele buzina

Depois de criar a classe, crie 3 carros diferentes no index.ts, chame seus atributos em console.loge chame seus metodos */

import { Carro } from "./Carro"

const meuCarro:Carro = new Carro("wolkswagen", "hatch", 2022)
const outroCarro:Carro = new Carro("chevrolet", "hatch", 2024)
const maisCarro:Carro = new Carro("toyota", "sedan", 2023)

console.log(meuCarro.marca)
console.log(outroCarro.marca)
console.log(maisCarro.marca)
console.log(outroCarro.tipo)
console.log(meuCarro.tipo)
console.log(maisCarro.tipo)
console.log(meuCarro.ano)
console.log(outroCarro.ano)
console.log(maisCarro.ano)

meuCarro.anda()
meuCarro.buzina()

outroCarro.anda()
outroCarro.buzina()

maisCarro.anda()
maisCarro.buzina()