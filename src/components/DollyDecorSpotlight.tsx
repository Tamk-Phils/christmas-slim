import React from 'react';
import { ArrowRight, BookOpen } from 'lucide-react';

export const DollyDecorSpotlight: React.FC = () => {
  return (
    <section className="dolly-spotlight" style={{ background: '#91160c', color: '#ffffff', padding: '4.5rem 1rem' }}>
      <div className="container" style={{ maxWidth: '1240px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '2rem', alignItems: 'center' }}>
        {/* Real Spotlight Photography */}
        <div style={{ borderRadius: 12, overflow: 'hidden', boxShadow: '0 12px 36px rgba(0,0,0,0.3)' }}>
          <img
            src="/assets/images/spotlight-dolly-decor.webp"
            alt="Dolly Parton Holiday Decor Collaboration"
            style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
          />
        </div>

        {/* Text and CTA */}
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(255,255,255,0.15)', padding: '0.25rem 0.75rem', borderRadius: 999, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.75rem' }}>
            <BookOpen size={14} />
            <span>Celebrity Designer Showcase</span>
          </div>

          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', fontWeight: 600, margin: '0 0 1rem', lineHeight: 1.15 }}>
            Good Lookin’ Décor
          </h2>

          <p style={{ fontSize: '1.1rem', opacity: 0.95, lineHeight: 1.6, marginBottom: '2rem' }}>
            We've got a big appetite for celebrating the seasons, and Dolly does too! So, we teamed up with her and sister Rachel Parton George to spice up their <em>New York Times</em> best-selling cookbook with looks you'll love.
          </p>

          <a
            href="#product-catalog"
            style={{
              background: '#ffffff',
              color: '#91160c',
              padding: '0.85rem 1.8rem',
              borderRadius: 6,
              fontWeight: 700,
              fontSize: '1rem',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              boxShadow: '0 4px 14px rgba(0,0,0,0.2)'
            }}
          >
            <span>Discover &amp; Shop Now</span>
            <ArrowRight size={17} />
          </a>
        </div>
      </div>
    </section>
  );
};
