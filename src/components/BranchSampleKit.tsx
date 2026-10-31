import React from 'react';
import { useCart } from '../context/CartContext';
import { Check } from 'lucide-react';

export const BranchSampleKit: React.FC = () => {
  const { addToCart } = useCart();

  const handleOrderKit = () => {
    addToCart({
      id: 'branch-sample-kit',
      name: 'Balsam Hill Branch Sample Kit',
      category: 'decor',
      badge: '100% Rebated',
      badgeClass: 'badge-best-seller',
      rating: 4.98,
      reviewsCount: 3410,
      image: '/assets/images/spotlight-branch-samples.webp',
      description: 'Luxury presentation box with authentic evergreen foliage cuttings, catalog, and $29 coupon code. The full $29 is credited back on your tree purchase!',
      realism: 'True Needle® & Classic Swatches',
      lightStyle: 'Touch & Feel at Home',
      heights: [
        { height: 'Branch Sample Kit', price: 29, originalPrice: 29, tips: '20 branch cuttings', lights: 'Free Shipping' }
      ]
    }, 0);
  };

  return (
    <section className="sample-kit-section" id="sample-kit-anchor">
      <div className="container">
        <div className="sample-kit-grid">
          <div className="sample-kit-img-wrap">
            <img
              src="/assets/images/spotlight-branch-samples.webp"
              alt="Balsam Hill Branch Sample Kit Box"
              className="sample-kit-img"
            />
            <div className="sample-kit-badge">100% Rebated</div>
          </div>

          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', marginBottom: '0.75rem' }}>
              {[...Array(5)].map((_, i) => (
                <svg key={i} xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 28 26" fill="none">
                  <path d="M14.0625 0L17.2057 9.67376H27.3773L19.1483 15.6525L22.2915 25.3262L14.0625 19.3475L5.83351 25.3262L8.9767 15.6525L0.747708 9.67376H10.9193L14.0625 0Z" fill="#E5BC6D"></path>
                </svg>
              ))}
              <span style={{ color: 'var(--color-gold-light)', fontWeight: 700, fontSize: '0.9rem', marginLeft: '0.5rem' }}>
                Rated 5.0 out of 5 stars
              </span>
            </div>

            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', color: 'var(--color-white)', margin: '0.25rem 0 1rem', lineHeight: 1.15 }}>
              Branch Samples: A 5-Star Favorite
            </h2>

            <blockquote style={{ fontStyle: 'italic', color: '#fae19c', fontSize: '1.1rem', margin: '0 0 1.25rem', borderLeft: '3px solid #c59b4c', paddingLeft: '1rem', lineHeight: 1.5 }}>
              “This makes choosing a tree so easy. I can keep the branches for decorating, and the cost will be applied to the price of the tree.”
            </blockquote>

            <p style={{ color: '#b7c7c0', fontSize: '1rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              Experience the craftsmanship in the comfort of your home. Our presentation box contains labeled cuttings of our most popular True Needle® and Classic foliage types, complete with an official catalog and ribbon swatches.
            </p>
            <div style={{ background: 'rgba(255, 255, 255, 0.08)', borderLeft: '3px solid var(--color-gold)', padding: '1.25rem', borderRadius: 'var(--radius-sm)', marginBottom: '2rem' }}>
              <div style={{ fontWeight: 700, color: 'var(--color-gold-light)', marginBottom: '0.25rem' }}>
                Includes a $29 Coupon Towards Your Tree Purchase!
              </div>
              <div style={{ fontSize: '0.85rem', color: '#e0e8e4' }}>
                The full $29 price of the kit is credited back as a discount voucher code when you order your Balsam Hill artificial Christmas tree.
              </div>
            </div>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
              <button className="btn-primary" onClick={handleOrderKit}>
                Order Branch Sample Kit ($29)
              </button>
              <span style={{ fontSize: '0.85rem', color: 'var(--color-gold-shimmer)', display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
                <Check size={14} /> Ships Next Business Day
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
