import { IPaymentStrategy } from "../IPaymentStrategy";

export class BanktransferPayment implements IPaymentStrategy {
    pay(amount: number) {
        return `Paid ${amount} using Bank Transfer.`;
    }
}