import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { X, Trash2, Plus, Minus, ArrowRight } from 'lucide-react';

export const CartDrawer: React.FC = () => {
  const {
    cart,
    isCartOpen,
    closeCart,
    updateQuantity,
    removeFromCart,
    appliedCoupon,
    applyCoupon,
    subtotal,
    discountAmount,
    finalTotal,
    freeShippingThreshold,
    freeShippingProgress,
    openCheckout,
    showToast
  } = useCart();

  const [couponInput, setCouponInput] = useState('');

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (!couponInput) return;
    const res = applyCoupon(couponInput);
    showToast(res.message);
  };

  return (
    <div className={`cart-drawer-overlay ${isCartOpen ? 'is-open' : ''}`} onClick={closeCart}>
      <div className="cart-drawer" onClick={e => e.stopPropagation()}>
        {/* Header */}
        <div className="cart-header">
          <div className="cart-header-title">Your Holiday Cart</div>
          <button className="close-btn" onClick={closeCart} aria-label="Close Cart">
            <X size={20} />
          </button>
        </div>

        {/* Free Shipping Progress */}
        <div className="shipping-progress-box">
          <div style={{ fontSize: '0.8rem' }}>
            {finalTotal >= freeShippingThreshold ? (
              <span>🎉 <strong>Congratulations! You have unlocked FREE Express Shipping!</strong></span>
            ) : (
              <span>
                Add <strong>${Math.max(0, freeShippingThreshold - finalTotal)}</strong> more to qualify for <strong>FREE Ground Shipping</strong>
              </span>
            )}
          </div>
          <div className="progress-bar-bg">
            <div className="progress-bar-fill" style={{ width: `${freeShippingProgress}%` }} />
          </div>
        </div>

        {/* Items List */}
        <div className="cart-items-list">
          {cart.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '4rem 1rem', color: 'var(--color-text-muted)' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎄</div>
              <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: 'var(--color-forest)', marginBottom: '0.5rem' }}>
                Your Holiday Cart is Empty
              </h4>
              <p style={{ fontSize: '0.9rem' }}>
                Start exploring our iconic realistic trees and handcrafted decor.
              </p>
            </div>
          ) : (
            cart.map((item, index) => (
              <div key={`${item.productId}-${item.height}-${index}`} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-img" />
                <div>
                  <div className="cart-item-title">{item.name}</div>
                  <div className="cart-item-meta">{item.height} • {item.lights || ''}</div>
                  <div className="cart-item-price">${item.price.toLocaleString()}</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.5rem' }}>
                    <button
                      style={{ border: '1px solid #ccc', width: 24, height: 24, borderRadius: 3, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                      onClick={() => updateQuantity(index, -1)}
                      aria-label="Decrease quantity"
                    >
                      <Minus size={12} />
                    </button>
                    <span style={{ fontWeight: 700, fontSize: '0.85rem' }}>{item.quantity}</span>
                    <button
                      style={{ border: '1px solid #ccc', width: 24, height: 24, borderRadius: 3, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                      onClick={() => updateQuantity(index, 1)}
                      aria-label="Increase quantity"
                    >
                      <Plus size={12} />
                    </button>
                  </div>
                </div>
                <button
                  style={{ color: '#999' }}
                  onClick={() => removeFromCart(index)}
                  title="Remove item"
                  aria-label="Remove item"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="cart-footer">
            {/* Promo Code Input */}
            <form onSubmit={handleApplyCoupon} style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
              <input
                type="text"
                placeholder="Promo code (e.g. BALSAM50)"
                value={couponInput}
                onChange={e => setCouponInput(e.target.value)}
                style={{ flexGrow: 1, padding: '0.5rem 0.75rem', border: '1px solid #ddd', borderRadius: 4, fontSize: '0.85rem' }}
              />
              <button
                type="submit"
                style={{ background: 'var(--color-forest)', color: '#fff', padding: '0.5rem 0.85rem', borderRadius: 4, fontWeight: 600, fontSize: '0.8rem' }}
              >
                Apply
              </button>
            </form>

            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', marginBottom: '0.4rem', color: '#555' }}>
              <span>Subtotal:</span>
              <span>${subtotal.toLocaleString()}</span>
            </div>

            {appliedCoupon && (
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: '#2e7d32', marginBottom: '0.5rem', fontWeight: 600 }}>
                <span>Coupon ({appliedCoupon}):</span>
                <span>-${discountAmount}</span>
              </div>
            )}

            <div className="cart-subtotal-row">
              <span>Estimated Total:</span>
              <span style={{ color: 'var(--color-forest)' }}>${finalTotal.toLocaleString()}</span>
            </div>

            <button className="checkout-btn" onClick={openCheckout}>
              <span>Proceed to Secure Checkout</span>
              <ArrowRight size={16} style={{ display: 'inline', marginLeft: '0.5rem' }} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
