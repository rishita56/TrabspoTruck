import React from 'react';
import './SenderForm.css';

const SenderForm = () => {
  return (
    <div className="form-container">
      <h2>Fill in your details:</h2>
      <form>
        <label>Recipient's Fullname:</label>
        <input type="text" placeholder="Enter recipient's name" />

        <label>Recipient's Address:</label>
        <input type="text" placeholder="Enter recipient's address" />

        <label>Sender's Address:</label>
        <input type="text" placeholder="Enter sender's address" />

        <label>Date:</label>
        <input type="date" />

        <label>Shipping Method:</label>
        <select>
          <option value="">Select shipping method</option>
          <option value="standard">Standard Delivery</option>
          <option value="express">Express Delivery</option>
          <option value="overnight">Overnight Delivery</option>
        </select>

        <label>Payment Mode:</label>
        <select>
          <option value="">Select payment mode</option>
          <option value="paypal">PayPal</option>
          <option value="upi">UPI</option>
          <option value="cod">Cash on Delivery</option>
        </select>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SenderForm;
