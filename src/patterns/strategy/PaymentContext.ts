import { IPaymentStrategy } from "./IPaymentStrategy";

export class PaymentContext {
    private paymentMethod: IPaymentStrategy;

    constructor(paymentMethod: IPaymentStrategy) {
        this.paymentMethod = paymentMethod;
    }

    setPaymentMethod(paymentMethod: IPaymentStrategy): void {
        this.paymentMethod = paymentMethod;
    }

    async processPayment(amount: number): Promise<string> {
        return await this.paymentMethod.pay(amount);
    }

}