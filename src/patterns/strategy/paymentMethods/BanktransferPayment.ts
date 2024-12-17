import axios from 'axios';
import { IPaymentStrategy } from "../IPaymentStrategy";

export class BanktransferPayment implements IPaymentStrategy {
    private apiEndpoint = 'https://api.example.com/payments/bank-transfer';

    async pay(amount: number) {
        try {
            const response = await axios.post(this.apiEndpoint, { amount });
            
            if (response.status === 200) {
                const { invoiceId, bankDetails } = response.data;
                return `Invoice ${invoiceId} for ${amount} created. Transfer to: ${bankDetails.accountNumber} (${bankDetails.bankName}).`;
            }
        } catch (error) {
            throw new Error(`Bank transfer payment failed: ${error.message}`);
        }
    }
}