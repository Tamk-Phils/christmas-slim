import React, { useState, useRef, useCallback } from 'react';
import { Check } from 'lucide-react';

export const NeedleComparisonSlider: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isDragging = useRef(false);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    let offsetX = clientX - rect.left;
    if (offsetX < 0) offsetX = 0;
    if (offsetX > rect.width) offsetX = rect.width;
    const percentage = (offsetX / rect.width) * 100;
    setSliderPosition(percentage);
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    handleMove(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    handleMove(e.clientX);
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  return (
    <section className="needle-comparison-section" id="needle-comparison-anchor">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Patented Foliage Realism</span>
          <h2 className="section-title">True Needle® vs. Traditional Trees</h2>
          <p className="section-subtitle">
            Slide the handle below to see how Balsam Hill's injection-molded polyethylene needles mimic the natural texture and color variation of living evergreens.
          </p>
        </div>

        <div className="comparison-wrapper">
          <div
            className="comparison-slider-container"
            ref={containerRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchMove}
            onTouchMove={handleTouchMove}
          >
            {/* Background Image: Classic Traditional Needle */}
            <img
              src="/assets/images/traditional-needle-demo.jpg"
              alt="Classic Traditional PVC Tree Needles"
              className="comparison-img comparison-before"
            />

            {/* Foreground Clipped Image: True Needle Realism */}
            <div
              className="comparison-after-wrap"
              style={{ width: `${sliderPosition}%` }}
            >
              <img
                src="/assets/images/needle-realism-demo.jpg"
                alt="Balsam Hill True Needle Polyethylene"
                className="comparison-img"
              />
            </div>

            {/* Draggable Handle */}
            <div
              className="comparison-handle"
              style={{ left: `${sliderPosition}%` }}
            >
              <span>‹ ›</span>
            </div>

            <div className="comparison-badge comparison-badge-left">
              <span>True Needle® Polyethylene (PE)</span>
            </div>
            <div className="comparison-badge comparison-badge-right">
              <span>Classic Shredded PVC Needles</span>
            </div>
          </div>

          {/* Details Grid */}
          <div className="comparison-details-grid">
            <div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', color: 'var(--color-gold-light)', marginBottom: '1rem' }}>
                Balsam Hill True Needle® Technology
              </h3>
              <ul className="needle-feature-list">
                <li>
                  <Check size={20} color="var(--color-gold)" />
                  <span><strong>Molded from Living Evergreens:</strong> Polyethylene captures organic needle ridges, woody stems, and delicate tip curves.</span>
                </li>
                <li>
                  <Check size={20} color="var(--color-gold)" />
                  <span><strong>Rich Multi-Tone Color:</strong> Deep forest greens blended with fresh spring growth tips and silvery undersides.</span>
                </li>
                <li>
                  <Check size={20} color="var(--color-gold)" />
                  <span><strong>Sturdy Branch Support:</strong> Inner structural wire easily holds your heaviest heirloom glass ornaments without sagging.</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', color: 'var(--color-gold-light)', marginBottom: '1rem' }}>
                The Balsam Hill Difference
              </h3>
              <ul className="needle-feature-list">
                <li>
                  <Check size={20} color="var(--color-gold)" />
                  <span><strong>No Plastic Shred Look:</strong> Traditional trees use flat shredded PVC film that crushes easily and looks artificial.</span>
                </li>
                <li>
                  <Check size={20} color="var(--color-gold)" />
                  <span><strong>Flame-Retardant & Non-Allergenic:</strong> Safe for homes with pets and sensitive allergy sufferers.</span>
                </li>
                <li>
                  <Check size={20} color="var(--color-gold)" />
                  <span><strong>Pre-Wired Micro LEDs:</strong> Hand-strung light cords match branch colors to remain completely invisible.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
