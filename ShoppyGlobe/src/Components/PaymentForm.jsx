import React, { useState } from 'react';

const PaymentForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    cardName: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
    address: '',
    city: '',
    state: '',
    zip: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form onSubmit={handleSubmit} className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Payment Details</h2>

        {/* Card Name */}
        <div className="mb-5">
          <label className="block text-gray-700 text-sm font-medium">Name on Card</label>
          <input
            type="text"
            name="cardName"
            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            onChange={handleChange}
            required
          />
        </div>

        {/* Card Number */}
        <div className="mb-5">
          <label className="block text-gray-700 text-sm font-medium">Card Number</label>
          <input
            type="text"
            name="cardNumber"
            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            onChange={handleChange}
            required
          />
        </div>

        {/* Expiry Date */}
        <div className="mb-5">
          <label className="block text-gray-700 text-sm font-medium">Expiry Date</label>
          <input
            type="text"
            name="expiry"
            placeholder="MM/YY"
            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2  focus:ring-green-500"
            onChange={handleChange}
            required
          />
        </div>

        {/* CVV */}
        <div className="mb-5">
          <label className="block text-gray-700 text-sm font-medium">CVV</label>
          <input
            type="text"
            name="cvv"
            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            onChange={handleChange}
            required
          />
        </div>

        {/* Address */}
        <div className="mb-5">
          <label className="block text-gray-700 text-sm font-medium">Address</label>
          <input
            type="text"
            name="address"
            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            onChange={handleChange}
            required
          />
        </div>

        {/* City */}
        <div className="mb-5">
          <label className="block text-gray-700 text-sm font-medium">City</label>
          <input
            type="text"
            name="city"
            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            onChange={handleChange}
            required
          />
        </div>

        {/* State */}
        <div className="mb-5">
          <label className="block text-gray-700 text-sm font-medium">State</label>
          <input
            type="text"
            name="state"
            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            onChange={handleChange}
            required
          />
        </div>

        {/* Zip Code */}
        <div className="mb-5">
          <label className="block text-gray-700 text-sm font-medium">Zip Code</label>
          <input
            type="text"
            name="zip"
            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="w-full bg-green-600 text-white font-semibold py-3 rounded-lg hover:bg-green-700 transition duration-300">
          Complete Payment
        </button>
      </form>
    </div>
  );
};

export default PaymentForm;