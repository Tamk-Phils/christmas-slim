import React from 'react';
import { ArrowRight } from 'lucide-react';

export const WhatSetsUsApart: React.FC = () => {
  const pillars = [
    {
      id: 'quality',
      title: 'Committed to Quality',
      description: 'We offer the widest selection of premium, realistic trees—handcrafted with care and designed to last through decades of cherished holiday memories.',
      image: '/assets/images/tile-committed-quality.webp',
      linkText: 'Find Your Favorite',
      linkUrl: '#product-catalog'
    },
    {
      id: 'looks-real',
      title: 'Looks So Real',
      description: 'Enjoy the beautiful look of a real tree with needles that are true to nature. Cast from real evergreen branches for unmatched botanical authenticity.',
      image: '/assets/images/tile-looks-real.webp',
      linkText: 'Browse Most Realistic Trees',
      linkUrl: '#product-catalog'
    },
    {
      id: 'pre-strung',
      title: 'Pre-strung Lights',
      description: 'Make setting up even easier with professionally hand-strung lighting that’s pre-wired and perfectly spaced—no messy tangles or visible wires.',
      image: '/assets/images/tile-prestrung-lights.webp',
      linkText: 'See Our Pre-lit Trees',
      linkUrl: '#product-catalog'
    }
  ];

  return (
    <section className="what-sets-us-apart-section" style={{ padding: '4.5rem 1rem', background: '#ffffff' }}>
      <div className="container" style={{ maxWidth: '1240px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span style={{ color: 'var(--color-gold-deep)', fontWeight: 600, textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '0.1em' }}>
            The Balsam Hill Difference
          </span>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', color: '#143d2f', marginTop: '0.4rem', fontWeight: 600 }}>
            What Sets Us Apart
          </h2>
          <p style={{ maxWidth: '650px', margin: '0.75rem auto 0', color: '#666', fontSize: '1rem', lineHeight: 1.5 }}>
            Every detail is designed to bring the beauty of nature into your home without any of the hassle.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '1.5rem' }}>
          {pillars.map(p => (
            <div
              key={p.id}
              style={{
                display: 'flex',
                flexDirection: 'column',
                background: '#faf7f2',
                borderRadius: 8,
                overflow: 'hidden',
                border: '1px solid #ebd9c0'
              }}
            >
              <div style={{ position: 'relative', overflow: 'hidden', aspectRatio: '4 / 3' }}>
                <img
                  src={p.image}
                  alt={p.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div style={{ padding: '2rem 1.75rem', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: '#143d2f', margin: '0 0 0.65rem' }}>
                    {p.title}
                  </h3>
                  <p style={{ color: '#555', fontSize: '0.95rem', lineHeight: 1.6, margin: '0 0 1.5rem' }}>
                    {p.description}
                  </p>
                </div>
                <div>
                  <a
                    href={p.linkUrl}
                    style={{
                      color: 'var(--color-forest)',
                      fontWeight: 700,
                      fontSize: '0.9rem',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      textDecoration: 'none'
                    }}
                  >
                    <span>{p.linkText}</span>
                    <ArrowRight size={15} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
