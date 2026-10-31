import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { createOrder } from '../lib/supabase';
import { X, CheckCircle, CreditCard, ShieldCheck } from 'lucide-react';

export const CheckoutModal: React.FC = () => {
  const { isCheckoutOpen, closeCheckout, cart, finalTotal, appliedCoupon, discountAmount, clearCart, showToast } = useCart();
  const [name, setName] = useState('Jane Doe');
  const [email, setEmail] = useState('jane.doe@example.com');
  const [address, setAddress] = useState('742 Evergreen Terrace, Springfield, OR 97477');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderConfirmed, setOrderConfirmed] = useState<string | null>(null);

  if (!isCheckoutOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const orderData = {
      customerName: name,
      customerEmail: email,
      shippingAddress: address,
      totalAmount: finalTotal,
      discountCode: appliedCoupon || undefined,
      discountAmount,
      items: cart
    };

    try {
      const res = await createOrder(orderData);
      setIsSubmitting(false);
      setOrderConfirmed(res.orderId || 'BH-98214');
      clearCart();
      showToast('🎉 Order Placed Successfully! Your Balsam Hill Holiday Order is on its way!');
    } catch (err) {
      setIsSubmitting(false);
      showToast('Order placement encountered an error. Please try again.');
    }
  };

  const handleClose = () => {
    setOrderConfirmed(null);
    closeCheckout();
  };

  return (
    <div className="modal-overlay is-open" onClick={handleClose}>
      <div className="modal-window" style={{ maxWidth: 620, padding: '2.5rem' }} onClick={e => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={handleClose} aria-label="Close modal">
          <X size={20} />
        </button>

        {!orderConfirmed ? (
          <div>
            <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 700, color: 'var(--color-forest)', letterSpacing: '0.1em' }}>
                BALSAM HILL
              </span>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', marginTop: '0.25rem', color: 'var(--color-forest-dark)' }}>
                Express Holiday Checkout
              </h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
                Order Total: <strong style={{ color: 'var(--color-forest)' }}>${finalTotal.toLocaleString()}</strong> ({cart.length} item{cart.length > 1 ? 's' : ''})
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, marginBottom: '0.25rem' }}>Full Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  style={{ width: '100%', padding: '0.65rem', border: '1px solid #ccc', borderRadius: 4 }}
                  required
                />
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, marginBottom: '0.25rem' }}>Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  style={{ width: '100%', padding: '0.65rem', border: '1px solid #ccc', borderRadius: 4 }}
                  required
                />
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, marginBottom: '0.25rem' }}>Delivery Address</label>
                <input
                  type="text"
                  value={address}
                  onChange={e => setAddress(e.target.value)}
                  style={{ width: '100%', padding: '0.65rem', border: '1px solid #ccc', borderRadius: 4 }}
                  required
                />
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, marginBottom: '0.25rem' }}>Payment Method</label>
                <div style={{ padding: '0.85rem', border: '1px solid var(--color-gold)', background: 'var(--ambient-bg)', borderRadius: 4, fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <CreditCard size={18} color="var(--color-gold-deep)" />
                  <span>💳 Visa ending in 4242 • Express 1-Click Approved</span>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>
                <ShieldCheck size={16} color="var(--color-forest)" />
                <span>256-Bit Encrypted Secure Checkout • 3-Year Limited Warranty Included</span>
              </div>

              <button
                type="submit"
                className="btn-primary"
                style={{ width: '100%', justifyContent: 'center', padding: '1rem' }}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Confirming Holiday Order...' : `Complete Order — $${finalTotal.toLocaleString()}`}
              </button>
            </form>
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '1.5rem 0' }}>
            <div style={{ color: '#2e7d32', marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}>
              <CheckCircle size={56} />
            </div>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', color: 'var(--color-forest)', marginBottom: '0.5rem' }}>
              Holiday Magic is On The Way!
            </h3>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              Thank you, {name}! Your order <strong>#{orderConfirmed}</strong> has been received and confirmed.
              A confirmation email has been dispatched to <strong>{email}</strong>.
            </p>
            <div style={{ background: 'var(--ambient-bg)', padding: '1.25rem', borderRadius: 8, marginBottom: '2rem', fontSize: '0.875rem' }}>
              <div>📦 <strong>Free Express Shipping:</strong> Estimated Delivery in 2-3 Business Days</div>
              <div>🛡️ <strong>Warranty Activated:</strong> 3-Year Foliage & Light Protection Active</div>
            </div>
            <button className="btn-primary" style={{ width: '100%', justifyContent: 'center' }} onClick={handleClose}>
              Continue Exploring Collections
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
