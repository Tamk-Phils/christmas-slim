import React from 'react';
import { Link } from 'react-router-dom';
import type { Product } from '../types';
import { FlipTreeShowcase } from '../components/FlipTreeShowcase';
import { useCart } from '../context/CartContext';
import { ChevronRight, RotateCcw, ShoppingBag, Eye, Star } from 'lucide-react';

interface FlipTreePageProps {
  products: Product[];
}

export const FlipTreePage: React.FC<FlipTreePageProps> = ({ products }) => {
  const { addToCart, openQuickView } = useCart();
  const flipTrees = products.filter(p => p.id.includes('flip') || p.name.includes('Flip'));

  return (
    <div className="flip-tree-page" style={{ background: '#faf7f2', minHeight: '100vh', paddingBottom: '6rem' }}>
      {/* Breadcrumb Strip */}
      <div style={{ background: '#ffffff', borderBottom: '1px solid #eee', padding: '0.85rem 1rem' }}>
        <div className="container" style={{ maxWidth: '1240px', margin: '0 auto', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: '#666' }}>
          <Link to="/" style={{ color: '#444', textDecoration: 'none' }}>Home</Link>
          <ChevronRight size={13} />
          <Link to="/category/trees" style={{ color: '#444', textDecoration: 'none' }}>Trees</Link>
          <ChevronRight size={13} />
          <span style={{ color: '#143d2f', fontWeight: 600 }}>Patented Flip Tree® Innovation</span>
        </div>
      </div>

      {/* Hero Header */}
      <div style={{ background: '#0e2a20', color: '#ffffff', padding: '4rem 1rem', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '850px', margin: '0 auto' }}>
          <span style={{ color: '#fae19c', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.12em' }}>
            Patented Holiday Convenience
          </span>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.4rem, 4vw, 3.5rem)', margin: '0.5rem 0 1rem', fontWeight: 600 }}>
            The Patented Balsam Hill Flip Tree<sup>®</sup>
          </h1>
          <p style={{ fontSize: '1.15rem', color: '#e0ece6', lineHeight: 1.6, margin: 0 }}>
            Engineered with a built-in rolling stand and balanced pivot mechanism so you never have to lift a heavy tree base again.
          </p>
        </div>
      </div>

      {/* Interactive 3-Step Simulator */}
      <div style={{ margin: '3rem 0' }}>
        <FlipTreeShowcase />
      </div>

      {/* Comparison Grid */}
      <div className="container" style={{ maxWidth: '1100px', margin: '4rem auto', padding: '0 1rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.4rem', color: '#143d2f', fontWeight: 600 }}>
            Flip Tree<sup>®</sup> vs. Traditional Trees
          </h2>
          <p style={{ color: '#666', maxWidth: '600px', margin: '0.5rem auto 0' }}>
            See why over 250,000 households have upgraded to Flip Tree convenience.
          </p>
        </div>

        <div style={{ background: '#ffffff', borderRadius: 12, border: '1px solid #ebd9c0', overflow: 'hidden', boxShadow: '0 4px 16px rgba(0,0,0,0.04)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', background: '#f4ede2', padding: '1.25rem 2rem', fontWeight: 700, fontSize: '0.95rem', color: '#143d2f', borderBottom: '1px solid #ebd9c0' }}>
            <div>Feature</div>
            <div style={{ color: '#143d2f' }}>Balsam Hill Flip Tree®</div>
            <div style={{ color: '#777' }}>Standard Artificial Tree</div>
          </div>

          {[
            { feature: 'Setup Effort', flip: 'Roll into room & flip upright in 3 min', std: 'Heavy lifting of multiple stacked sections' },
            { feature: 'Light Connections', flip: 'Easy Plug® (auto-connects inside trunk)', std: 'Manual plug hunting between branches' },
            { feature: 'Storage Convenience', flip: 'Rolls into closet on built-in casters', std: 'Disassemble into bulky cardboard boxes' },
            { feature: 'Tree Stand', flip: 'Integrated sturdy steel base with wheels', std: 'Separate plastic/metal tripod stand' },
            { feature: 'Foliage Protection', flip: 'Needles face inward during off-season', std: 'Branches crushed inside storage bags' }
          ].map((row, idx) => (
            <div key={idx} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', padding: '1.25rem 2rem', borderBottom: '1px solid #eee', fontSize: '0.9rem', alignItems: 'center' }}>
              <div style={{ fontWeight: 600, color: '#333' }}>{row.feature}</div>
              <div style={{ color: 'var(--color-forest)', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <RotateCcw size={15} />
                <span>{row.flip}</span>
              </div>
              <div style={{ color: '#888' }}>{row.std}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Flip Tree Models Catalog */}
      <div className="container" style={{ maxWidth: '1240px', margin: '4rem auto 0', padding: '0 1rem' }}>
        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.4rem', color: '#143d2f', textAlign: 'center', marginBottom: '2.5rem', fontWeight: 600 }}>
          Available Flip Tree<sup>®</sup> Models
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {(flipTrees.length > 0 ? flipTrees : products.slice(0, 3)).map(tree => (
            <div
              key={tree.id}
              style={{
                background: '#ffffff',
                borderRadius: 8,
                overflow: 'hidden',
                border: '1px solid #ebd9c0',
                boxShadow: '0 4px 16px rgba(0,0,0,0.04)',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <div style={{ position: 'relative', aspectRatio: '1 / 1.15', overflow: 'hidden' }}>
                <Link to={`/product/${tree.id}`}>
                  <img src={tree.image} alt={tree.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </Link>
                <div style={{ position: 'absolute', top: '0.75rem', left: '0.75rem', background: 'var(--color-forest)', color: '#fff', fontSize: '0.75rem', fontWeight: 700, padding: '0.25rem 0.6rem', borderRadius: 4 }}>
                  Flip Tree®
                </div>
              </div>

              <div style={{ padding: '1.5rem', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: '#c59b4c', marginBottom: '0.35rem', fontSize: '0.8rem' }}>
                    <div style={{ display: 'flex' }}>
                      {[...Array(5)].map((_, i) => <Star key={i} size={13} fill="#c59b4c" color="#c59b4c" />)}
                    </div>
                    <span style={{ color: '#777' }}>({tree.reviewsCount})</span>
                  </div>

                  <Link to={`/product/${tree.id}`} style={{ textDecoration: 'none', color: '#143d2f' }}>
                    <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.35rem', margin: '0 0 0.5rem', fontWeight: 600 }}>
                      {tree.name}
                    </h3>
                  </Link>

                  <p style={{ color: '#666', fontSize: '0.88rem', lineHeight: 1.5, margin: '0 0 1.25rem' }}>
                    {tree.description}
                  </p>
                </div>

                <div>
                  <div style={{ fontSize: '1.35rem', fontWeight: 700, color: '#143d2f', marginBottom: '1rem' }}>
                    ${tree.heights[0].price.toLocaleString()}
                  </div>

                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <button
                      onClick={() => addToCart(tree, 0, 1)}
                      style={{
                        flexGrow: 1,
                        background: 'var(--color-forest)',
                        color: '#fff',
                        border: 'none',
                        padding: '0.75rem',
                        borderRadius: 4,
                        fontWeight: 700,
                        fontSize: '0.88rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.4rem',
                        cursor: 'pointer'
                      }}
                    >
                      <ShoppingBag size={16} />
                      <span>Add to Bag</span>
                    </button>

                    <button
                      onClick={() => openQuickView(tree)}
                      style={{ background: '#f5f5f5', border: '1px solid #ddd', borderRadius: 4, width: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
                    >
                      <Eye size={17} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
