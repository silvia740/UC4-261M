import { Bergantim } from "./Bergantim";
import { Chalupa } from "./Chalupa";
import { Galeao } from "./Galeao";
import { Navio } from "./Navio";

// Criando os objetos
const bergantim = new Bergantim("Vento Forte");
const chalupa = new Chalupa("Pequena Aventureira");
const galeao = new Galeao("Rei dos Mares");

// Exibindo informações
console.log("\n--- INFORMAÇÕES DOS NAVIOS ---");

bergantim.exibirInformacoes();
chalupa.exibirInformacoes();
galeao.exibirInformacoes();

// Navegando
console.log("\n--- NAVEGANDO ---");

bergantim.navegar();
chalupa.navegar();
galeao.navegar();

// Atacando
console.log("\n--- ATAQUES ---");

bergantim.atacar();
chalupa.atacar();
galeao.atacar();

// Recebendo dano
console.log("\n--- RECEBENDO DANO ---");

bergantim.receberDano(30);
chalupa.receberDano(20);
galeao.receberDano(50);

// Consultando vida
console.log("\n--- VIDA APÓS OS ATAQUES ---");

bergantim.exibirInformacoes();
chalupa.exibirInformacoes();
galeao.exibirInformacoes();

// Método exclusivo da Chalupa
console.log("\n--- EXPLORANDO ILHA ---");

chalupa.explorarIlha();

// Método exclusivo do Galeão
console.log("\n--- REPARANDO GALEÃO ---");

galeao.repararNavio();
galeao.exibirInformacoes();

// Polimorfismo
console.log("\n--- POLIMORFISMO ---");

const navios: Navio[] = [
    bergantim,
    chalupa,
    galeao
];

navios.forEach((navio) => {
    navio.navegar();
    navio.atacar();
    navio.exibirInformacoes();
});

// Testando dano inválido
console.log("\n--- TESTANDO REGRAS ---");

bergantim.receberDano(-10);