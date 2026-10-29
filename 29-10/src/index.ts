// import { Carro } from "./Carro";
// import { Bicicleta } from "./Bicicleta";
// import { Veiculo } from "./Veiculo";

// // Testando polimorfismo
// const veiculo: Veiculo[] = [
//     new Veiculo(),
//     new Carro(),
//     new Bicicleta()
// ];

// veiculo.forEach(func => {
//     console.log(`O movimento é km/h ${func.mover()}`);
// });

import { Boleto } from "./Boleto";
import { CartaoCredito } from "./CartaoCredito";
import { Pagamento } from "./Pagamento";

const cartao = new CartaoCredito();
const boleto = new Boleto();

const pagamentos: Pagamento[] = [cartao, boleto];

pagamentos.forEach((pagamento) => {
    pagamento.processar();
});