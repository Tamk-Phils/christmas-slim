import React from 'react';
import { ShieldCheck, Truck, Sparkles, Box } from 'lucide-react';

export const TrustStrip: React.FC = () => {
  return (
    <section className="trust-strip">
      <div className="container">
        <div className="trust-grid">
          <div className="trust-item">
            <div className="trust-icon-box">
              <ShieldCheck size={24} />
            </div>
            <div>
              <h4 className="trust-title">3-Year Limited Warranty</h4>
              <p className="trust-subtitle">Full coverage on foliage, lights & frame</p>
            </div>
          </div>

          <div className="trust-item">
            <div className="trust-icon-box">
              <Truck size={24} />
            </div>
            <div>
              <h4 className="trust-title">100% Free Shipping</h4>
              <p className="trust-subtitle">Free standard shipping on all orders</p>
            </div>
          </div>

          <div className="trust-item">
            <div className="trust-icon-box">
              <Sparkles size={24} />
            </div>
            <div>
              <h4 className="trust-title">True Needle® Realism</h4>
              <p className="trust-subtitle">Molded from real evergreen branches</p>
            </div>
          </div>

          <div className="trust-item">
            <div className="trust-icon-box">
              <Box size={24} />
            </div>
            <div>
              <h4 className="trust-title">Branch Sample Kit</h4>
              <p className="trust-subtitle">Touch 20+ cuttings at home for $29</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
