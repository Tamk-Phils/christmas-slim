import React from 'react';
import { Sparkles, Package, Zap, RotateCw, ShieldCheck, Truck } from 'lucide-react';

export const DiscoverBalsamHill: React.FC = () => {
  const cards = [
    {
      title: 'Stunningly Realistic',
      description: 'From finding the perfect tree clipping for our True Needle® foliage molds, to making sure coloration is just right, we craft nature-identical realism.',
      icon: <Sparkles size={28} />
    },
    {
      title: 'Branch Sample Kit',
      description: 'Experience branch swatches in your living room before purchasing. Full $29 price is credited back towards your artificial Christmas tree.',
      icon: <Package size={28} />
    },
    {
      title: 'Easy Plug® Technology',
      description: 'Light strings connect automatically through the center pole. Simply plug one master cord into the wall socket to illuminate your entire tree.',
      icon: <Zap size={28} />
    },
    {
      title: 'Flip Tree® Innovation',
      description: 'Eliminates heavy lifting. Stored on built-in rolling wheels, the tree base effortlessly flips 180° into place in seconds.',
      icon: <RotateCw size={28} />
    },
    {
      title: '3-Year Limited Warranty',
      description: 'Complete peace of mind covering the tree lights, frame, foliage, hinges, stand, and off-season storage bag for three full holiday seasons.',
      icon: <ShieldCheck size={28} />
    },
    {
      title: 'Free Shipping Everywhere',
      description: 'Fast, secure ground delivery directly to your doorstep on all artificial Christmas trees, wreaths, garlands, and seasonal decor.',
      icon: <Truck size={28} />
    }
  ];

  return (
    <section className="discover-balsam-hill-section" style={{ padding: '5rem 1rem', background: '#faf7f2', borderTop: '1px solid #ebd9c0' }}>
      <div className="container" style={{ maxWidth: '1240px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span style={{ color: 'var(--color-gold-deep)', fontWeight: 600, textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '0.1em' }}>
            Why Choose Us
          </span>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.2rem, 4vw, 3rem)', color: '#143d2f', marginTop: '0.35rem', fontWeight: 600 }}>
            Discover Balsam Hill
          </h2>
          <p style={{ maxWidth: '650px', margin: '0.75rem auto 0', color: '#666', fontSize: '1.05rem', lineHeight: 1.5 }}>
            Our devotion to design and innovation has made Balsam Hill the premier choice for luxury artificial holiday decor worldwide.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
          {cards.map((card, idx) => (
            <div
              key={idx}
              style={{
                background: '#ffffff',
                padding: '2.25rem 2rem',
                borderRadius: 8,
                border: '1px solid #e9e3d8',
                boxShadow: '0 4px 16px rgba(0,0,0,0.04)',
                display: 'flex',
                gap: '1.25rem',
                alignItems: 'flex-start'
              }}
            >
              <div
                style={{
                  color: 'var(--color-forest)',
                  background: 'rgba(20,61,47,0.08)',
                  padding: '0.75rem',
                  borderRadius: 8,
                  flexShrink: 0
                }}
              >
                {card.icon}
              </div>
              <div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.35rem', color: '#143d2f', margin: '0 0 0.5rem', fontWeight: 600 }}>
                  {card.title}
                </h3>
                <p style={{ color: '#555', fontSize: '0.92rem', lineHeight: 1.6, margin: 0 }}>
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
