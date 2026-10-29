"use strict";
// import { Carro } from "./Carro";
// import { Bicicleta } from "./Bicicleta";
// import { Veiculo } from "./Veiculo";
Object.defineProperty(exports, "__esModule", { value: true });
// // Testando polimorfismo
// const veiculo: Veiculo[] = [
//     new Veiculo(),
//     new Carro(),
//     new Bicicleta()
// ];
// veiculo.forEach(func => {
//     console.log(`O movimento é km/h ${func.mover()}`);
// });
const Boleto_1 = require("./Boleto");
const CartaoCredito_1 = require("./CartaoCredito");
const cartao = new CartaoCredito_1.CartaoCredito();
const boleto = new Boleto_1.Boleto();
const pagamentos = [cartao, boleto];
pagamentos.forEach((pagamento) => {
    pagamento.processar();
});
