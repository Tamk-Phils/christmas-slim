import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useGlow } from '../../context/GlowContext';
import { useCart } from '../../context/CartContext';
import { Copy, Snowflake } from 'lucide-react';

export const PromoBar: React.FC = () => {
  const { isSnowing, toggleSnow } = useGlow();
  const { showToast } = useCart();

  const [timeLeft, setTimeLeft] = useState({ hours: '08', mins: '42', secs: '19' });

  useEffect(() => {
    const updateCountdown = () => {
      const target = new Date();
      target.setHours(23, 59, 59, 999);
      let diff = target.getTime() - new Date().getTime();
      if (diff <= 0) diff = 86400000;

      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const mins = Math.floor((diff / (1000 * 60)) % 60);
      const secs = Math.floor((diff / 1000) % 60);

      setTimeLeft({
        hours: String(hours).padStart(2, '0'),
        mins: String(mins).padStart(2, '0'),
        secs: String(secs).padStart(2, '0')
      });
    };

    const interval = setInterval(updateCountdown, 1000);
    updateCountdown();
    return () => clearInterval(interval);
  }, []);

  const copyCode = () => {
    navigator.clipboard.writeText('BALSAM50');
    showToast('Promo Code BALSAM50 copied to clipboard! (50% Off Trees) 🎄');
  };

  return (
    <>
      {/* Top Grey Marquee Banner - Desktop only */}
      <div className="top-marquee-bar desktop-only-marquee" style={{ background: '#383838', color: '#fff', fontSize: '0.75rem', padding: '0.35rem 1rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'nowrap' }}>
            <span><strong>Holiday Sale:</strong> Free Ground Shipping on Everything!</span>
            <span style={{ opacity: 0.5 }}>•</span>
            <span>Buy Now, Pay Later with PayPal</span>
            <span style={{ opacity: 0.5 }}>•</span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
              EXTRA $50 off $750+ code:{' '}
              <button 
                onClick={copyCode} 
                style={{ background: 'rgba(255,255,255,0.18)', color: '#fff', border: '1px dashed #fff', padding: '0.1rem 0.4rem', borderRadius: 3, fontWeight: 700, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 4 }}
                title="Click to copy HURRY50"
              >
                HURRY50 <Copy size={11} />
              </button>
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexShrink: 0 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.72rem' }}>
              <span>Ends in:</span>
              <span style={{ background: '#222', padding: '0.1rem 0.3rem', borderRadius: 2 }}>{timeLeft.hours}h</span>:
              <span style={{ background: '#222', padding: '0.1rem 0.3rem', borderRadius: 2 }}>{timeLeft.mins}m</span>:
              <span style={{ background: '#222', padding: '0.1rem 0.3rem', borderRadius: 2 }}>{timeLeft.secs}s</span>
            </div>
            <button
              onClick={toggleSnow}
              style={{ background: 'transparent', border: 'none', color: '#fff', display: 'flex', alignItems: 'center', gap: '0.25rem', cursor: 'pointer', fontSize: '0.72rem', opacity: 0.9 }}
              title="Toggle Snowfall Particle Canvas"
            >
              <Snowflake size={12} />
              <span>Snow: <strong>{isSnowing ? 'ON' : 'OFF'}</strong></span>
            </button>
          </div>
        </div>
      </div>

      {/* Gold Sales Banner - Compact and responsive */}
      <div className="top-sales-banner">
        <div className="container top-sales-banner-inner">
          <span className="sales-banner-text">
            <strong>Holiday Sale:</strong> Save up to 40% + Free Shipping
          </span>
          <span className="sales-banner-tag">
            Ends Tomorrow
          </span>
          <Link 
            to="/category/sale" 
            className="sales-banner-link"
          >
            Shop Sale &rarr;
          </Link>
        </div>
      </div>
    </>
  );
};
