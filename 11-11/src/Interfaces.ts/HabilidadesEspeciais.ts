import Personagem from "../classes.ts/Personagem";

export interface HabilidadeEspecial {
    usarHabilidade(alvo: Personagem): void;
}