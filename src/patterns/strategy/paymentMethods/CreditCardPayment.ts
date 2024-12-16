import { IPaymentStrategy } from "../IPaymentStrategy";

export class CreditCardPayment implements IPaymentStrategy {
    pay(amount: number) {
        return `Paid ${amount} using Credit Card.`;
    }
} 