"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Guerreiro = void 0;
const Personagem_1 = __importDefault(require("./Personagem"));
class Guerreiro extends Personagem_1.default {
    forcaExtra;
    constructor(nome, vida, vidaMaxima, ataque, defesa) {
        super(nome, vida, vidaMaxima, ataque, defesa);
        this.forcaExtra = 15;
    }
    exibirStatus() {
        super.exibirStatus();
        console.log(`Força extra: ${this.forcaExtra}`);
    }
}
exports.Guerreiro = Guerreiro;
