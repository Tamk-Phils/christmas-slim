import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export const FreshWreathsSpotlight: React.FC = () => {
  return (
    <section className="fresh-wreaths-spotlight" style={{ position: 'relative', minHeight: '480px', display: 'flex', alignItems: 'center', background: '#0e2a20', overflow: 'hidden' }}>
      <img
        src="/assets/images/spotlight-fresh-hero.webp"
        alt="Fresh Wreaths & Garlands"
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.65 }}
      />
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(90deg, rgba(14,42,32,0.92) 0%, rgba(14,42,32,0.6) 60%, rgba(14,42,32,0.2) 100%)' }} />

      <div className="container" style={{ position: 'relative', zIndex: 2, padding: '4rem 1rem', maxWidth: '1240px', margin: '0 auto' }}>
        <div style={{ maxWidth: '620px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#fae19c', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '0.75rem' }}>
            <Sparkles size={15} />
            <span>Foliage &amp; Greenery Collection</span>
          </div>

          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.4rem, 4.5vw, 3.4rem)', color: '#ffffff', margin: '0 0 1rem', lineHeight: 1.15, fontWeight: 600 }}>
            Fresh Wreaths &amp; Garlands
          </h2>

          <p style={{ color: '#e0ece6', fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '2rem' }}>
            Handcrafted with the same botanical attention to detail as our signature trees. From welcoming front-door wreaths adorned with winter berries to fireplace mantel garlands with warm LED micro-lights.
          </p>

          <a
            href="#product-catalog"
            style={{
              background: '#ffffff',
              color: 'var(--color-forest-dark)',
              padding: '0.9rem 1.8rem',
              borderRadius: 6,
              fontWeight: 700,
              fontSize: '1rem',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
              transition: 'transform 0.2s ease'
            }}
          >
            <span>Shop Wreaths &amp; Greenery</span>
            <ArrowRight size={17} />
          </a>
        </div>
      </div>
    </section>
  );
};
