"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Arqueiro = void 0;
const Personagem_1 = __importDefault(require("./Personagem"));
class Arqueiro extends Personagem_1.default {
    precisao;
    constructor(nome, vida, vidaMaxima, ataque, defesa) {
        super(nome, vida, vidaMaxima, ataque, defesa);
        this.precisao = 20;
    }
    exibirStatus() {
        super.exibirStatus();
        console.log(`Precisão: ${this.precisao}`);
    }
}
exports.Arqueiro = Arqueiro;
