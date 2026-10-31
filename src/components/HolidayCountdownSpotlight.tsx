import React from 'react';
import { Gift, Calendar, ArrowRight } from 'lucide-react';

export const HolidayCountdownSpotlight: React.FC = () => {
  return (
    <section className="holiday-countdown-spotlight" style={{ background: '#f6f1e9', padding: '3.5rem 1rem', borderTop: '1px solid #ebd9c0', borderBottom: '1px solid #ebd9c0' }}>
      <div className="container" style={{ maxWidth: '960px', margin: '0 auto', textAlign: 'center' }}>
        <span style={{ color: 'var(--color-berry)', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.12em' }}>
          Season's Greetings
        </span>
        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', color: '#143d2f', margin: '0.35rem 0 0.75rem', fontWeight: 600 }}>
          <span style={{ color: 'var(--color-berry)' }}>7</span> Weeks 'Til Christmas
        </h2>
        <p style={{ fontSize: '1.2rem', color: '#444', margin: '0 auto 1.75rem', maxWidth: '600px' }}>
          Get gifting: <span style={{ whiteSpace: 'nowrap' }}>Make a list, check</span> <span style={{ whiteSpace: 'nowrap' }}>it twice.</span>
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
          <a
            href="#product-catalog"
            style={{
              background: 'var(--color-forest)',
              color: '#ffffff',
              padding: '0.8rem 1.6rem',
              borderRadius: 6,
              fontWeight: 700,
              fontSize: '0.95rem',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              boxShadow: '0 4px 12px rgba(20,61,47,0.2)'
            }}
          >
            <Gift size={17} />
            <span>Shop Gifts</span>
          </a>

          <a
            href="#product-catalog"
            style={{
              background: '#ffffff',
              color: 'var(--color-forest)',
              border: '2px solid var(--color-forest)',
              padding: '0.8rem 1.6rem',
              borderRadius: 6,
              fontWeight: 700,
              fontSize: '0.95rem',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
          >
            <Calendar size={17} />
            <span>Shop Advent Calendars</span>
            <ArrowRight size={15} />
          </a>
        </div>
      </div>
    </section>
  );
};
