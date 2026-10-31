import React from 'react';
import { useCart } from '../context/CartContext';

export const Toast: React.FC = () => {
  const { toastMessage } = useCart();

  if (!toastMessage) return null;

  return (
    <div className="toast-container">
      <div className="toast">
        <span>🎄</span>
        <span>{toastMessage}</span>
      </div>
    </div>
  );
};
