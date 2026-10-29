import { Pagamento } from "./Pagamento";

export class CartaoCredito extends Pagamento {
    public processar(): void {
        console.log("Pagamento processado com cartão de crédito.");
    }
}