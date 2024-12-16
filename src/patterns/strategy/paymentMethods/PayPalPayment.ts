import { IPaymentStrategy } from "../IPaymentStrategy";

export class PayPalPayment implements IPaymentStrategy {
    pay(amount: number) {
        return `Paid ${amount} using PayPal.`;
    }
}