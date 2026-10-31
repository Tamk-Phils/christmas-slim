import React from 'react';
import { useCart } from '../context/CartContext';
import { Copy, ArrowRight, Tag } from 'lucide-react';

export const SavingsSpotlight: React.FC = () => {
  const { showToast } = useCart();

  const handleCopyCode = () => {
    navigator.clipboard.writeText('HURRY50');
    showToast('Promo Code HURRY50 copied! ($50 Off Orders $750+) 🎄');
  };

  return (
    <section className="savings-spotlight" style={{ background: '#5c061e', color: '#ffffff', padding: '2.5rem 1rem', textAlign: 'center' }}>
      <div className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(255,255,255,0.15)', padding: '0.25rem 0.75rem', borderRadius: 999, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.75rem' }}>
          <Tag size={13} />
          <span>Limited-Time Holiday Event</span>
        </div>
        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', fontWeight: 600, margin: '0 0 0.5rem', letterSpacing: '0.01em' }}>
          Stack the Savings: <span style={{ whiteSpace: 'nowrap' }}>Limited-Time Offer</span>
        </h2>
        <p style={{ fontSize: '1.15rem', opacity: 0.95, margin: '0 0 1.25rem' }}>
          Extra $50 off <strong>orders $750+</strong> with guaranteed holiday delivery.
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <button
            onClick={handleCopyCode}
            style={{
              background: 'transparent',
              color: '#ffffff',
              border: '2px dashed #ffffff',
              borderRadius: 6,
              padding: '0.65rem 1.25rem',
              fontWeight: 700,
              fontSize: '1rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
            title="Click to copy HURRY50"
          >
            <span>Use Code:</span>
            <span style={{ color: '#fae19c', textDecoration: 'underline' }}>HURRY50</span>
            <Copy size={16} />
          </button>

          <a
            href="#product-catalog"
            style={{
              background: '#ffffff',
              color: '#5c061e',
              padding: '0.75rem 1.6rem',
              borderRadius: 6,
              fontWeight: 700,
              fontSize: '0.95rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              textDecoration: 'none',
              boxShadow: '0 4px 14px rgba(0,0,0,0.2)'
            }}
          >
            <span>Shop Best-Selling Trees</span>
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
