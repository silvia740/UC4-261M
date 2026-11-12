import Personagem from "../classes.ts/Personagem";

export interface Curavel {
    curarAliado(alvo: Personagem, valor: number): void;
}