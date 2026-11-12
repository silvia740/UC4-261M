"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Guardiao = void 0;
const Personagem_1 = __importDefault(require("./Personagem"));
class Guardiao extends Personagem_1.default {
    protecaoExtra;
    constructor(nome, vida, vidaMaxima, ataque, defesa) {
        super(nome, vida, vidaMaxima, ataque, defesa);
        this.protecaoExtra = 10;
    }
    exibirStatus() {
        super.exibirStatus();
        console.log(`Proteção extra: ${this.protecaoExtra}`);
    }
}
exports.Guardiao = Guardiao;
