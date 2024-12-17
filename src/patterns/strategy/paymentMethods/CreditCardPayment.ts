import axios from "axios";
import { IPaymentStrategy } from "../IPaymentStrategy";

export class CreditCardPayment implements IPaymentStrategy {
    private apiEndpoint = '/api/payments/credit-card'; // Backend API endpoint

    async pay(amount: number) {
        try {
            const cardDetails = {
                cardNumber: '000000000',
                expiry: '12/3009',
                cvv: '123'
            };

            const response = await axios.post(this.apiEndpoint, {
                amount,
                ...cardDetails,
            });
            if (response.data.status === 'success') {
                return `Credit card payment successful! Transaction ID: ${response.data.transactionId}`;
            } else {
                throw new Error('Credit card payment failed.');
            }
        
        } catch (error) {
            throw new Error(`Credit card payment failed: ${error.message}`);
        }
    }
} 