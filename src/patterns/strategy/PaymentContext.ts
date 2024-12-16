import { IPaymentStrategy } from "./IPaymentStrategy";

export class PaymentContext {
    private paymentMethod: IPaymentStrategy;

    constructor(paymentMethod: IPaymentStrategy) {
        this.paymentMethod = paymentMethod;
    }

    setPaymentMethod(paymentMethod: IPaymentStrategy): void {
        this.paymentMethod = paymentMethod;
    }

    processPayment(amount: number): string {
        return this.paymentMethod.pay(amount);
    }

}