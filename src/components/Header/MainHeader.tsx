import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { useGlow } from '../../context/GlowContext';
import type { Product } from '../../types';
import { 
  Search, 
  User, 
  Heart, 
  ShoppingBag, 
  Menu, 
  X, 
  ChevronDown, 
  ChevronRight, 
  Sparkles, 
  Sun, 
  Flame, 
  Moon, 
  Box, 
  HelpCircle, 
  Phone,
  Snowflake
} from 'lucide-react';

interface MainHeaderProps {
  products: Product[];
}

export const MainHeader: React.FC<MainHeaderProps> = ({ products }) => {
  const { cart, openCart, showToast } = useCart();
  const { glowMode, setGlowMode, isSnowing, toggleSnow } = useGlow();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const searchBoxRef = useRef<HTMLDivElement | null>(null);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const filteredMatches = searchTerm.length > 1
    ? products.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()) || p.description.toLowerCase().includes(searchTerm.toLowerCase()))
    : [];

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchBoxRef.current && !searchBoxRef.current.contains(e.target as Node)) {
        setIsSearchOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  // Prevent body scrolling when mobile drawer is open
  useEffect(() => {
    if (isMobileNavOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileNavOpen]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      setIsSearchOpen(false);
      setIsMobileSearchOpen(false);
      setIsMobileNavOpen(false);
      navigate(`/search?q=${encodeURIComponent(searchTerm.trim())}`);
    }
  };

  const toggleSection = (section: string) => {
    setExpandedSection(prev => prev === section ? null : section);
  };

  const handleMobileNavClick = (path: string) => {
    setIsMobileNavOpen(false);
    navigate(path);
  };

  return (
    <>
      <div className="header-main">
        <div className="container header-main-inner">
          {/* Mobile Hamburger Menu Toggle */}
          <button 
            className="mobile-menu-toggle-btn"
            onClick={() => setIsMobileNavOpen(true)}
            aria-label="Open Navigation Menu"
          >
            <Menu size={24} />
          </button>

          {/* Brand Logo */}
          <div className="brand-logo-wrap">
            <Link to="/" className="brand-logo" aria-label="Balsam Hill Home">
              <img 
                src="/assets/images/balsam-hill-logo.webp" 
                alt="Balsam Hill" 
                className="brand-logo-img" 
                style={{ height: '36px', width: 'auto', display: 'block' }}
              />
            </Link>
          </div>

          {/* Desktop Live Search Bar */}
          <div className="header-search desktop-only-search" ref={searchBoxRef}>
            <form className="search-input-wrap" onSubmit={handleSearchSubmit}>
              <button type="submit" className="search-icon-btn" style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }} aria-label="Search">
                <Search size={18} />
              </button>
              <input
                type="text"
                className="search-input"
                placeholder="Search trees (e.g. Balsam Fir, Flip Tree, Twinkly, Wreaths)..."
                value={searchTerm}
                onChange={e => {
                  setSearchTerm(e.target.value);
                  setIsSearchOpen(true);
                }}
                onFocus={() => setIsSearchOpen(true)}
                autoComplete="off"
              />
            </form>

            {/* Autocomplete Dropdown */}
            {isSearchOpen && searchTerm.length > 1 && (
              <div className="search-autocomplete-box is-active">
                {filteredMatches.length > 0 ? (
                  <>
                    <div className="autocomplete-heading">Matching Holiday Collections ({filteredMatches.length})</div>
                    <ul className="autocomplete-list">
                      {filteredMatches.slice(0, 8).map(product => {
                        const price = product.heights[product.selectedHeightIndex || 0]?.price || product.heights[0].price;
                        return (
                          <li
                            key={product.id}
                            onClick={() => {
                              setIsSearchOpen(false);
                              setSearchTerm('');
                              navigate(`/product/${product.id}`);
                            }}
                          >
                            <span>{product.name}</span>
                            <span style={{ fontWeight: 700, color: 'var(--color-gold-deep)' }}>${price}</span>
                          </li>
                        );
                      })}
                      <li
                        onClick={handleSearchSubmit}
                        style={{ borderTop: '1px solid #eee', fontWeight: 600, color: 'var(--color-gold-deep)', cursor: 'pointer', textAlign: 'center', padding: '0.6rem' }}
                      >
                        View all {filteredMatches.length} results for "{searchTerm}" &rarr;
                      </li>
                    </ul>
                  </>
                ) : (
                  <div style={{ fontSize: '0.85rem', color: '#888', padding: '0.5rem' }}>
                    No exact matches found for "{searchTerm}"
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Header Actions */}
          <div className="header-actions">
            {/* Mobile Search Icon Toggle */}
            <button
              className="action-btn mobile-search-btn"
              onClick={() => setIsMobileSearchOpen(!isMobileSearchOpen)}
              title="Search"
              aria-label="Search Catalog"
            >
              <Search className="action-icon" size={20} />
            </button>

            <button
              className="action-btn hide-on-small-mobile"
              onClick={() => showToast('Balsam Hill Account Portal - Sign In or Register')}
              title="Customer Account"
            >
              <User className="action-icon" size={20} />
              <span>Account</span>
            </button>

            <button
              className="action-btn hide-on-small-mobile"
              onClick={() => showToast('Holiday Favorites List: 4 items saved ❤️')}
              title="Holiday Wishlist"
            >
              <Heart className="action-icon" size={20} />
              <span>Favorites</span>
              <span className="badge-count" style={{ top: '-4px', right: '-4px' }}>4</span>
            </button>

            <button
              className="cart-action-btn cart-toggle-btn"
              onClick={openCart}
              aria-label="Open Shopping Cart"
            >
              <ShoppingBag className="action-icon" size={20} />
              <span className="cart-btn-label">Cart</span>
              <span className="badge-count">{totalItems}</span>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Search Input */}
        {isMobileSearchOpen && (
          <div className="mobile-search-dropdown">
            <div className="container">
              <form className="mobile-search-form" onSubmit={handleSearchSubmit}>
                <input
                  type="text"
                  placeholder="Search Balsam Hill Christmas trees, wreaths..."
                  value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}
                  autoFocus
                />
                <button type="submit" className="btn-primary" style={{ padding: '0.4rem 1rem' }}>Search</button>
              </form>
            </div>
          </div>
        )}
      </div>

      {/* ====================================================================== */}
      {/* MOBILE SLIDE-IN NAVIGATION DRAWER                                      */}
      {/* ====================================================================== */}
      {isMobileNavOpen && (
        <div className="mobile-drawer-overlay" onClick={() => setIsMobileNavOpen(false)}>
          <div className="mobile-drawer-content" onClick={e => e.stopPropagation()}>
            {/* Mobile Drawer Header */}
            <div className="mobile-drawer-header">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <img 
                  src="/assets/images/balsam-hill-logo.webp" 
                  alt="Balsam Hill" 
                  style={{ height: '28px', width: 'auto' }}
                />
              </div>
              <button 
                className="mobile-drawer-close"
                onClick={() => setIsMobileNavOpen(false)}
                aria-label="Close Navigation"
              >
                <X size={24} />
              </button>
            </div>

            {/* Mobile Search Bar inside Drawer */}
            <div className="mobile-drawer-search">
              <form onSubmit={handleSearchSubmit} style={{ display: 'flex', gap: '0.5rem' }}>
                <input
                  type="text"
                  placeholder="Search 70+ trees & decor..."
                  value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}
                  style={{ flex: 1, padding: '0.6rem 0.8rem', border: '1px solid #ddd', borderRadius: 4, fontSize: '0.9rem' }}
                />
                <button type="submit" style={{ background: 'var(--color-forest)', color: '#fff', border: 'none', borderRadius: 4, padding: '0 0.8rem' }}>
                  <Search size={16} />
                </button>
              </form>
            </div>

            {/* Category Accordions */}
            <div className="mobile-nav-list">
              {/* Christmas Trees Accordion */}
              <div className="mobile-nav-group">
                <button 
                  className="mobile-nav-title-btn"
                  onClick={() => toggleSection('trees')}
                >
                  <span style={{ fontWeight: 600 }}>Christmas Trees</span>
                  {expandedSection === 'trees' ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
                </button>
                {expandedSection === 'trees' && (
                  <div className="mobile-sublinks">
                    <button onClick={() => handleMobileNavClick('/category/trees')}>Shop All Christmas Trees</button>
                    <button onClick={() => handleMobileNavClick('/category/trees?realism=Most+Realistic')}>Most Realistic True Needle® (95%+)</button>
                    <button onClick={() => handleMobileNavClick('/category/trees?height=7.5')}>7.5 ft Trees (Most Popular)</button>
                    <button onClick={() => handleMobileNavClick('/category/trees?height=9+-+10')}>9 - 10 ft Estate Trees</button>
                    <button onClick={() => handleMobileNavClick('/flip-tree')}>Patented Flip Tree® Technology</button>
                    <button onClick={() => handleMobileNavClick('/product/bh-balsam-fir')}>BH Balsam Fir™ Best Seller</button>
                    <button onClick={() => handleMobileNavClick('/product/silverado-slim')}>Silverado Slim Fir™</button>
                  </div>
                )}
              </div>

              {/* Wreaths & Garlands Accordion */}
              <div className="mobile-nav-group">
                <button 
                  className="mobile-nav-title-btn"
                  onClick={() => toggleSection('wreaths')}
                >
                  <span style={{ fontWeight: 600 }}>Wreaths & Greenery</span>
                  {expandedSection === 'wreaths' ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
                </button>
                {expandedSection === 'wreaths' && (
                  <div className="mobile-sublinks">
                    <button onClick={() => handleMobileNavClick('/category/wreaths')}>Shop All Wreaths & Greenery</button>
                    <button onClick={() => handleMobileNavClick('/category/wreaths')}>Pre-Lit Outdoor Wreaths</button>
                    <button onClick={() => handleMobileNavClick('/category/wreaths')}>Woodland Pine Garlands</button>
                    <button onClick={() => handleMobileNavClick('/category/wreaths')}>Fall & Winter Greenery</button>
                  </div>
                )}
              </div>

              {/* Holiday Decor Accordion */}
              <div className="mobile-nav-group">
                <button 
                  className="mobile-nav-title-btn"
                  onClick={() => toggleSection('decor')}
                >
                  <span style={{ fontWeight: 600 }}>Holiday Décor</span>
                  {expandedSection === 'decor' ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
                </button>
                {expandedSection === 'decor' && (
                  <div className="mobile-sublinks">
                    <button onClick={() => handleMobileNavClick('/category/decor')}>Shop All Holiday Décor</button>
                    <button onClick={() => handleMobileNavClick('/category/decor')}>Hand-Blown Glass Ornaments</button>
                    <button onClick={() => handleMobileNavClick('/category/decor')}>Woven Collars & Velvet Skirts</button>
                    <button onClick={() => handleMobileNavClick('/category/decor')}>Musical Snow Globes & Lanterns</button>
                  </div>
                )}
              </div>

              {/* Direct Feature Links */}
              <button className="mobile-nav-direct-link" onClick={() => handleMobileNavClick('/category/sale')}>
                <span style={{ color: 'var(--color-gold-deep)', fontWeight: 700 }}>Sale & Special Offers</span>
                <span className="badge-tag">Up to 40%</span>
              </button>

              <button className="mobile-nav-direct-link" onClick={() => handleMobileNavClick('/branch-sample-kit')}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Box size={16} />
                  <span>Branch Sample Kit ($29 Rebated)</span>
                </div>
              </button>

              <button className="mobile-nav-direct-link" onClick={() => handleMobileNavClick('/tree-finder')}>
                <span>Tree Finder Quiz</span>
                <span className="badge-tag" style={{ background: '#0e2a20', color: '#fff' }}>4-Step Quiz</span>
              </button>

              <button className="mobile-nav-direct-link" onClick={() => handleMobileNavClick('/flip-tree')}>
                <span>Patented Flip Tree® Setup</span>
              </button>

              <button className="mobile-nav-direct-link" onClick={() => handleMobileNavClick('/inspiration')}>
                <span>Sam Henderson's Inspiration Journal</span>
                <span className="badge-tag" style={{ background: 'var(--color-gold)', color: '#000' }}>Guides</span>
              </button>

              <button className="mobile-nav-direct-link" onClick={() => handleMobileNavClick('/customer-support')}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <HelpCircle size={16} />
                  <span>Customer Support & 3-Yr Warranty</span>
                </div>
              </button>

              <button className="mobile-nav-direct-link" onClick={() => handleMobileNavClick('/catalog-request')}>
                <span>Request Free 2026 Print Catalog</span>
              </button>
            </div>

            {/* Glow Mode Ambient Switcher for Mobile */}
            <div className="mobile-drawer-glow">
              <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#666', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <Sparkles size={14} color="var(--color-gold-deep)" />
                Glow Ambiance Mode:
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.4rem' }}>
                <button 
                  onClick={() => setGlowMode('daylight')}
                  className={`mobile-glow-btn ${glowMode === 'daylight' ? 'is-active' : ''}`}
                >
                  <Sun size={14} /> Day
                </button>
                <button 
                  onClick={() => setGlowMode('candlelight')}
                  className={`mobile-glow-btn ${glowMode === 'candlelight' ? 'is-active' : ''}`}
                >
                  <Flame size={14} /> Warm
                </button>
                <button 
                  onClick={() => setGlowMode('twinkly')}
                  className={`mobile-glow-btn ${glowMode === 'twinkly' ? 'is-active' : ''}`}
                >
                  <Sparkles size={14} /> Twinkly
                </button>
                <button 
                  onClick={() => setGlowMode('night')}
                  className={`mobile-glow-btn ${glowMode === 'night' ? 'is-active' : ''}`}
                >
                  <Moon size={14} /> Night
                </button>
              </div>

              {/* Snowfall Toggle for Mobile */}
              <div style={{ marginTop: '0.75rem', paddingTop: '0.75rem', borderTop: '1px solid #eee', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.82rem', fontWeight: 600, color: '#555', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <Snowflake size={14} /> Snowfall Effect:
                </span>
                <button
                  onClick={toggleSnow}
                  style={{
                    background: isSnowing ? 'var(--color-forest)' : '#eee',
                    color: isSnowing ? '#fff' : '#666',
                    padding: '0.3rem 0.75rem',
                    borderRadius: 20,
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    border: 'none',
                    cursor: 'pointer'
                  }}
                >
                  {isSnowing ? 'Active (ON)' : 'OFF'}
                </button>
              </div>
            </div>

            {/* Mobile Footer Call */}
            <div className="mobile-drawer-footer">
              <a href="tel:18885522572" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', color: '#143d2f', fontWeight: 700, textDecoration: 'none', padding: '0.75rem', background: '#f5f0e8', borderRadius: 6, fontSize: '0.9rem' }}>
                <Phone size={16} />
                Call: 1-888-55-BALSAM
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
