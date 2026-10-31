import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { X, ShieldCheck } from 'lucide-react';

export const QuickViewModal: React.FC = () => {
  const { quickViewProduct, closeQuickView, addToCart } = useCart();
  const [selectedHeightIndex, setSelectedHeightIndex] = useState(0);

  if (!quickViewProduct) return null;

  const currentVariant = quickViewProduct.heights[selectedHeightIndex] || quickViewProduct.heights[0];

  return (
    <div className="modal-overlay is-open" onClick={closeQuickView}>
      <div className="modal-window" onClick={e => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={closeQuickView} aria-label="Close modal">
          <X size={20} />
        </button>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem', padding: '2.5rem' }}>
          <div>
            <img
              src={quickViewProduct.image}
              alt={quickViewProduct.name}
              style={{ width: '100%', height: '420px', objectFit: 'cover', borderRadius: 'var(--radius-md)' }}
            />
          </div>

          <div>
            <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-gold-deep)', textTransform: 'uppercase' }}>
              {quickViewProduct.category.toUpperCase()} • {quickViewProduct.badge}
            </span>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', color: 'var(--color-forest)', margin: '0.5rem 0' }}>
              {quickViewProduct.name}
            </h2>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', color: '#f59e0b' }}>
              ★★★★★ <span style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>
                {quickViewProduct.rating} ({quickViewProduct.reviewsCount} verified reviews)
              </span>
            </div>

            <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              {quickViewProduct.description}
            </p>

            <div style={{ marginBottom: '1.5rem' }}>
              <strong style={{ fontSize: '0.85rem' }}>Available Heights & Sizing:</strong>
              <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem', flexWrap: 'wrap' }}>
                {quickViewProduct.heights.map((h, i) => (
                  <button
                    key={h.height}
                    className={`height-chip ${i === selectedHeightIndex ? 'is-selected' : ''}`}
                    onClick={() => setSelectedHeightIndex(i)}
                  >
                    {h.height}
                  </button>
                ))}
              </div>
            </div>

            <div style={{ background: 'var(--ambient-bg)', padding: '1rem', borderRadius: 6, marginBottom: '1.5rem', fontSize: '0.875rem', border: '1px solid var(--color-cream-border)' }}>
              <div><strong>Foliage Realism:</strong> {quickViewProduct.realism}</div>
              <div><strong>Light System:</strong> {quickViewProduct.lightStyle}</div>
              <div><strong>Branch Architecture:</strong> {currentVariant.tips} & {currentVariant.lights}</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: 'var(--color-forest)', marginTop: '0.25rem', fontWeight: 600 }}>
                <ShieldCheck size={16} /> 3-Year Limited Foliage & Light Warranty
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem', marginBottom: '1.5rem' }}>
              <span style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--color-forest)' }}>
                ${currentVariant.price}
              </span>
              <span style={{ fontSize: '1.25rem', textDecoration: 'line-through', color: 'var(--color-text-light)' }}>
                ${currentVariant.originalPrice}
              </span>
              <span style={{ background: 'var(--color-gold)', color: 'var(--color-forest-dark)', fontWeight: 700, padding: '0.2rem 0.6rem', borderRadius: '4px', fontSize: '0.75rem' }}>
                IN STOCK
              </span>
            </div>

            <button
              className="btn-primary"
              style={{ width: '100%', justifyContent: 'center' }}
              onClick={() => {
                addToCart(quickViewProduct, selectedHeightIndex);
                closeQuickView();
              }}
            >
              Add To Cart - ${currentVariant.price}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
