import React from 'react';
import { Link } from 'react-router-dom';
import type { Product } from '../types';
import { TreeFinderWizard } from '../components/TreeFinderWizard';
import { ChevronRight, Sparkles } from 'lucide-react';

interface TreeFinderPageProps {
  products: Product[];
}

export const TreeFinderPage: React.FC<TreeFinderPageProps> = ({ products }) => {
  return (
    <div className="tree-finder-page" style={{ background: '#faf7f2', minHeight: '100vh', paddingBottom: '6rem' }}>
      {/* Breadcrumb Strip */}
      <div style={{ background: '#ffffff', borderBottom: '1px solid #eee', padding: '0.85rem 1rem' }}>
        <div className="container" style={{ maxWidth: '1240px', margin: '0 auto', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: '#666' }}>
          <Link to="/" style={{ color: '#444', textDecoration: 'none' }}>Home</Link>
          <ChevronRight size={13} />
          <span style={{ color: '#143d2f', fontWeight: 600 }}>Tree Finder Quiz</span>
        </div>
      </div>

      {/* Header Banner */}
      <div style={{ background: '#0e2a20', color: '#ffffff', padding: '3.5rem 1rem', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#fae19c', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>
            <Sparkles size={16} />
            <span>Interactive Consultant</span>
          </div>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.4rem, 4vw, 3.4rem)', margin: '0 0 1rem', fontWeight: 600 }}>
            Find Your Perfect Christmas Tree
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#e0ece6', lineHeight: 1.6, margin: 0 }}>
            Answer 4 quick questions about your room height, spatial layout, foliage realism preference, and lighting style to receive your personalized Balsam Hill recommendation.
          </p>
        </div>
      </div>

      {/* Interactive Quiz Engine */}
      <div style={{ marginTop: '2rem' }}>
        <TreeFinderWizard products={products} />
      </div>
    </div>
  );
};
