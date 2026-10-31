import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { createOrder } from '../lib/supabase';
import { Lock, ShieldCheck, CheckCircle2, CreditCard, ChevronRight } from 'lucide-react';

export const CheckoutPage: React.FC = () => {
  const navigate = useNavigate();
  const { cart, subtotal, appliedCoupon, discountAmount, finalTotal, clearCart } = useCart();

  const [formData, setFormData] = useState({
    firstName: 'Sarah',
    lastName: 'Mitchell',
    email: 'sarah.mitchell@example.com',
    phone: '(555) 349-8201',
    address: '742 Evergreen Terrace',
    suite: '',
    city: 'Springfield',
    state: 'OR',
    zip: '97477',
    cardNumber: '•••• •••• •••• 4242',
    cardExp: '12/28',
    cardCvc: '888',
    paymentMethod: 'card'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [completedOrder, setCompletedOrder] = useState<any>(null);

  if (cart.length === 0 && !completedOrder) {
    return (
      <div style={{ background: '#faf7f2', minHeight: '60vh', padding: '5rem 1rem', textAlign: 'center' }}>
        <h2>Your cart is empty</h2>
        <p style={{ color: '#666', marginBottom: '1.5rem' }}>Please add an item to your bag before checking out.</p>
        <Link to="/category/trees" style={{ background: 'var(--color-forest)', color: '#fff', textDecoration: 'none', padding: '0.75rem 1.5rem', borderRadius: 4, fontWeight: 700 }}>
          Browse Trees
        </Link>
      </div>
    );
  }

  const handlePlaceOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const orderPayload = {
        customerName: `${formData.firstName} ${formData.lastName}`,
        customerEmail: formData.email,
        shippingAddress: `${formData.address}${formData.suite ? ', ' + formData.suite : ''}, ${formData.city}, ${formData.state} ${formData.zip}`,
        totalAmount: finalTotal,
        discountCode: appliedCoupon || undefined,
        discountAmount: discountAmount || 0,
        items: cart,
        status: 'confirmed'
      };

      const result = await createOrder(orderPayload);
      setCompletedOrder({
        orderNumber: result.orderId || `BH-${Math.floor(100000 + Math.random() * 900000)}`,
        ...orderPayload
      });
      clearCart();
    } catch (err) {
      console.error('Order creation error:', err);
      // Fallback order receipt
      setCompletedOrder({
        orderNumber: `BH-${Math.floor(100000 + Math.random() * 900000)}`,
        customerName: `${formData.firstName} ${formData.lastName}`,
        customerEmail: formData.email,
        shippingAddress: `${formData.address}, ${formData.city}, ${formData.state} ${formData.zip}`,
        totalAmount: finalTotal,
        items: cart
      });
      clearCart();
    } finally {
      setIsSubmitting(false);
    }
  };

  // Order Confirmation View
  if (completedOrder) {
    return (
      <div style={{ background: '#faf7f2', minHeight: '100vh', padding: '4rem 1rem' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto', background: '#ffffff', borderRadius: 12, border: '1px solid #ebd9c0', padding: '3.5rem 2.5rem', boxShadow: '0 8px 30px rgba(0,0,0,0.06)' }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 64, height: 64, borderRadius: '50%', background: '#e8f5e9', color: '#2e7d32', marginBottom: '1rem' }}>
              <CheckCircle2 size={38} />
            </div>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', color: '#143d2f', margin: '0 0 0.5rem' }}>
              Thank You For Your Order!
            </h1>
            <p style={{ color: '#555', fontSize: '1.05rem', margin: 0 }}>
              Your order confirmation has been sent to <strong>{completedOrder.customerEmail}</strong>.
            </p>
          </div>

          <div style={{ background: '#faf7f2', borderRadius: 8, padding: '1.5rem', marginBottom: '2rem', border: '1px solid #ebd9c0' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem', fontSize: '0.92rem' }}>
              <span style={{ color: '#666' }}>Order Number:</span>
              <strong style={{ color: '#143d2f' }}>{completedOrder.orderNumber}</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem', fontSize: '0.92rem' }}>
              <span style={{ color: '#666' }}>Estimated Delivery:</span>
              <strong style={{ color: '#2e7d32' }}>In 2 to 4 Business Days</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.92rem' }}>
              <span style={{ color: '#666' }}>Shipping Address:</span>
              <span style={{ fontWeight: 600, textAlign: 'right', maxWidth: '300px' }}>{completedOrder.shippingAddress}</span>
            </div>
          </div>

          <div style={{ marginBottom: '2.5rem' }}>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.3rem', color: '#143d2f', marginBottom: '1rem', borderBottom: '1px solid #eee', paddingBottom: '0.5rem' }}>
              Items In This Shipment
            </h3>
            {completedOrder.items.map((it: any, i: number) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.75rem 0', borderBottom: '1px solid #eee' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <img src={it.image} alt={it.name} style={{ width: 48, height: 48, borderRadius: 4, objectFit: 'cover' }} />
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '0.9rem', color: '#143d2f' }}>{it.name}</div>
                    <div style={{ fontSize: '0.78rem', color: '#666' }}>Qty: {it.quantity} • {it.height}</div>
                  </div>
                </div>
                <div style={{ fontWeight: 700, color: '#143d2f' }}>
                  ${(it.price * it.quantity).toLocaleString()}
                </div>
              </div>
            ))}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginTop: '1rem', fontSize: '1.2rem', fontWeight: 700, color: '#143d2f' }}>
              <span>Total Paid:</span>
              <span>${completedOrder.totalAmount.toLocaleString()}</span>
            </div>
          </div>

          <div style={{ textAlign: 'center' }}>
            <button
              onClick={() => navigate('/')}
              style={{
                background: 'var(--color-forest)',
                color: '#fff',
                border: 'none',
                padding: '0.85rem 2.25rem',
                borderRadius: 4,
                fontWeight: 700,
                fontSize: '1rem',
                cursor: 'pointer'
              }}
            >
              Return to Homepage
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout-page" style={{ background: '#faf7f2', minHeight: '100vh', paddingBottom: '6rem' }}>
      {/* Breadcrumbs */}
      <div style={{ background: '#ffffff', borderBottom: '1px solid #eee', padding: '0.85rem 1rem' }}>
        <div className="container" style={{ maxWidth: '1240px', margin: '0 auto', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: '#666' }}>
          <Link to="/" style={{ color: '#444', textDecoration: 'none' }}>Home</Link>
          <ChevronRight size={13} />
          <Link to="/cart" style={{ color: '#444', textDecoration: 'none' }}>Bag</Link>
          <ChevronRight size={13} />
          <span style={{ color: '#143d2f', fontWeight: 600 }}>Express Checkout</span>
        </div>
      </div>

      <div className="container" style={{ maxWidth: '1100px', margin: '3rem auto 0', padding: '0 1rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '2rem', alignItems: 'start' }}>
          {/* Checkout Form */}
          <form onSubmit={handlePlaceOrder} style={{ background: '#ffffff', borderRadius: 8, border: '1px solid #ebd9c0', padding: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-forest)', marginBottom: '1.5rem', borderBottom: '1px solid #eee', paddingBottom: '0.75rem' }}>
              <Lock size={18} />
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', margin: 0 }}>
                1. Shipping Address &amp; Contact
              </h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, marginBottom: '0.25rem' }}>First Name</label>
                <input
                  type="text"
                  required
                  value={formData.firstName}
                  onChange={e => setFormData({ ...formData, firstName: e.target.value })}
                  style={{ width: '100%', padding: '0.65rem', border: '1px solid #ccc', borderRadius: 4 }}
                />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, marginBottom: '0.25rem' }}>Last Name</label>
                <input
                  type="text"
                  required
                  value={formData.lastName}
                  onChange={e => setFormData({ ...formData, lastName: e.target.value })}
                  style={{ width: '100%', padding: '0.65rem', border: '1px solid #ccc', borderRadius: 4 }}
                />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, marginBottom: '0.25rem' }}>Email Address</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                  style={{ width: '100%', padding: '0.65rem', border: '1px solid #ccc', borderRadius: 4 }}
                />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, marginBottom: '0.25rem' }}>Phone (for delivery updates)</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={e => setFormData({ ...formData, phone: e.target.value })}
                  style={{ width: '100%', padding: '0.65rem', border: '1px solid #ccc', borderRadius: 4 }}
                />
              </div>
            </div>

            <div style={{ marginBottom: '1rem' }}>
              <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, marginBottom: '0.25rem' }}>Street Address</label>
              <input
                type="text"
                required
                value={formData.address}
                onChange={e => setFormData({ ...formData, address: e.target.value })}
                style={{ width: '100%', padding: '0.65rem', border: '1px solid #ccc', borderRadius: 4 }}
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '1rem', marginBottom: '2.5rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, marginBottom: '0.25rem' }}>City</label>
                <input
                  type="text"
                  required
                  value={formData.city}
                  onChange={e => setFormData({ ...formData, city: e.target.value })}
                  style={{ width: '100%', padding: '0.65rem', border: '1px solid #ccc', borderRadius: 4 }}
                />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, marginBottom: '0.25rem' }}>State</label>
                <input
                  type="text"
                  required
                  value={formData.state}
                  onChange={e => setFormData({ ...formData, state: e.target.value })}
                  style={{ width: '100%', padding: '0.65rem', border: '1px solid #ccc', borderRadius: 4 }}
                />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, marginBottom: '0.25rem' }}>Zip Code</label>
                <input
                  type="text"
                  required
                  value={formData.zip}
                  onChange={e => setFormData({ ...formData, zip: e.target.value })}
                  style={{ width: '100%', padding: '0.65rem', border: '1px solid #ccc', borderRadius: 4 }}
                />
              </div>
            </div>

            {/* Payment Section */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-forest)', marginBottom: '1.5rem', borderBottom: '1px solid #eee', paddingBottom: '0.75rem' }}>
              <CreditCard size={18} />
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', margin: 0 }}>
                2. Secure Payment
              </h2>
            </div>

            <div style={{ background: '#faf7f2', padding: '1.25rem', borderRadius: 6, border: '1px solid #ddd', marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                <input type="radio" checked readOnly style={{ accentColor: 'var(--color-forest)' }} />
                <span style={{ fontWeight: 700, fontSize: '0.9rem', color: '#143d2f' }}>Credit / Debit Card (256-Bit SSL Encrypted)</span>
              </div>
              <div style={{ marginBottom: '0.75rem' }}>
                <label style={{ display: 'block', fontSize: '0.78rem', color: '#666', marginBottom: '0.2rem' }}>Card Number</label>
                <input
                  type="text"
                  value={formData.cardNumber}
                  onChange={e => setFormData({ ...formData, cardNumber: e.target.value })}
                  style={{ width: '100%', padding: '0.5rem', border: '1px solid #ccc', borderRadius: 4, background: '#fff' }}
                />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', color: '#666', marginBottom: '0.2rem' }}>Expiration</label>
                  <input
                    type="text"
                    value={formData.cardExp}
                    onChange={e => setFormData({ ...formData, cardExp: e.target.value })}
                    style={{ width: '100%', padding: '0.5rem', border: '1px solid #ccc', borderRadius: 4, background: '#fff' }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', color: '#666', marginBottom: '0.2rem' }}>CVC Security Code</label>
                  <input
                    type="text"
                    value={formData.cardCvc}
                    onChange={e => setFormData({ ...formData, cardCvc: e.target.value })}
                    style={{ width: '100%', padding: '0.5rem', border: '1px solid #ccc', borderRadius: 4, background: '#fff' }}
                  />
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              style={{
                width: '100%',
                background: 'var(--color-forest)',
                color: '#ffffff',
                border: 'none',
                padding: '1rem',
                borderRadius: 6,
                fontWeight: 700,
                fontSize: '1.05rem',
                cursor: isSubmitting ? 'not-allowed' : 'pointer',
                boxShadow: '0 4px 14px rgba(20,61,47,0.3)',
                opacity: isSubmitting ? 0.7 : 1
              }}
            >
              {isSubmitting ? 'Processing Secure Order...' : `Place Order ($${finalTotal.toLocaleString()})`}
            </button>
          </form>

          {/* Right Summary Sidebar */}
          <div style={{ background: '#ffffff', borderRadius: 8, border: '1px solid #ebd9c0', padding: '2rem' }}>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: '#143d2f', margin: '0 0 1rem', borderBottom: '1px solid #eee', paddingBottom: '0.5rem' }}>
              Order Review ({cart.length} Products)
            </h3>

            <div style={{ maxHeight: '300px', overflowY: 'auto', marginBottom: '1.5rem' }}>
              {cart.map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '0.75rem', paddingBottom: '0.75rem', borderBottom: '1px solid #f0f0f0' }}>
                  <img src={item.image} alt={item.name} style={{ width: 50, height: 50, borderRadius: 4, objectFit: 'cover' }} />
                  <div style={{ flexGrow: 1 }}>
                    <div style={{ fontWeight: 700, fontSize: '0.85rem', color: '#143d2f' }}>{item.name}</div>
                    <div style={{ fontSize: '0.78rem', color: '#666' }}>Size: {item.height} • Qty: {item.quantity}</div>
                  </div>
                  <div style={{ fontWeight: 700, fontSize: '0.9rem', color: '#143d2f' }}>
                    ${(item.price * item.quantity).toLocaleString()}
                  </div>
                </div>
              ))}
            </div>

            <div style={{ borderTop: '1px solid #eee', paddingTop: '1rem', fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.25rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', color: '#555' }}>
                <span>Subtotal:</span>
                <span>${subtotal.toLocaleString()}</span>
              </div>
              {appliedCoupon && (
                <div style={{ display: 'flex', justifyContent: 'space-between', color: '#2e7d32', fontWeight: 600 }}>
                  <span>Discount ({appliedCoupon}):</span>
                  <span>-${discountAmount}</span>
                </div>
              )}
              <div style={{ display: 'flex', justifyContent: 'space-between', color: '#555' }}>
                <span>Standard Ground Shipping:</span>
                <span style={{ color: '#2e7d32', fontWeight: 600 }}>FREE</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', color: '#555' }}>
                <span>Estimated Sales Tax:</span>
                <span>$0.00</span>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', fontSize: '1.35rem', fontWeight: 700, color: '#143d2f', borderTop: '2px solid #143d2f', paddingTop: '0.75rem' }}>
              <span>Total:</span>
              <span>${finalTotal.toLocaleString()}</span>
            </div>

            <div style={{ marginTop: '1.75rem', padding: '1rem', background: '#faf7f2', borderRadius: 6, fontSize: '0.8rem', color: '#666' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontWeight: 700, color: '#143d2f', marginBottom: '0.25rem' }}>
                <ShieldCheck size={16} /> 100% Satisfaction Guarantee
              </div>
              Free ground shipping on every order. Backed by our signature 3-Year Limited Warranty and 30-day in-home return policy.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
