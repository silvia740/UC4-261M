"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Personagem_1 = __importDefault(require("./Personagem"));
class Inimigo extends Personagem_1.default {
    constructor(nome, vida, defesa) {
        super(nome, vida, vida, 0, defesa);
    }
}
exports.default = Inimigo;
