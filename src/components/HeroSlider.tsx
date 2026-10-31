import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';

export const HeroSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 'slide-1',
      eyebrow: 'Signature Collection • Crafted Since 2006',
      title: 'The World’s Most Realistic Christmas Trees',
      description: 'Experience our patented True Needle® foliage molded directly from living forest evergreens, paired with pre-strung candlelight micro-LEDs that transform your home into an unforgettable holiday sanctuary.',
      primaryBtnText: 'Shop Signature Trees',
      primaryBtnLink: '#catalog-anchor',
      secondaryBtnText: 'Find My Perfect Tree →',
      secondaryBtnLink: '#tree-finder-anchor',
      image: '/assets/images/hero-banner.webp',
      alt: 'Balsam Hill Living Room Christmas Tree'
    },
    {
      id: 'slide-2',
      eyebrow: 'Patented Innovation • Zero Heavy Lifting',
      title: 'Effortless Setup with Flip Tree® Technology',
      description: 'Say goodbye to heavy lifting and tangled wires. Our patented Flip Tree® rolls on smooth wheels, flips upright in under 3 minutes, and automatically lights through the Easy Plug® center trunk.',
      primaryBtnText: 'Explore Flip Tree® Demo',
      primaryBtnLink: '#flip-tree-anchor',
      secondaryBtnText: 'Order Sample Kit ($29)',
      secondaryBtnLink: '#sample-kit-anchor',
      image: '/assets/images/balsam-fir-flip.jpg',
      alt: 'Balsam Hill Flip Tree'
    },
    {
      id: 'slide-3',
      eyebrow: 'Curated Designer Lookbooks • By Sam Henderson',
      title: 'Shop The Complete Holiday Look',
      description: 'Bring professional interior styling into your living room. Discover matching pre-lit wreaths, lush mantel garlands, handcrafted willow collars, and artisan mouth-blown glass ornaments.',
      primaryBtnText: 'Explore Interactive Room',
      primaryBtnLink: '#shop-look-anchor',
      secondaryBtnText: "Read Sam's Styling Tips",
      secondaryBtnLink: '#sam-journal-anchor',
      image: '/assets/images/bh-balsam-fir.jpg',
      alt: 'BH Balsam Fir Christmas Tree'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 7500);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="hero-slider-section">
      {/* Sparkling Micro-Lights Overlay */}
      <div className="sparkle-layer" aria-hidden="true">
        {Array.from({ length: 42 }).map((_, i) => {
          const top = 18 + Math.random() * 65;
          const left = 20 + Math.random() * 55;
          const delay = (Math.random() * 3).toFixed(2);
          const duration = (1.8 + Math.random() * 2).toFixed(2);
          return (
            <div
              key={i}
              className="sparkle-dot"
              style={{
                top: `${top}%`,
                left: `${left}%`,
                animationDelay: `${delay}s`,
                animationDuration: `${duration}s`
              }}
            />
          );
        })}
      </div>

      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`hero-slide ${index === currentSlide ? 'is-active' : ''}`}
        >
          <img
            src={slide.image}
            alt={slide.alt}
            className="hero-slide-bg"
            loading={index === 0 ? 'eager' : 'lazy'}
          />
          <div className="hero-overlay" />
          <div className="container">
            <div className="hero-slide-content">
              <div className="hero-eyebrow">
                <span>{slide.eyebrow}</span>
              </div>
              <h1 className="hero-title">
                {slide.title}
              </h1>
              <p className="hero-description">
                {slide.description}
              </p>
              <div className="hero-actions">
                <a href={slide.primaryBtnLink} className="btn-primary">
                  <span>{slide.primaryBtnText}</span>
                  <ArrowUpRight size={18} />
                </a>
                <a href={slide.secondaryBtnLink} className="btn-secondary">
                  <span>{slide.secondaryBtnText}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Controls */}
      <div className="hero-controls">
        <button
          className="hero-arrow-btn"
          onClick={() => setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length)}
          aria-label="Previous Slide"
        >
          <ArrowLeft size={18} />
        </button>
        <div className="hero-dots">
          {slides.map((_, i) => (
            <span
              key={i}
              className={`hero-dot ${i === currentSlide ? 'is-active' : ''}`}
              onClick={() => setCurrentSlide(i)}
            />
          ))}
        </div>
        <button
          className="hero-arrow-btn"
          onClick={() => setCurrentSlide(prev => (prev + 1) % slides.length)}
          aria-label="Next Slide"
        >
          <ArrowRight size={18} />
        </button>
      </div>
    </section>
  );
};
