import React from 'react';
import { ArrowRight } from 'lucide-react';

export const FestiveTiles: React.FC = () => {
  const tiles = [
    {
      id: 'tree-shop',
      title: 'The Tree Shop',
      subtitle: 'Most realistic artificial Christmas trees in all silhouettes',
      image: '/assets/images/tile-tree-shop.webp',
      link: '#product-catalog'
    },
    {
      id: 'wreath-shop',
      title: 'The Wreath Shop',
      subtitle: 'Lush greenery, wreaths, and garlands crafted with True Needle® foliage',
      image: '/assets/images/tile-wreath-shop.webp',
      link: '#product-catalog'
    },
    {
      id: 'ornaments-shop',
      title: 'The Ornaments Shop',
      subtitle: 'Hand-blown glass ornaments, artisan tree skirts, and finials',
      image: '/assets/images/tile-ornaments-shop.webp',
      link: '#product-catalog'
    }
  ];

  return (
    <section className="festive-tiles-section" style={{ padding: '4rem 1rem', background: '#f5f5f5' }}>
      <div className="container" style={{ maxWidth: '1240px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <span style={{ color: 'var(--color-gold-deep)', fontWeight: 600, textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '0.1em' }}>
            Holiday Collections
          </span>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', color: '#222', marginTop: '0.4rem', fontWeight: 600 }}>
            Go Ahead, Get Festive
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '1.5rem' }}>
          {tiles.map(tile => (
            <a
              key={tile.id}
              href={tile.link}
              className="festive-tile-card"
              style={{
                textDecoration: 'none',
                background: '#ffffff',
                borderRadius: 8,
                overflow: 'hidden',
                boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <div style={{ position: 'relative', overflow: 'hidden', aspectRatio: '1 / 1' }}>
                <img
                  src={tile.image}
                  alt={tile.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                  className="tile-img-hover"
                />
              </div>
              <div style={{ padding: '1.5rem', textAlign: 'center', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.45rem', color: '#143d2f', margin: '0 0 0.4rem' }}>
                    {tile.title}
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: '#666', margin: '0 0 1.25rem', lineHeight: 1.4 }}>
                    {tile.subtitle}
                  </p>
                </div>
                <span style={{ color: '#143d2f', fontWeight: 700, fontSize: '0.88rem', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.35rem' }}>
                  <span>Explore Collection</span>
                  <ArrowRight size={14} />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
