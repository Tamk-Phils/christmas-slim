import React, { useState } from 'react';
import type { Post } from '../types';
import { ArrowRight, X, Clock, Calendar } from 'lucide-react';

interface SamJournalProps {
  posts: Post[];
}

export const SamJournal: React.FC<SamJournalProps> = ({ posts }) => {
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  return (
    <section className="journal-section" id="sam-journal-anchor">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Expert Advice & Guides</span>
          <h2 className="section-title">Sam's Holiday Journal & Posts</h2>
          <p className="section-subtitle">
            Interior stylist and Balsam Hill Lead Creative Director Sam Henderson shares step-by-step masterclasses, fluffing guides, and lighting tips.
          </p>
        </div>

        {/* Designer Spotlight Hero Card */}
        <div className="designer-spotlight-card">
          <img
            src="/assets/images/tree-guide-hero.webp"
            alt="Sam Henderson decorating a Balsam Hill tree"
            className="designer-photo"
          />
          <div>
            <div className="designer-role">Lead Holiday Stylist & Creative Director</div>
            <h3 className="designer-name">Sam Henderson</h3>
            <p className="designer-quote">
              "Your Christmas tree is the glowing heart of your home throughout December. It should reflect your family's story, filled with warm light and branches that invite everyone to gather."
            </p>
            <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              With over 15 years curating holiday showcases for magazine editorial covers, architectural homes, and broadcast television, Sam personally designs our seasonal palettes and guides customers to create professional showroom results at home.
            </p>
            <div style={{ display: 'flex', gap: '2rem', fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-forest)', flexWrap: 'wrap' }}>
              <div>✓ 250+ Homes Styled</div>
              <div>✓ Featured on HGTV & Hallmark</div>
              <div>✓ Author of The Holiday Home</div>
            </div>
          </div>
        </div>

        {/* Articles Grid (Sam's Posts) */}
        <div className="posts-grid" id="posts-grid">
          {posts.map(post => (
            <div
              key={post.id}
              className="post-card"
              onClick={() => setSelectedPost(post)}
            >
              <img src={post.image} alt={post.title} className="post-img" loading="lazy" />
              <div className="post-content">
                <div className="post-date-tag">
                  {post.date} • {post.readTime}
                </div>
                <h3 className="post-title">{post.title}</h3>
                <p className="post-excerpt">{post.excerpt}</p>
                <div className="post-read-link">
                  <span>Read Sam's Full Guide</span>
                  <ArrowRight size={14} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Post Full Reading Modal */}
      {selectedPost && (
        <div className="modal-overlay is-open" onClick={() => setSelectedPost(null)}>
          <div className="modal-window" onClick={e => e.stopPropagation()}>
            <button
              className="modal-close-btn"
              onClick={() => setSelectedPost(null)}
              aria-label="Close reading modal"
            >
              <X size={20} />
            </button>
            <div style={{ padding: '2.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--color-gold-deep)', fontWeight: 700, marginBottom: '0.75rem' }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}><Calendar size={13} /> {selectedPost.date}</span>
                <span>•</span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}><Clock size={13} /> {selectedPost.readTime}</span>
                <span>•</span>
                <span>BY {selectedPost.author.toUpperCase()}</span>
              </div>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.25rem', color: 'var(--color-forest)', marginBottom: '1.5rem', lineHeight: 1.2 }}>
                {selectedPost.title}
              </h2>
              <img
                src={selectedPost.image}
                alt={selectedPost.title}
                style={{ width: '100%', maxHeight: '380px', objectFit: 'cover', borderRadius: 'var(--radius-md)', marginBottom: '2rem' }}
              />
              <div
                style={{ color: 'var(--color-text-main)', fontSize: '1.05rem', lineHeight: 1.8 }}
                dangerouslySetInnerHTML={{ __html: selectedPost.content }}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
