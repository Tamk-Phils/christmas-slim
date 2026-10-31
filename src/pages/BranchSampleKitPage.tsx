import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Star, Check, ShoppingBag, Truck, ChevronRight } from 'lucide-react';

export const BranchSampleKitPage: React.FC = () => {
  const { addToCart, openCart } = useCart();
  const [activeSwatch, setActiveSwatch] = useState<number>(0);

  const swatches = [
    {
      name: 'BH Balsam Fir™',
      realism: 'Most Realistic True Needle® (95%)',
      description: 'Modeled after live Abies balsamea from Maine tree farms with semi-flat glossy needles and silver undersides.',
      image: '/assets/images/bh-balsam-fir.jpg'
    },
    {
      name: 'Frosted Fraser Fir™',
      realism: 'True Needle® with Alpine Snow Flocking',
      description: 'Delicately dusted with natural snow flocking and sturdy branches built for heavier ornaments.',
      image: '/assets/images/frosted-fraser-fir.jpg'
    },
    {
      name: 'Silverado Slim Fir™',
      realism: 'Realistic True Needle® (75%)',
      description: 'Slender architectural silhouette engineered specifically for compact living spaces and city apartments.',
      image: '/assets/images/silverado-slim.jpg'
    },
    {
      name: 'European Silver Fir™',
      realism: 'Most Realistic True Needle® (90%)',
      description: 'Open branch architecture inspired by Central European alpine forests with upward-curving boughs.',
      image: '/assets/images/european-fir.jpg'
    }
  ];

  const handleOrder = () => {
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
    }, 0, 1);
    openCart();
  };

  return (
    <div className="branch-sample-kit-page" style={{ background: '#faf7f2', minHeight: '100vh', paddingBottom: '6rem' }}>
      {/* Breadcrumb Header */}
      <div style={{ background: '#ffffff', borderBottom: '1px solid #eee', padding: '0.85rem 1rem' }}>
        <div className="container" style={{ maxWidth: '1240px', margin: '0 auto', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: '#666' }}>
          <Link to="/" style={{ color: '#444', textDecoration: 'none' }}>Home</Link>
          <ChevronRight size={13} />
          <span style={{ color: '#143d2f', fontWeight: 600 }}>Branch Sample Kit</span>
        </div>
      </div>

      <div className="container" style={{ maxWidth: '1240px', margin: '3rem auto 0', padding: '0 1rem' }}>
        {/* Main Product Showcase Box */}
        <div
          style={{
            background: '#ffffff',
            borderRadius: 12,
            border: '1px solid #ebd9c0',
            boxShadow: '0 8px 24px rgba(0,0,0,0.06)',
            padding: '3rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3.5rem',
            alignItems: 'center',
            marginBottom: '4rem'
          }}
        >
          {/* Real Photo */}
          <div style={{ position: 'relative', borderRadius: 8, overflow: 'hidden', boxShadow: '0 8px 20px rgba(0,0,0,0.08)' }}>
            <img
              src="/assets/images/spotlight-branch-samples.webp"
              alt="Balsam Hill Branch Sample Kit Box"
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
            <div style={{ position: 'absolute', top: '1rem', left: '1rem', background: '#891b29', color: '#fff', padding: '0.35rem 0.85rem', borderRadius: 4, fontWeight: 700, fontSize: '0.8rem', textTransform: 'uppercase' }}>
              100% Rebated Voucher
            </div>
          </div>

          {/* Kit Details */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#c59b4c', marginBottom: '0.5rem' }}>
              <div style={{ display: 'flex' }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="#c59b4c" color="#c59b4c" />
                ))}
              </div>
              <span style={{ fontSize: '0.85rem', color: '#555', fontWeight: 600 }}>Rated 5.0 / 5.0 (3,410 Reviews)</span>
            </div>

            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.2rem, 3.5vw, 3rem)', color: '#143d2f', margin: '0 0 0.5rem', fontWeight: 600 }}>
              The Balsam Hill Branch Sample Kit
            </h1>

            <div style={{ fontSize: '2rem', fontWeight: 700, color: '#143d2f', marginBottom: '1.25rem' }}>
              $29 <span style={{ fontSize: '0.95rem', color: '#2e7d32', fontWeight: 600 }}>(Includes $29 Rebate Coupon)</span>
            </div>

            <p style={{ color: '#444', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              Experience the unmatched craftsmanship of our patented True Needle® foliage in the natural light of your own home before selecting your tree.
            </p>

            <div style={{ background: '#faf7f2', padding: '1.25rem', borderRadius: 8, borderLeft: '4px solid var(--color-gold)', marginBottom: '1.75rem' }}>
              <div style={{ fontWeight: 700, color: '#143d2f', marginBottom: '0.25rem' }}>
                How the $29 Credit Works:
              </div>
              <div style={{ fontSize: '0.88rem', color: '#555', lineHeight: 1.5 }}>
                Inside your presentation box, you'll receive an exclusive coupon code for $29 off. When you order your Balsam Hill artificial Christmas tree, simply enter your code at checkout to have the full $29 deducted from your order!
              </div>
            </div>

            <button
              onClick={handleOrder}
              style={{
                background: 'var(--color-forest)',
                color: '#fff',
                border: 'none',
                padding: '1rem 2.25rem',
                borderRadius: 6,
                fontWeight: 700,
                fontSize: '1.05rem',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                boxShadow: '0 4px 14px rgba(20,61,47,0.3)',
                marginBottom: '1.5rem'
              }}
            >
              <ShoppingBag size={18} />
              <span>Order Branch Sample Kit ($29)</span>
            </button>

            <div style={{ display: 'flex', gap: '1.5rem', color: '#666', fontSize: '0.85rem' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}><Truck size={16} color="var(--color-forest)" /> Free Ground Shipping</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}><Check size={16} color="var(--color-forest)" /> Ships Next Business Day</span>
            </div>
          </div>
        </div>

        {/* Interactive Swatch Explorer */}
        <div style={{ background: '#ffffff', borderRadius: 12, border: '1px solid #ebd9c0', padding: '3rem', marginBottom: '4rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span style={{ color: '#c59b4c', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              Sample Box Contents
            </span>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.4rem', color: '#143d2f', marginTop: '0.25rem', fontWeight: 600 }}>
              Explore the Included Foliage Swatches
            </h2>
            <p style={{ color: '#666', maxWidth: '600px', margin: '0.5rem auto 0' }}>
              Click any tree species below to view its branch architecture, needle density, and botanical realism.
            </p>
          </div>

          {/* Swatch Navigation Tabs */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
            {swatches.map((swatch, idx) => (
              <button
                key={idx}
                onClick={() => setActiveSwatch(idx)}
                style={{
                  border: activeSwatch === idx ? '2px solid var(--color-forest)' : '1px solid #ccc',
                  background: activeSwatch === idx ? 'var(--color-forest)' : '#fff',
                  color: activeSwatch === idx ? '#fff' : '#333',
                  padding: '0.65rem 1.25rem',
                  borderRadius: 6,
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  cursor: 'pointer'
                }}
              >
                {swatch.name}
              </button>
            ))}
          </div>

          {/* Active Swatch Showcase Card */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem', alignItems: 'center', background: '#faf7f2', padding: '2rem', borderRadius: 8 }}>
            <img
              src={swatches[activeSwatch].image}
              alt={swatches[activeSwatch].name}
              style={{ width: '100%', maxHeight: '360px', objectFit: 'cover', borderRadius: 8 }}
            />
            <div>
              <span style={{ background: 'rgba(20,61,47,0.1)', color: '#143d2f', padding: '0.25rem 0.6rem', borderRadius: 4, fontWeight: 700, fontSize: '0.8rem' }}>
                {swatches[activeSwatch].realism}
              </span>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', color: '#143d2f', margin: '0.75rem 0 0.5rem' }}>
                {swatches[activeSwatch].name}
              </h3>
              <p style={{ color: '#555', fontSize: '1rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                {swatches[activeSwatch].description}
              </p>
              <Link
                to="/category/trees"
                style={{
                  background: '#ffffff',
                  color: 'var(--color-forest)',
                  border: '1px solid var(--color-forest)',
                  padding: '0.65rem 1.4rem',
                  borderRadius: 4,
                  fontWeight: 700,
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem'
                }}
              >
                <span>Browse Trees with this Foliage</span>
                <ChevronRight size={15} />
              </Link>
            </div>
          </div>
        </div>

        {/* Customer Reviews Section */}
        <div style={{ textAlign: 'center' }}>
          <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', color: '#143d2f', marginBottom: '1.5rem' }}>
            What Customers Are Saying About the Sample Kit
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', textAlign: 'left' }}>
            <div style={{ background: '#ffffff', padding: '2rem', borderRadius: 8, border: '1px solid #ebd9c0' }}>
              <div style={{ display: 'flex', color: '#c59b4c', marginBottom: '0.5rem' }}>
                {[...Array(5)].map((_, i) => <Star key={i} size={15} fill="#c59b4c" color="#c59b4c" />)}
              </div>
              <p style={{ fontStyle: 'italic', color: '#333', lineHeight: 1.6, marginBottom: '1rem' }}>
                “This made choosing our 9ft tree so effortless. We compared the branches in daylight and under lamps in our living room. Plus, getting the $29 back on our tree order was fantastic.”
              </p>
              <div style={{ fontWeight: 700, color: '#143d2f', fontSize: '0.85rem' }}>— Patricia K., Richmond VA</div>
            </div>
            <div style={{ background: '#ffffff', padding: '2rem', borderRadius: 8, border: '1px solid #ebd9c0' }}>
              <div style={{ display: 'flex', color: '#c59b4c', marginBottom: '0.5rem' }}>
                {[...Array(5)].map((_, i) => <Star key={i} size={15} fill="#c59b4c" color="#c59b4c" />)}
              </div>
              <p style={{ fontStyle: 'italic', color: '#333', lineHeight: 1.6, marginBottom: '1rem' }}>
                “The True Needle foliage feels completely real. Even the stems have subtle brown bark accents. Our kit arrived in two days and gave my husband and me complete confidence.”
              </p>
              <div style={{ fontWeight: 700, color: '#143d2f', fontSize: '0.85rem' }}>— Mark &amp; Lisa T., Chicago IL</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
