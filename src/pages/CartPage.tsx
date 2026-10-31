import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Trash2, Plus, Minus, ArrowRight, ShieldCheck, Truck, Lock, ChevronRight } from 'lucide-react';

export const CartPage: React.FC = () => {
  const navigate = useNavigate();
  const {
    cart,
    updateQuantity,
    removeFromCart,
    subtotal,
    appliedCoupon,
    discountAmount,
    finalTotal,
    applyCoupon,
    freeShippingThreshold,
    freeShippingProgress
  } = useCart();

  const [couponCode, setCouponCode] = useState('');
  const [couponMsg, setCouponMsg] = useState<{ text: string; error?: boolean } | null>(null);

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    if (!couponCode.trim()) return;
    const res = applyCoupon(couponCode);
    setCouponMsg({ text: res.message, error: !res.success });
    if (res.success) setCouponCode('');
  };

  return (
    <div className="cart-page" style={{ background: '#faf7f2', minHeight: '100vh', paddingBottom: '6rem' }}>
      {/* Breadcrumbs */}
      <div style={{ background: '#ffffff', borderBottom: '1px solid #eee', padding: '0.85rem 1rem' }}>
        <div className="container" style={{ maxWidth: '1240px', margin: '0 auto', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: '#666' }}>
          <Link to="/" style={{ color: '#444', textDecoration: 'none' }}>Home</Link>
          <ChevronRight size={13} />
          <span style={{ color: '#143d2f', fontWeight: 600 }}>Shopping Bag</span>
        </div>
      </div>

      <div className="container" style={{ maxWidth: '1240px', margin: '3rem auto 0', padding: '0 1rem' }}>
        <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', color: '#143d2f', margin: '0 0 1.5rem', fontWeight: 600 }}>
          Your Shopping Bag ({cart.reduce((s, i) => s + i.quantity, 0)} Items)
        </h1>

        {/* Free Shipping Progress Indicator */}
        <div style={{ background: '#ffffff', padding: '1.25rem 1.5rem', borderRadius: 8, border: '1px solid #ebd9c0', marginBottom: '2rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', marginBottom: '0.5rem', fontWeight: 600 }}>
            <span>
              {subtotal >= freeShippingThreshold ? (
                <span style={{ color: '#2e7d32', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                  <Truck size={16} /> Congratulations! You unlocked <strong>FREE Ground Shipping</strong>!
                </span>
              ) : (
                <span>Add ${(freeShippingThreshold - subtotal).toFixed(2)} more for <strong>FREE Ground Shipping</strong></span>
              )}
            </span>
            <span style={{ color: '#888' }}>Threshold: ${freeShippingThreshold}</span>
          </div>
          <div style={{ width: '100%', height: 7, background: '#eee', borderRadius: 4, overflow: 'hidden' }}>
            <div style={{ width: `${freeShippingProgress}%`, height: '100%', background: 'var(--color-forest)', transition: 'width 0.4s ease' }} />
          </div>
        </div>

        {cart.length === 0 ? (
          <div style={{ background: '#ffffff', borderRadius: 8, padding: '4rem 2rem', textAlign: 'center', border: '1px solid #ebd9c0' }}>
            <p style={{ fontSize: '1.2rem', color: '#555', marginBottom: '1.5rem' }}>
              Your shopping bag is currently empty.
            </p>
            <Link
              to="/category/trees"
              style={{
                background: 'var(--color-forest)',
                color: '#fff',
                textDecoration: 'none',
                padding: '0.85rem 2rem',
                borderRadius: 4,
                fontWeight: 700,
                display: 'inline-block'
              }}
            >
              Explore Signature Christmas Trees
            </Link>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem', alignItems: 'start' }}>
            {/* Items Table */}
            <div style={{ background: '#ffffff', borderRadius: 8, border: '1px solid #ebd9c0', overflow: 'hidden' }}>
              <div style={{ padding: '1.25rem 1.5rem', borderBottom: '1px solid #eee', fontWeight: 700, color: '#143d2f', background: '#faf7f2' }}>
                Item Details
              </div>

              <div style={{ padding: '0 1.5rem' }}>
                {cart.map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '80px 1fr auto auto',
                      gap: '1.25rem',
                      alignItems: 'center',
                      padding: '1.5rem 0',
                      borderBottom: idx < cart.length - 1 ? '1px solid #eee' : 'none'
                    }}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      style={{ width: 80, height: 80, objectFit: 'cover', borderRadius: 6, border: '1px solid #eee' }}
                    />

                    <div>
                      <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.15rem', color: '#143d2f', margin: '0 0 0.25rem' }}>
                        {item.name}
                      </h4>
                      <div style={{ fontSize: '0.82rem', color: '#666' }}>Size: {item.height}</div>
                      <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#143d2f', marginTop: '0.25rem' }}>
                        ${item.price.toLocaleString()} each
                      </div>
                    </div>

                    {/* Quantity Selector */}
                    <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #ccc', borderRadius: 4 }}>
                      <button
                        onClick={() => updateQuantity(idx, -1)}
                        style={{ border: 'none', background: 'transparent', padding: '0.4rem 0.65rem', cursor: 'pointer' }}
                      >
                        <Minus size={13} />
                      </button>
                      <span style={{ fontSize: '0.88rem', fontWeight: 700, padding: '0 0.4rem', minWidth: 20, textAlign: 'center' }}>
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(idx, 1)}
                        style={{ border: 'none', background: 'transparent', padding: '0.4rem 0.65rem', cursor: 'pointer' }}
                      >
                        <Plus size={13} />
                      </button>
                    </div>

                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontWeight: 700, fontSize: '1.1rem', color: '#143d2f', marginBottom: '0.5rem' }}>
                        ${(item.price * item.quantity).toLocaleString()}
                      </div>
                      <button
                        onClick={() => removeFromCart(idx)}
                        style={{ border: 'none', background: 'transparent', color: '#891b29', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.8rem' }}
                      >
                        <Trash2 size={14} /> Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Order Summary Box */}
            <div style={{ background: '#ffffff', borderRadius: 8, border: '1px solid #ebd9c0', padding: '2rem' }}>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.45rem', color: '#143d2f', margin: '0 0 1.25rem', borderBottom: '1px solid #eee', paddingBottom: '0.75rem' }}>
                Order Summary
              </h3>

              {/* Promo Code Form */}
              <form onSubmit={handleApply} style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.25rem' }}>
                <input
                  type="text"
                  placeholder="Promo Code (e.g. HURRY50)"
                  value={couponCode}
                  onChange={e => setCouponCode(e.target.value)}
                  style={{ flexGrow: 1, padding: '0.6rem 0.75rem', border: '1px solid #ccc', borderRadius: 4, fontSize: '0.85rem' }}
                />
                <button
                  type="submit"
                  style={{ background: 'var(--color-forest)', color: '#fff', border: 'none', padding: '0.6rem 1rem', borderRadius: 4, fontWeight: 700, fontSize: '0.85rem', cursor: 'pointer' }}
                >
                  Apply
                </button>
              </form>

              {couponMsg && (
                <div style={{ fontSize: '0.82rem', color: couponMsg.error ? '#891b29' : '#2e7d32', fontWeight: 600, marginBottom: '1rem' }}>
                  {couponMsg.text}
                </div>
              )}

              {/* Breakdown */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', borderBottom: '1px solid #eee', paddingBottom: '1rem', marginBottom: '1rem', fontSize: '0.92rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', color: '#555' }}>
                  <span>Item Subtotal:</span>
                  <span>${subtotal.toLocaleString()}</span>
                </div>
                {appliedCoupon && (
                  <div style={{ display: 'flex', justifyContent: 'space-between', color: '#2e7d32', fontWeight: 600 }}>
                    <span>Coupon ({appliedCoupon}):</span>
                    <span>-${discountAmount}</span>
                  </div>
                )}
                <div style={{ display: 'flex', justifyContent: 'space-between', color: '#555' }}>
                  <span>Ground Shipping:</span>
                  <span style={{ color: '#2e7d32', fontWeight: 600 }}>FREE</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', color: '#555' }}>
                  <span>Estimated Tax:</span>
                  <span>$0.00</span>
                </div>
              </div>

              {/* Final Total */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', fontSize: '1.35rem', fontWeight: 700, color: '#143d2f', marginBottom: '1.75rem' }}>
                <span>Estimated Total:</span>
                <span>${finalTotal.toLocaleString()}</span>
              </div>

              {/* Checkout Button */}
              <button
                onClick={() => navigate('/checkout')}
                style={{
                  width: '100%',
                  background: 'var(--color-forest)',
                  color: '#ffffff',
                  border: 'none',
                  padding: '1rem',
                  borderRadius: 6,
                  fontWeight: 700,
                  fontSize: '1rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  boxShadow: '0 4px 14px rgba(20,61,47,0.3)',
                  marginBottom: '1rem'
                }}
              >
                <Lock size={16} />
                <span>Proceed to Secure Checkout</span>
                <ArrowRight size={16} />
              </button>

              <div style={{ textAlign: 'center' }}>
                <Link to="/category/trees" style={{ color: 'var(--color-forest)', fontSize: '0.85rem', fontWeight: 600, textDecoration: 'underline' }}>
                  &larr; Continue Shopping
                </Link>
              </div>

              {/* Trust Badges */}
              <div style={{ marginTop: '1.75rem', paddingTop: '1.25rem', borderTop: '1px solid #eee', display: 'flex', justifyContent: 'space-around', color: '#777', fontSize: '0.78rem' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}><ShieldCheck size={14} /> 256-Bit SSL</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}><ShieldCheck size={14} /> 3-Yr Warranty</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}><Truck size={14} /> Free Returns</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
