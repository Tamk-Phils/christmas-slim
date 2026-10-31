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
      {/* Top Grey Marquee Banner */}
      <div className="top-marquee-bar" style={{ background: '#444', color: '#fff', fontSize: '0.75rem', padding: '0.35rem 1rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
            <span><strong>Holiday Sale:</strong> Save Now with Free Ground Shipping on Everything!</span>
            <span className="hide-on-mobile" style={{ opacity: 0.8 }}>•</span>
            <span className="hide-on-mobile">Buy Now, Pay Later with PayPal</span>
            <span className="hide-on-mobile" style={{ opacity: 0.8 }}>•</span>
            <span>
              EXTRA $50 off orders $750+ with code:{' '}
              <button 
                onClick={copyCode} 
                style={{ background: 'rgba(255,255,255,0.2)', color: '#fff', border: '1px dashed #fff', padding: '0.1rem 0.4rem', borderRadius: 3, fontWeight: 700, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 4 }}
                title="Click to copy HURRY50"
              >
                HURRY50 <Copy size={11} />
              </button>
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div className="hide-on-mobile" style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.72rem' }}>
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

      {/* Gold Sales Banner */}
      <div className="top-sales-banner" style={{ background: '#88631b', color: '#ffffff', padding: '0.55rem 1rem', textAlign: 'center', fontSize: '0.88rem', fontWeight: 600, letterSpacing: '0.02em' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
          <span>Save up to 40% + Free Shipping on All Christmas Trees &amp; Decor</span>
          <span style={{ background: 'rgba(0,0,0,0.25)', padding: '0.2rem 0.6rem', borderRadius: '3px', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Ends Tomorrow
          </span>
          <Link 
            to="/category/sale" 
            style={{ color: '#fff', textDecoration: 'underline', fontWeight: 700, fontSize: '0.85rem' }}
          >
            Shop Sale &rarr;
          </Link>
        </div>
      </div>
    </>
  );
};
