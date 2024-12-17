import React, { FC, useState } from 'react';

import { PaymentContext } from './PaymentContext';

import { CreditCardPayment } from './paymentMethods/CreditCardPayment';
import { PayPalPayment } from './paymentMethods/PayPalPayment';
import { BanktransferPayment } from './paymentMethods/BanktransferPayment';

const PaymentComponent: FC = () => {
    const [ paymentMethod, setPaymentMethod ] = useState<string>('');
    const [ message, setMessage ] = useState<string>('');
    
    const handlePayment = async () => {
        const amount = 100;

        let paymentStrategy;
        switch (paymentMethod) {
            case 'credit-card':
              paymentStrategy = new CreditCardPayment();
              break;
            case 'paypal':
              paymentStrategy = new PayPalPayment();
              break;
            case 'bank-transfer':
              paymentStrategy = new BanktransferPayment();
              break;
            default:
              throw new Error('Invalid payment method');
        }

        const paymentContext = new PaymentContext(paymentStrategy);
        const result = await paymentContext.processPayment(amount);
        setMessage(result);
    }
    return (
        <div>
          <h1>Payment System</h1>
          <label>
            Choose Payment Method:
            <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
              <option value="credit-card">Credit Card</option>
              <option value="paypal">PayPal</option>
              <option value="bank-transfer">Bank Transfer</option>
            </select>
          </label>
          <button onClick={handlePayment}>Pay</button>
          {message && <p>{message}</p>}
        </div>
    );
}

export default PaymentComponent;