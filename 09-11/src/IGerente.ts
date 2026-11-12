export interface IGerente {
    gerenciarEquipes(): void;
}

console.log("Gerente:");
const gerente: IGerente = {
    gerenciarEquipes: () => {
        console.log("o Gerente está Gerenciando equipes...");
    }
};
gerente.gerenciarEquipes();