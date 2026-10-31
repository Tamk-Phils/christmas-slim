import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import type { Product } from '../types';
import { useCart } from '../context/CartContext';
import { Star, Heart, ShoppingBag, Eye, ChevronRight, SlidersHorizontal, RotateCcw, X } from 'lucide-react';

interface CategoryPageProps {
  products: Product[];
}

export const CategoryPage: React.FC<CategoryPageProps> = ({ products }) => {
  const { category: rawCategory } = useParams<{ category: string }>();
  const category = (rawCategory || 'trees').toLowerCase();

  const { addToCart, openQuickView, showToast } = useCart();
  const [selectedHeights, setSelectedHeights] = useState<Record<string, number>>({});
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // Filter States
  const [selectedRealism, setSelectedRealism] = useState<string>('all');
  const [selectedLight, setSelectedLight] = useState<string>('all');
  const [selectedHeightFilter, setSelectedHeightFilter] = useState<string>('all');
  const [flipTreeOnly, setFlipTreeOnly] = useState<boolean>(false);
  const [sortBy, setSortBy] = useState<string>('featured');

  // Category Metadata
  const categoryMeta: Record<string, { title: string; subtitle: string; bannerImg: string }> = {
    trees: {
      title: 'Artificial Christmas Trees',
      subtitle: 'Handcrafted with patented True Needle® foliage molded from natural forest evergreens. Featuring pre-strung Candlelight® LEDs and patented Flip Tree® technology.',
      bannerImg: '/assets/images/hero-trees-spotlight.webp'
    },
    wreaths: {
      title: 'Christmas Wreaths & Greenery',
      subtitle: 'Festive welcoming door wreaths, handcrafted mantel garlands, and lush teardrop swags pre-lit with energy-efficient warm micro LEDs.',
      bannerImg: '/assets/images/spotlight-fresh-hero.webp'
    },
    decor: {
      title: 'Holiday Décor & Accents',
      subtitle: 'Elevate your seasonal styling with artisanal mouth-blown glass ornaments, handcrafted woven willow tree skirts, and illuminated collectibles.',
      bannerImg: '/assets/images/spotlight-dolly-decor.webp'
    },
    sale: {
      title: 'Holiday Sale & Clearance',
      subtitle: 'Save up to 40% on signature artificial Christmas trees, pre-lit foliage, and designer ornament sets with guaranteed Free Ground Shipping.',
      bannerImg: '/assets/images/hero-banner.webp'
    }
  };

  const meta = categoryMeta[category] || categoryMeta.trees;

  // Filtered Products
  const filteredProducts = useMemo(() => {
    let result = products.filter(p => {
      if (category === 'sale') return p.badgeClass === 'badge-best-seller' || p.badge.includes('Sale') || p.heights[0].price < p.heights[0].originalPrice;
      if (category === 'trees') return p.category === 'trees';
      if (category === 'wreaths') return p.category === 'wreaths';
      if (category === 'decor') return p.category === 'decor';
      return true;
    });

    if (flipTreeOnly) {
      result = result.filter(p => p.id.includes('flip') || p.name.includes('Flip'));
    }

    if (selectedRealism !== 'all') {
      result = result.filter(p => p.realism.toLowerCase().includes(selectedRealism.toLowerCase()));
    }

    if (selectedLight !== 'all') {
      result = result.filter(p => p.lightStyle.toLowerCase().includes(selectedLight.toLowerCase()));
    }

    if (selectedHeightFilter !== 'all') {
      result = result.filter(p => p.heights.some(h => h.height.includes(selectedHeightFilter)));
    }

    // Sorting
    if (sortBy === 'price-low') {
      result = [...result].sort((a, b) => a.heights[0].price - b.heights[0].price);
    } else if (sortBy === 'price-high') {
      result = [...result].sort((a, b) => b.heights[0].price - a.heights[0].price);
    } else if (sortBy === 'rating') {
      result = [...result].sort((a, b) => b.rating - a.rating);
    } else if (sortBy === 'reviews') {
      result = [...result].sort((a, b) => b.reviewsCount - a.reviewsCount);
    }

    return result;
  }, [products, category, flipTreeOnly, selectedRealism, selectedLight, selectedHeightFilter, sortBy]);

  const toggleWishlist = (id: string, name: string) => {
    setWishlist(prev => {
      const exists = prev.includes(id);
      if (exists) {
        showToast(`Removed ${name} from Wishlist`);
        return prev.filter(item => item !== id);
      } else {
        showToast(`Added ${name} to Wishlist! ❤️`);
        return [...prev, id];
      }
    });
  };

  const resetFilters = () => {
    setSelectedRealism('all');
    setSelectedLight('all');
    setSelectedHeightFilter('all');
    setFlipTreeOnly(false);
    setSortBy('featured');
  };

  const hasActiveFilters = selectedRealism !== 'all' || selectedLight !== 'all' || selectedHeightFilter !== 'all' || flipTreeOnly;

  return (
    <div className="category-page" style={{ background: '#faf7f2', minHeight: '100vh', paddingBottom: '5rem' }}>
      {/* Category Hero Banner */}
      <div
        className="category-hero"
        style={{
          position: 'relative',
          background: '#0e2a20',
          color: '#ffffff',
          padding: '4rem 1rem 3.5rem',
          overflow: 'hidden'
        }}
      >
        <img
          src={meta.bannerImg}
          alt={meta.title}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: 0.35
          }}
        />
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(180deg, rgba(14,42,32,0.8) 0%, rgba(14,42,32,0.95) 100%)' }} />

        <div className="container" style={{ position: 'relative', zIndex: 2, maxWidth: '1240px', margin: '0 auto' }}>
          {/* Breadcrumbs */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: '#c59b4c', marginBottom: '1.25rem' }}>
            <Link to="/" style={{ color: '#ffffff', textDecoration: 'none' }}>Home</Link>
            <ChevronRight size={14} />
            <span>{meta.title}</span>
          </nav>

          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.4rem, 4vw, 3.5rem)', margin: '0 0 0.75rem', fontWeight: 600 }}>
            {meta.title}
          </h1>
          <p style={{ maxWidth: '750px', fontSize: '1.1rem', color: '#e0ece6', lineHeight: 1.6, margin: 0 }}>
            {meta.subtitle}
          </p>
        </div>
      </div>

      <div className="container" style={{ maxWidth: '1240px', margin: '2rem auto 0', padding: '0 1rem' }}>
        {/* Top Controls Toolbar */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            background: '#ffffff',
            padding: '1rem 1.5rem',
            borderRadius: 8,
            boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
            marginBottom: '2rem',
            flexWrap: 'wrap',
            gap: '1rem'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <button
              className="mobile-filter-btn"
              onClick={() => setIsMobileFilterOpen(true)}
              aria-label="Open Filter Drawer"
            >
              <SlidersHorizontal size={15} />
              <span>Filter & Refine {hasActiveFilters ? '• Active' : ''}</span>
            </button>

            <span style={{ fontWeight: 600, color: '#333', fontSize: '0.95rem' }}>
              Showing {filteredProducts.length} Products
            </span>
            {hasActiveFilters && (
              <button
                onClick={resetFilters}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#891b29',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.25rem',
                  cursor: 'pointer'
                }}
              >
                <RotateCcw size={13} />
                <span>Reset Filters</span>
              </button>
            )}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <label style={{ fontSize: '0.85rem', color: '#666', fontWeight: 600 }}>
              Sort By:
            </label>
            <select
              value={sortBy}
              onChange={e => setSortBy(e.target.value)}
              style={{
                padding: '0.45rem 1rem',
                border: '1px solid #ddd',
                borderRadius: 4,
                background: '#fff',
                fontSize: '0.85rem',
                fontWeight: 600,
                color: '#333'
              }}
            >
              <option value="featured">Balsam Hill Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Customer Rating (Highest)</option>
              <option value="reviews">Most Reviewed</option>
            </select>
          </div>
        </div>

        {/* Mobile Filter Backdrop */}
        {isMobileFilterOpen && (
          <div className="mobile-filter-backdrop" onClick={() => setIsMobileFilterOpen(false)} />
        )}

        {/* Catalog Main Layout: Sidebar Filters + Products Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '260px 1fr', gap: '2rem', alignItems: 'start' }} className="category-layout-grid">
          {/* Left Filter Sidebar */}
          <aside
            className={`category-sidebar ${isMobileFilterOpen ? 'is-mobile-open' : ''}`}
            style={{
              background: '#ffffff',
              padding: '1.75rem',
              borderRadius: 8,
              boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
              border: '1px solid #ede8de'
            }}
          >
            <div className="mobile-filter-header">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <SlidersHorizontal size={18} color="var(--color-forest)" />
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', margin: 0, color: 'var(--color-forest)' }}>
                  Refine Selection
                </h3>
              </div>
              <button 
                onClick={() => setIsMobileFilterOpen(false)} 
                style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#333' }}
                aria-label="Close filters"
              >
                <X size={20} />
              </button>
            </div>

            {/* Innovation Filter */}
            {category === 'trees' && (
              <div style={{ marginBottom: '1.75rem' }}>
                <h4 style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#333', marginBottom: '0.75rem' }}>
                  Innovation
                </h4>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.9rem', color: '#444', cursor: 'pointer' }}>
                  <input
                    type="checkbox"
                    checked={flipTreeOnly}
                    onChange={e => setFlipTreeOnly(e.target.checked)}
                    style={{ accentColor: 'var(--color-forest)' }}
                  />
                  <span>Flip Tree® Models Only</span>
                </label>
              </div>
            )}

            {/* Height Filter */}
            {category === 'trees' && (
              <div style={{ marginBottom: '1.75rem' }}>
                <h4 style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#333', marginBottom: '0.75rem' }}>
                  Tree Height
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.88rem', color: '#555' }}>
                  {['all', '6.5', '7.5', '9', '10'].map(h => (
                    <label key={h} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                      <input
                        type="radio"
                        name="heightFilter"
                        checked={selectedHeightFilter === h}
                        onChange={() => setSelectedHeightFilter(h)}
                        style={{ accentColor: 'var(--color-forest)' }}
                      />
                      <span>{h === 'all' ? 'All Heights' : `${h} Feet Trees`}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {/* Realism Filter */}
            <div style={{ marginBottom: '1.75rem' }}>
              <h4 style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#333', marginBottom: '0.75rem' }}>
                Foliage Realism
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.88rem', color: '#555' }}>
                {[
                  { id: 'all', label: 'All Foliage Types' },
                  { id: 'most realistic', label: 'Most Realistic True Needle® (90%+)' },
                  { id: 'realistic', label: 'Realistic True Needle® Blend' },
                  { id: 'flocked', label: 'Snow Flocked & Frosted' }
                ].map(r => (
                  <label key={r.id} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                    <input
                      type="radio"
                      name="realismFilter"
                      checked={selectedRealism === r.id}
                      onChange={() => setSelectedRealism(r.id)}
                      style={{ accentColor: 'var(--color-forest)' }}
                    />
                    <span>{r.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Lighting Style */}
            <div style={{ marginBottom: '1.75rem' }}>
              <h4 style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#333', marginBottom: '0.75rem' }}>
                Lighting Style
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.88rem', color: '#555' }}>
                {[
                  { id: 'all', label: 'All Lighting Styles' },
                  { id: 'candlelight', label: 'Candlelight® Clear LED (2700K)' },
                  { id: 'color', label: 'Dual Color + Clear LED' },
                  { id: 'twinkly', label: 'Twinkly® Smart RGB' }
                ].map(l => (
                  <label key={l.id} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                    <input
                      type="radio"
                      name="lightFilter"
                      checked={selectedLight === l.id}
                      onChange={() => setSelectedLight(l.id)}
                      style={{ accentColor: 'var(--color-forest)' }}
                    />
                    <span>{l.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Branch Sample Kit Promo Callout in Sidebar */}
            <div style={{ background: '#f4ede2', padding: '1rem', borderRadius: 6, border: '1px solid #ebd9c0', marginTop: '1.5rem' }}>
              <div style={{ fontWeight: 700, fontSize: '0.85rem', color: '#143d2f', marginBottom: '0.25rem' }}>
                Need to See Branches?
              </div>
              <p style={{ fontSize: '0.8rem', color: '#555', margin: '0 0 0.75rem', lineHeight: 1.4 }}>
                Order our $29 sample box with free shipping. Receive $29 off your tree!
              </p>
              <Link
                to="/branch-sample-kit"
                style={{ color: '#891b29', fontWeight: 700, fontSize: '0.8rem', textDecoration: 'none' }}
              >
                Order Sample Kit &rarr;
              </Link>
            </div>

            {/* Mobile Apply Bar */}
            <div className="mobile-filter-apply-bar">
              <button 
                onClick={resetFilters} 
                className="mobile-reset-btn"
              >
                Reset All
              </button>
              <button 
                onClick={() => setIsMobileFilterOpen(false)} 
                className="btn-primary"
                style={{ flex: 1, padding: '0.65rem 1rem', textAlign: 'center' }}
              >
                Apply Filters ({filteredProducts.length})
              </button>
            </div>
          </aside>

          {/* Products Grid */}
          <main>
            {filteredProducts.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '4rem 2rem', background: '#fff', borderRadius: 8 }}>
                <p style={{ fontSize: '1.1rem', color: '#666', marginBottom: '1.5rem' }}>
                  No items matched your specific filter criteria.
                </p>
                <button
                  onClick={resetFilters}
                  style={{ background: 'var(--color-forest)', color: '#fff', border: 'none', padding: '0.65rem 1.4rem', borderRadius: 4, fontWeight: 600, cursor: 'pointer' }}
                >
                  Clear All Filters
                </button>
              </div>
            ) : (
              <div className="category-product-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))', gap: '1.25rem' }}>
                {filteredProducts.map(product => {
                  const currentHeightIdx = selectedHeights[product.id] ?? (product.selectedHeightIndex || 0);
                  const currentVariant = product.heights[currentHeightIdx] || product.heights[0];
                  const isWishlisted = wishlist.includes(product.id);

                  return (
                    <div
                      key={product.id}
                      className="product-card"
                      style={{
                        background: '#ffffff',
                        borderRadius: 8,
                        overflow: 'hidden',
                        border: '1px solid #eae5db',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.04)',
                        display: 'flex',
                        flexDirection: 'column',
                        transition: 'transform 0.2s, box-shadow 0.2s'
                      }}
                    >
                      {/* Image & Badges */}
                      <div style={{ position: 'relative', overflow: 'hidden', aspectRatio: '1 / 1.15', background: '#f9f9f9' }}>
                        <Link to={`/product/${product.id}`}>
                          <img
                            src={product.image}
                            alt={product.name}
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                          />
                        </Link>

                        {product.badge && (
                          <div
                            style={{
                              position: 'absolute',
                              top: '0.75rem',
                              left: '0.75rem',
                              background: product.badgeClass === 'badge-best-seller' ? 'var(--color-forest)' : '#891b29',
                              color: '#fff',
                              fontSize: '0.72rem',
                              fontWeight: 700,
                              padding: '0.25rem 0.6rem',
                              borderRadius: 4,
                              textTransform: 'uppercase',
                              letterSpacing: '0.05em'
                            }}
                          >
                            {product.badge}
                          </div>
                        )}

                        {/* Wishlist Button */}
                        <button
                          onClick={() => toggleWishlist(product.id, product.name)}
                          style={{
                            position: 'absolute',
                            top: '0.75rem',
                            right: '0.75rem',
                            background: '#ffffff',
                            border: 'none',
                            borderRadius: '50%',
                            width: 32,
                            height: 32,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
                          }}
                          title="Save to Wishlist"
                        >
                          <Heart size={16} fill={isWishlisted ? '#891b29' : 'none'} color={isWishlisted ? '#891b29' : '#555'} />
                        </button>
                      </div>

                      {/* Card Body */}
                      <div style={{ padding: '1.25rem', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                        <div>
                          {/* Rating */}
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', marginBottom: '0.4rem', fontSize: '0.8rem', color: '#c59b4c' }}>
                            <div style={{ display: 'flex' }}>
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} size={13} fill="#c59b4c" color="#c59b4c" />
                              ))}
                            </div>
                            <span style={{ color: '#777', marginLeft: '0.25rem' }}>({product.reviewsCount})</span>
                          </div>

                          <Link
                            to={`/product/${product.id}`}
                            style={{ textDecoration: 'none', color: '#143d2f' }}
                          >
                            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', margin: '0 0 0.35rem', fontWeight: 600 }}>
                              {product.name}
                            </h3>
                          </Link>

                          <div style={{ fontSize: '0.78rem', color: '#666', marginBottom: '0.75rem' }}>
                            {product.realism}
                          </div>

                          {/* Height Pill Selectors */}
                          {product.heights.length > 1 && (
                            <div style={{ display: 'flex', gap: '0.35rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
                              {product.heights.map((h, idx) => (
                                <button
                                  key={idx}
                                  onClick={() => setSelectedHeights(prev => ({ ...prev, [product.id]: idx }))}
                                  style={{
                                    border: currentHeightIdx === idx ? '1px solid var(--color-forest)' : '1px solid #ddd',
                                    background: currentHeightIdx === idx ? 'var(--color-forest)' : '#fff',
                                    color: currentHeightIdx === idx ? '#fff' : '#444',
                                    padding: '0.2rem 0.5rem',
                                    borderRadius: 3,
                                    fontSize: '0.75rem',
                                    fontWeight: 600,
                                    cursor: 'pointer'
                                  }}
                                >
                                  {h.height}
                                </button>
                              ))}
                            </div>
                          )}
                        </div>

                        {/* Pricing & Add to Cart */}
                        <div>
                          <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem', marginBottom: '0.85rem' }}>
                            <span style={{ fontSize: '1.25rem', fontWeight: 700, color: '#143d2f' }}>
                              ${currentVariant.price.toLocaleString()}
                            </span>
                            {currentVariant.originalPrice > currentVariant.price && (
                              <span style={{ fontSize: '0.9rem', color: '#999', textDecoration: 'line-through' }}>
                                ${currentVariant.originalPrice.toLocaleString()}
                              </span>
                            )}
                          </div>

                          <div style={{ display: 'flex', gap: '0.5rem' }}>
                            <button
                              onClick={() => addToCart(product, currentHeightIdx, 1)}
                              style={{
                                flexGrow: 1,
                                background: 'var(--color-forest)',
                                color: '#fff',
                                border: 'none',
                                padding: '0.65rem 0.75rem',
                                borderRadius: 4,
                                fontWeight: 700,
                                fontSize: '0.85rem',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '0.4rem',
                                cursor: 'pointer',
                                transition: 'background 0.2s'
                              }}
                            >
                              <ShoppingBag size={15} />
                              <span>Add to Bag</span>
                            </button>

                            <button
                              onClick={() => openQuickView(product)}
                              style={{
                                background: '#f5f5f5',
                                border: '1px solid #ddd',
                                borderRadius: 4,
                                width: 38,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: 'pointer',
                                color: '#444'
                              }}
                              title="Quick View Specifications"
                            >
                              <Eye size={16} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};
