import { Guerreiro } from "./Guerreiro";
import { IAtacante } from "./IAtacante";
import { Mago } from "./Mago";

const guerreiro = new Guerreiro("Arthur");
const mago = new Mago("Merlin");

guerreiro.atacar();
mago.lancarMagia();

