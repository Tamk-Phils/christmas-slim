import React from 'react';
import { ShieldCheck, ArrowRight } from 'lucide-react';

export const WarrantySpotlight: React.FC = () => {
  return (
    <section className="warranty-spotlight" style={{ background: '#133f32', color: '#ffffff', padding: '3.5rem 1rem', textAlign: 'center' }}>
      <div className="container" style={{ maxWidth: '850px', margin: '0 auto' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 56, height: 56, borderRadius: '50%', background: 'rgba(255,255,255,0.1)', color: '#fae19c', marginBottom: '1rem' }}>
          <ShieldCheck size={32} />
        </div>
        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 3.5vw, 2.7rem)', fontWeight: 600, margin: '0 0 1rem' }}>
          The Best Warranty
        </h2>
        <p style={{ fontSize: '1.1rem', opacity: 0.92, lineHeight: 1.6, maxWidth: '700px', margin: '0 auto 1.75rem' }}>
          Enjoy peace of mind with our three-year limited warranty for your tree’s lights (excluding burned-out bulbs), frame, foliage, <span style={{ whiteSpace: 'nowrap' }}>hinges, and stand.</span>
        </p>
        <a
          href="#product-catalog"
          style={{
            background: 'transparent',
            color: '#ffffff',
            border: '2px solid #ffffff',
            padding: '0.75rem 1.75rem',
            borderRadius: 6,
            fontWeight: 700,
            fontSize: '0.95rem',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            textDecoration: 'none',
            transition: 'all 0.2s ease'
          }}
        >
          <span>Shop Trees with 3-Year Warranty</span>
          <ArrowRight size={16} />
        </a>
      </div>
    </section>
  );
};
