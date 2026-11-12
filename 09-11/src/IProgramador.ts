export interface IProgramador {
    programar(): void;
}

console.log("Programador:");
const programador: IProgramador = {
    programar: () => {
        console.log("O Programador está Programando e resolvendo problemas  ...");
    }
};