import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import type { Product } from '../types';
import { Check, RotateCcw, ArrowRight, ArrowLeft } from 'lucide-react';

interface TreeFinderWizardProps {
  products: Product[];
}

export const TreeFinderWizard: React.FC<TreeFinderWizardProps> = ({ products }) => {
  const { addToCart } = useCart();
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [isCompleted, setIsCompleted] = useState(false);

  const questions = [
    {
      title: "What is your room's ceiling height?",
      options: [
        { label: '8 Feet', desc: 'Standard ceiling (Recommended: 6.5ft to 7ft Tree)', icon: '🏠', val: '8' },
        { label: '9 Feet', desc: 'Popular modern ceiling (Recommended: 7.5ft Tree)', icon: '🏛️', val: '9' },
        { label: '10 - 12 Feet', desc: 'Tall vaulted ceiling (Recommended: 9ft to 10ft Tree)', icon: '🏰', val: '11' },
        { label: '14+ Feet', desc: 'Grand two-story foyer (Recommended: 12ft+ Tree)', icon: '✨', val: '14' }
      ]
    },
    {
      title: "What shape suits your living space?",
      options: [
        { label: 'Full & Lush', desc: 'Classic majestic silhouette with wide lower girth', icon: '🎄', val: 'full' },
        { label: 'Slim & Space-Saving', desc: 'Graceful narrow footprint for corners & condos', icon: '🌲', val: 'slim' },
        { label: 'Flatback / Corner', desc: 'Rests flush against walls for ultra-compact rooms', icon: '📐', val: 'flatback' }
      ]
    },
    {
      title: "What level of needle realism do you desire?",
      options: [
        { label: 'Most Realistic True Needle®', desc: 'Polyethylene molded directly from real forest cuttings', icon: '🌿', val: 'trueneedle' },
        { label: 'Realistic Foliage Blend', desc: 'True Needle® exterior tips with classic PVC filler core', icon: '🍃', val: 'blend' },
        { label: 'Frosted Flocked', desc: 'Naturally dusted with realistic powdered snow flocking', icon: '❄️', val: 'frosted' }
      ]
    },
    {
      title: "What is your preferred lighting style?",
      options: [
        { label: 'Candlelight Clear LED', desc: 'Warm golden 2700K ambient glow with micro bulbs', icon: '🕯️', val: 'candlelight' },
        { label: 'Twinkly® Smart RGB', desc: 'App-controlled custom color animations & sound sync', icon: '📱', val: 'twinkly' },
        { label: 'Unlit Artisan', desc: 'Ready for your family heirloom lights & traditions', icon: '✨', val: 'unlit' }
      ]
    }
  ];

  const handleSelect = (val: string) => {
    setAnswers(prev => ({ ...prev, [currentStep]: val }));
  };

  const handleNext = () => {
    if (!answers[currentStep]) return;
    if (currentStep < questions.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setAnswers({});
    setIsCompleted(false);
  };

  // Determine matching tree based on quiz answers
  const recommendedTree = answers[1] === 'slim'
    ? products.find(p => p.id === 'silverado-slim') || products[0]
    : answers[2] === 'frosted'
    ? products.find(p => p.id === 'frosted-fraser-fir') || products[0]
    : products.find(p => p.id === 'bh-balsam-fir') || products[0];

  const currentQ = questions[currentStep];

  return (
    <section className="tree-finder-section" id="tree-finder-anchor">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Personalized Sizing & Style</span>
          <h2 className="section-title">Find Your Perfect Christmas Tree</h2>
          <p className="section-subtitle">
            Answer 4 quick questions about your room, ceiling height, and lighting preference to see your custom tree match.
          </p>
        </div>

        <div className="wizard-card">
          {/* Step Indicator Nodes */}
          <div className="wizard-steps-indicator">
            {questions.map((_, idx) => (
              <div
                key={idx}
                className={`wizard-step-node ${
                  isCompleted || idx < currentStep
                    ? 'is-complete'
                    : idx === currentStep
                    ? 'is-active'
                    : ''
                }`}
              >
                {idx < currentStep || isCompleted ? <Check size={16} /> : idx + 1}
              </div>
            ))}
          </div>

          {!isCompleted ? (
            <div>
              <h3 className="wizard-question-title">{currentQ.title}</h3>
              <div className="wizard-options-grid">
                {currentQ.options.map(opt => (
                  <button
                    key={opt.val}
                    className={`wizard-option-btn ${answers[currentStep] === opt.val ? 'is-selected' : ''}`}
                    onClick={() => handleSelect(opt.val)}
                  >
                    <div className="option-icon">{opt.icon}</div>
                    <div className="option-name">{opt.label}</div>
                    <div className="option-desc">{opt.desc}</div>
                  </button>
                ))}
              </div>

              <div className="wizard-footer">
                <button
                  className="btn-secondary"
                  onClick={handleBack}
                  style={{
                    visibility: currentStep === 0 ? 'hidden' : 'visible',
                    color: 'var(--color-forest-dark)',
                    borderColor: 'var(--color-cream-border)'
                  }}
                >
                  <ArrowLeft size={16} />
                  <span>Back</span>
                </button>
                <button
                  className="btn-primary"
                  onClick={handleNext}
                  disabled={!answers[currentStep]}
                  style={{ opacity: !answers[currentStep] ? 0.6 : 1 }}
                >
                  <span>{currentStep === questions.length - 1 ? 'See Recommended Tree' : 'Next Step'}</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ) : (
            <div className="wizard-result-box is-active">
              <div className="wizard-result-grid">
                <img
                  src={recommendedTree.image}
                  alt={recommendedTree.name}
                  className="wizard-result-img"
                />
                <div>
                  <div className="match-score-badge">✓ 99% Perfect Match For Your Home</div>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.2rem', color: 'var(--color-forest)', marginBottom: '0.5rem' }}>
                    {recommendedTree.name}
                  </h3>
                  <p style={{ color: 'var(--color-text-muted)', marginBottom: '1rem', lineHeight: 1.6 }}>
                    {recommendedTree.description}
                  </p>
                  <div style={{ background: 'var(--ambient-bg)', padding: '1.25rem', borderRadius: 'var(--radius-md)', marginBottom: '1.5rem', border: '1px solid var(--color-cream-border)' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', fontSize: '0.875rem' }}>
                      <div><strong>Recommended Height:</strong> 7.5 Feet</div>
                      <div><strong>Lighting:</strong> {recommendedTree.lightStyle}</div>
                      <div><strong>Girth:</strong> 60" Diameter</div>
                      <div><strong>Branch Realism:</strong> {recommendedTree.realism}</div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem', marginBottom: '1.5rem' }}>
                    <span style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--color-forest)' }}>
                      ${recommendedTree.heights[1]?.price || recommendedTree.heights[0].price}
                    </span>
                    <span style={{ fontSize: '1.2rem', textDecoration: 'line-through', color: 'var(--color-text-light)' }}>
                      ${recommendedTree.heights[1]?.originalPrice || recommendedTree.heights[0].originalPrice}
                    </span>
                    <span style={{ background: 'var(--color-gold)', color: 'var(--color-forest-dark)', fontWeight: 700, padding: '0.2rem 0.6rem', borderRadius: '4px', fontSize: '0.8rem' }}>
                      SAVE $400 TODAY
                    </span>
                  </div>
                  <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                    <button
                      className="btn-primary"
                      onClick={() => addToCart(recommendedTree, 1)}
                    >
                      Add Recommended Tree To Cart
                    </button>
                    <button
                      className="btn-secondary"
                      style={{ color: 'var(--color-forest-dark)', borderColor: 'var(--color-forest)' }}
                      onClick={handleReset}
                    >
                      <RotateCcw size={16} />
                      <span>Start Quiz Over</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
