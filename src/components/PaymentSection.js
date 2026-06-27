import React from 'react';
import './PaymentSection.css';

function PaymentSection({ shoe }) {
  return (
    <div className="payment-section">
      <div className="payment-container">
        <h2>Order Confirmation</h2>
        <div className="order-details">
          <p><strong>Product:</strong> {shoe.name}</p>
          <p><strong>Price:</strong> {shoe.price}</p>
          <p><strong>Details:</strong> {shoe.description}</p>
        </div>

        <div className="payment-info">
          <h3>Scan here for CashApp payment</h3>
          <div className="qr-code-placeholder">
            <p>📱 CashApp: $omarvargas922</p>
          </div>
          <p className="payment-note">Send payment to: <strong>$omarvargas922</strong></p>
          <p className="payment-instruction">QR Code will be added soon</p>
        </div>
      </div>
    </div>
  );
}

export default PaymentSection;
