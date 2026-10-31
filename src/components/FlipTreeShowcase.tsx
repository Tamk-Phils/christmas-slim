import React, { useState } from 'react';

export const FlipTreeShowcase: React.FC = () => {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      num: 1,
      title: 'Roll Into Place',
      desc: 'Built-in rolling stand glides smoothly across rugs or hardwood without scratching.',
      explain: 'Step 1: Roll storage bag directly into place with built-in rolling wheels. No heavy lifting required.'
    },
    {
      num: 2,
      title: 'Flip & Lock',
      desc: 'Step on the safety foot pedal and flip the tree 180° upright into its locked base.',
      explain: 'Step 2: Press the foot pedal to flip the tree 180° upright into its weighted locking stand.'
    },
    {
      num: 3,
      title: 'Attach & Light Up',
      desc: 'Place the lightweight top section. Easy Plug® trunk lights up instantly!',
      explain: 'Step 3: Easy Plug® trunk automatically connects all micro-lights through the core. Simply plug in the base cord!'
    }
  ];

  return (
    <section className="flip-tree-section" id="flip-tree-anchor">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Patented Setup Innovation</span>
          <h2 className="section-title">Assembly in Under 3 Minutes: Flip Tree®</h2>
          <p className="section-subtitle">
            Click the steps below to see how our patented Flip Tree® mechanism eliminates heavy lifting completely.
          </p>
        </div>

        <div className="flip-interactive-card">
          <div className="flip-steps-grid">
            {steps.map(s => (
              <button
                key={s.num}
                className={`flip-step-box ${activeStep === s.num ? 'is-active' : ''}`}
                onClick={() => setActiveStep(s.num)}
              >
                <span className="flip-step-number">Step {s.num}</span>
                <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: 'var(--color-forest)', marginBottom: '0.5rem' }}>
                  {s.title}
                </h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
                  {s.desc}
                </p>
              </button>
            ))}
          </div>

          <div className="flip-animation-stage">
            <div className={`tree-model-graphic flip-step-${activeStep}`} id="tree-model-graphic">
              <svg viewBox="0 0 200 300" width="100%" height="100%">
                <polygon points="100,20 135,70 120,70 155,140 135,140 175,220 25,220 65,140 45,140 80,70 65,70" fill="#286e57" />
                <rect x="90" y="220" width="20" height="40" fill="#a67c33" />
                <rect x="60" y="260" width="80" height="12" rx="4" fill="#143d2f" stroke="#c59b4c" strokeWidth="2" />
                <circle cx="70" cy="280" r="8" fill="#444" stroke="#c59b4c" strokeWidth="2" />
                <circle cx="130" cy="280" r="8" fill="#444" stroke="#c59b4c" strokeWidth="2" />
                <circle cx="100" cy="120" r="70" fill={activeStep === 3 ? 'rgba(255, 217, 125, 0.45)' : 'rgba(255, 217, 125, 0.15)'} />
              </svg>
            </div>
          </div>

          <p id="flip-step-explain" style={{ textAlign: 'center', marginTop: '1.5rem', fontWeight: 600, color: 'var(--color-forest)' }}>
            {steps[activeStep - 1].explain}
          </p>
        </div>
      </div>
    </section>
  );
};
