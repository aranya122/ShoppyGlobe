import React, { useState } from 'react';
import PaymentForm from './PaymentForm';

const Checkout = () => {
    const [paymentData, setPaymentData] = useState({});

    const handlePaymentSubmit = (data) => {
        setPaymentData(data);
    };

    return (
        <div className="checkout-page min-h-screen flex items-center justify-center">
            <div className="container mx-auto p-4 text-center">
                <h1 className="text-3xl font-bold mb-6">Checkout</h1>
                <div className="max-w-md mx-auto">
                    <PaymentForm onSubmit={handlePaymentSubmit} />
                </div>
            </div>
        </div>
    );
};

export default Checkout;