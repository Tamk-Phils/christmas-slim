import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export const Footer: React.FC = () => {
  const { showToast } = useCart();
  const [emailInput, setEmailInput] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput) return;
    showToast('Welcome to the Balsam Hill Holiday Club! Your $50 VIP voucher is CHEER50 🎁');
    setEmailInput('');
  };

  return (
    <>
      {/* VIP Newsletter Strip */}
      <section className="newsletter-strip">
        <div className="container">
          <div className="newsletter-inner">
            <div>
              <h3 className="newsletter-title">Join The Balsam Hill Holiday Club</h3>
              <p style={{ color: '#c9d5d0', fontSize: '0.95rem' }}>
                Sign up to receive our 2026 print catalog, private sale access, and an instant <strong>$50 Voucher Code</strong> for your first tree.
              </p>
            </div>

            <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
              <input
                type="email"
                className="newsletter-input"
                placeholder="Enter your email address..."
                value={emailInput}
                onChange={e => setEmailInput(e.target.value)}
                required
              />
              <button type="submit" className="btn-primary" style={{ whiteSpace: 'nowrap' }}>
                Get $50 Voucher
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Main Footer */}
      <footer className="site-footer">
        <div className="container">
          <div className="footer-grid">
            {/* Col 1: Brand Info */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                <svg className="brand-tree-icon" viewBox="0 0 100 100" style={{ width: 32, height: 32 }}>
                  <polygon points="50,5 65,30 55,30 72,55 60,55 80,82 20,82 40,55 28,55 45,30 35,30" />
                  <rect x="44" y="82" width="12" height="14" fill="#a67c33" />
                </svg>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 700, color: '#fff', letterSpacing: '0.1em' }}>
                  BALSAM HILL
                </span>
              </div>
              <p style={{ fontSize: '0.85rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                Since 2006, Balsam Hill has been the leading retailer of luxury artificial Christmas trees, handcrafted wreaths, garlands, and seasonal decor, celebrated worldwide for authentic realism.
              </p>
              <div style={{ fontSize: '0.8rem', color: 'var(--color-gold-light)' }}>
                Official Partner of the Hallmark Channel & HGTV Holiday
              </div>
            </div>

            {/* Col 2: Customer Care */}
            <div>
              <h4 className="footer-col-title">Customer Care</h4>
              <ul className="footer-links">
                <li><a href="tel:18885522572">Call: 1-888-55-BALSAM</a></li>
                <li><Link to="/customer-support">Track Order Status</Link></li>
                <li><Link to="/customer-support">Shipping & Returns</Link></li>
                <li><Link to="/warranty">Warranty Registration</Link></li>
                <li><Link to="/branch-sample-kit">Branch Sample Kit</Link></li>
              </ul>
            </div>

            {/* Col 3: Tree Guides */}
            <div>
              <h4 className="footer-col-title">Tree Resources</h4>
              <ul className="footer-links">
                <li><Link to="/tree-finder">Tree Finder Quiz</Link></li>
                <li><Link to="/branch-sample-kit">True Needle® Guide</Link></li>
                <li><Link to="/flip-tree">Flip Tree® Setup</Link></li>
                <li><Link to="/inspiration">Tree Fluffing & Shaping</Link></li>
                <li><Link to="/tree-finder">Ceiling Height Calculator</Link></li>
              </ul>
            </div>

            {/* Col 4: Inspiration */}
            <div>
              <h4 className="footer-col-title">Inspiration</h4>
              <ul className="footer-links">
                <li><Link to="/inspiration">Sam's Decorating Journal</Link></li>
                <li><Link to="/category/decor">Shop The Look Staged Rooms</Link></li>
                <li><Link to="/catalog-request">Request Print Catalog</Link></li>
                <li><Link to="/customer-support">Flagship Showrooms</Link></li>
                <li><Link to="/inspiration">Holiday Trend Report</Link></li>
              </ul>
            </div>

            {/* Col 5: Security & Awards */}
            <div>
              <h4 className="footer-col-title">Guaranteed Quality</h4>
              <p style={{ fontSize: '0.8rem', lineHeight: 1.6, marginBottom: '1rem' }}>
                Patented design innovations backed by our comprehensive 3-Year Warranty on tree frame and lights.
              </p>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                <span style={{ background: 'rgba(255, 255, 255, 0.1)', padding: '0.3rem 0.6rem', borderRadius: 4, fontSize: '0.75rem' }}>SSL 256-bit</span>
                <span style={{ background: 'rgba(255, 255, 255, 0.1)', padding: '0.3rem 0.6rem', borderRadius: 4, fontSize: '0.75rem' }}>Affirm 0% APR</span>
                <span style={{ background: 'rgba(255, 255, 255, 0.1)', padding: '0.3rem 0.6rem', borderRadius: 4, fontSize: '0.75rem' }}>Apple Pay</span>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div>
              © 2026 Balsam Hill®. All Rights Reserved. True Needle® and Flip Tree® are registered trademarks of Balsam Hill.
            </div>
            <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
              <Link to="/customer-support">Privacy Policy</Link>
              <Link to="/customer-support">Terms of Use</Link>
              <Link to="/flip-tree">Patents & Trademarks</Link>
              <Link to="/customer-support">Accessibility</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
