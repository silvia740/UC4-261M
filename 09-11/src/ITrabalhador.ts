export interface ITrabalhador {
    trabalhar(): void;
}

console.log("trabalhador:");
const trabalhador: ITrabalhador = {
    trabalhar: () => {
        console.log("O Trabalhador está Trabalhando...");
    }
};
trabalhador.trabalhar();