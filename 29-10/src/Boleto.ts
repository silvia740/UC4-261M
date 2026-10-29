import { Pagamento } from "./Pagamento";


export class Boleto extends Pagamento {
    public override processar(): void {
        console.log("Pagamento processado por boleto bancário.");
    }
}