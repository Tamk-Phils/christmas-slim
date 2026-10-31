import React from 'react';
import type { Product } from '../types';
import { useCart } from '../context/CartContext';
import { Check, ShoppingBag, Eye, Star } from 'lucide-react';

interface BalsamFirSpotlightProps {
  products: Product[];
}

export const BalsamFirSpotlight: React.FC<BalsamFirSpotlightProps> = ({ products }) => {
  const { openQuickView, addToCart } = useCart();
  const balsamFir = products.find(p => p.id === 'bh-balsam-fir') || products[0];

  if (!balsamFir) return null;

  return (
    <section className="tree-spotlight-section" style={{ padding: '4.5rem 1rem', background: '#ffffff', borderTop: '1px solid #eaeaea', borderBottom: '1px solid #eaeaea' }}>
      <div className="container" style={{ maxWidth: '1240px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '2rem', alignItems: 'center' }}>
        {/* Real Tree Image */}
        <div style={{ position: 'relative', borderRadius: 12, overflow: 'hidden', boxShadow: '0 12px 36px rgba(0,0,0,0.08)' }}>
          <img
            src={balsamFir.image}
            alt="BH Balsam Fir®"
            style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
          />
          <div style={{ position: 'absolute', top: '1.25rem', left: '1.25rem', background: 'var(--color-forest)', color: '#fff', padding: '0.4rem 0.85rem', borderRadius: 4, fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            Balsam Hill® Namesake Tree
          </div>
        </div>

        {/* Product Details & Actions */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#c59b4c', marginBottom: '0.5rem' }}>
            <div style={{ display: 'flex' }}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill="#c59b4c" color="#c59b4c" />
              ))}
            </div>
            <span style={{ fontSize: '0.85rem', color: '#666', fontWeight: 600 }}>4.9 / 5.0 (2,480 Verified Reviews)</span>
          </div>

          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.2rem, 4vw, 3rem)', color: '#143d2f', margin: '0 0 0.5rem', fontWeight: 600 }}>
            BH Balsam Fir<sup>®</sup>
          </h2>

          <div style={{ fontSize: '1.4rem', color: '#143d2f', fontWeight: 700, marginBottom: '1.25rem' }}>
            Starting at <span style={{ color: '#891b29' }}>$449</span>
            <span style={{ fontSize: '0.9rem', color: '#666', fontWeight: 400, marginLeft: '0.5rem' }}>
              (Regular: $799 • Free Ground Shipping)
            </span>
          </div>

          <p style={{ fontSize: '1.05rem', color: '#444', lineHeight: 1.6, marginBottom: '1.5rem' }}>
            Our namesake tree is modeled after real balsam firs from a tree farm in Maine. Crafted with patented True Needle® foliage to capture the lush branch tips, upward-sweeping silhouette, and semi-gloss green needles of nature.
          </p>

          <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', color: '#333', fontSize: '0.95rem' }}>
              <span style={{ background: 'rgba(20,61,47,0.1)', color: '#143d2f', borderRadius: '50%', width: 22, height: 22, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Check size={14} />
              </span>
              <span><strong>True Needle® Technology:</strong> 82% PE foliage molded directly from fresh balsam fir boughs</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', color: '#333', fontSize: '0.95rem' }}>
              <span style={{ background: 'rgba(20,61,47,0.1)', color: '#143d2f', borderRadius: '50%', width: 22, height: 22, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Check size={14} />
              </span>
              <span><strong>Candlelight® Clear LED:</strong> Pre-strung by hand with warm 2700K micro-glow bulbs</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', color: '#333', fontSize: '0.95rem' }}>
              <span style={{ background: 'rgba(20,61,47,0.1)', color: '#143d2f', borderRadius: '50%', width: 22, height: 22, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Check size={14} />
              </span>
              <span><strong>3-Year Limited Warranty:</strong> Includes frame, lights, hinges, stand, and storage bag</span>
            </li>
          </ul>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <button
              onClick={() => addToCart(balsamFir, 1, 1)}
              style={{
                background: 'var(--color-forest)',
                color: '#fff',
                padding: '0.85rem 1.8rem',
                borderRadius: 6,
                fontWeight: 700,
                fontSize: '1rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 4px 14px rgba(20,61,47,0.3)',
                transition: 'background 0.2s'
              }}
            >
              <ShoppingBag size={18} />
              <span>Add 7.5ft Tree to Bag</span>
            </button>

            <button
              onClick={() => openQuickView(balsamFir)}
              style={{
                background: 'transparent',
                color: '#143d2f',
                padding: '0.85rem 1.5rem',
                borderRadius: 6,
                fontWeight: 600,
                fontSize: '1rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                border: '2px solid #143d2f',
                cursor: 'pointer'
              }}
            >
              <Eye size={18} />
              <span>Quick View Sizes</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
