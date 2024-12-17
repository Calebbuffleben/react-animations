import axios from "axios";
import { IPaymentStrategy } from "../IPaymentStrategy";

export class PayPalPayment implements IPaymentStrategy {
    private apiEndpoint = '/api/payments/paypal'; // Backend API endpoint

    async pay(amount: number) {
        try {
            const response = await axios.post(this.apiEndpoint, { amount });

            if (response.data.status === 'success') {
                const redirectUrl = response.data.redirectUrl;
                window.location.href = redirectUrl; // Redirect to PayPal
                return `Redirecting to PayPal for payment of ${amount}...`;
            }
        } catch (error) {
            throw new Error(`PayPal payment failed: ${error.message}`);
        }
    }
}