import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import type { Post, Product } from '../types';
import { Calendar, Clock, ChevronRight, X, ArrowRight, Sparkles } from 'lucide-react';

interface InspirationPageProps {
  posts: Post[];
  products: Product[];
}

export const InspirationPage: React.FC<InspirationPageProps> = ({ posts, products }) => {
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  return (
    <div className="inspiration-page" style={{ background: '#faf7f2', minHeight: '100vh', paddingBottom: '6rem' }}>
      {/* Editorial Hero Banner */}
      <div
        style={{
          position: 'relative',
          background: '#0e2a20',
          color: '#ffffff',
          padding: '4.5rem 1rem 4rem',
          textAlign: 'center',
          overflow: 'hidden'
        }}
      >
        <img
          src="/assets/images/tree-guide-hero.webp"
          alt="Sam Henderson Holiday Design Inspiration"
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.35 }}
        />
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(180deg, rgba(14,42,32,0.85) 0%, rgba(14,42,32,0.96) 100%)' }} />

        <div className="container" style={{ position: 'relative', zIndex: 2, maxWidth: '850px', margin: '0 auto' }}>
          <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', fontSize: '0.85rem', color: '#c59b4c', marginBottom: '1.25rem' }}>
            <Link to="/" style={{ color: '#ffffff', textDecoration: 'none' }}>Home</Link>
            <ChevronRight size={14} />
            <span>Holiday Inspiration &amp; Design Journal</span>
          </nav>

          <span style={{ color: '#fae19c', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.12em' }}>
            Masterclass Editorial
          </span>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.4rem, 4.5vw, 3.6rem)', margin: '0.5rem 0 1rem', fontWeight: 600 }}>
            Sam Henderson’s Holiday Journal
          </h1>
          <p style={{ fontSize: '1.15rem', color: '#e0ece6', lineHeight: 1.6, margin: 0 }}>
            Celebrated HGTV interior stylist and Balsam Hill design ambassador shares his seasonal secrets for tree fluffing, ribbon layering, and lighting perfection.
          </p>
        </div>
      </div>

      <div className="container" style={{ maxWidth: '1240px', margin: '3rem auto 0', padding: '0 1rem' }}>
        {/* Featured Post Card */}
        {posts[0] && (
          <div
            style={{
              background: '#ffffff',
              borderRadius: 12,
              overflow: 'hidden',
              boxShadow: '0 8px 24px rgba(0,0,0,0.06)',
              border: '1px solid #ebd9c0',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              marginBottom: '3.5rem'
            }}
          >
            <div style={{ position: 'relative', minHeight: '340px' }}>
              <img
                src={posts[0].image}
                alt={posts[0].title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div style={{ position: 'absolute', top: '1rem', left: '1rem', background: 'var(--color-forest)', color: '#fff', padding: '0.35rem 0.8rem', borderRadius: 4, fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase' }}>
                Featured Story
              </div>
            </div>

            <div style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '0.85rem', color: '#777', marginBottom: '0.75rem' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}><Calendar size={14} /> {posts[0].date}</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}><Clock size={14} /> {posts[0].readTime}</span>
              </div>

              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', color: '#143d2f', margin: '0 0 1rem', lineHeight: 1.25, fontWeight: 600 }}>
                {posts[0].title}
              </h2>

              <p style={{ color: '#555', fontSize: '1.05rem', lineHeight: 1.6, margin: '0 0 1.75rem' }}>
                {posts[0].excerpt}
              </p>

              <div>
                <button
                  onClick={() => setSelectedPost(posts[0])}
                  style={{
                    background: 'var(--color-forest)',
                    color: '#ffffff',
                    border: 'none',
                    padding: '0.85rem 1.8rem',
                    borderRadius: 6,
                    fontWeight: 700,
                    fontSize: '0.95rem',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    cursor: 'pointer'
                  }}
                >
                  <span>Read Full Masterclass</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Stories Grid */}
        <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', color: '#143d2f', marginBottom: '1.75rem', fontWeight: 600 }}>
          Recent Design Articles &amp; Styling Guides
        </h3>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
          {posts.slice(1).map(post => (
            <div
              key={post.id}
              style={{
                background: '#ffffff',
                borderRadius: 8,
                overflow: 'hidden',
                border: '1px solid #ebd9c0',
                boxShadow: '0 4px 16px rgba(0,0,0,0.04)',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <div style={{ position: 'relative', aspectRatio: '16 / 10', overflow: 'hidden' }}>
                <img
                  src={post.image}
                  alt={post.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              <div style={{ padding: '1.75rem', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.8rem', color: '#777', marginBottom: '0.5rem' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}><Calendar size={13} /> {post.date}</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}><Clock size={13} /> {post.readTime}</span>
                  </div>

                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: '#143d2f', margin: '0 0 0.75rem', lineHeight: 1.3 }}>
                    {post.title}
                  </h3>

                  <p style={{ color: '#666', fontSize: '0.92rem', lineHeight: 1.5, margin: '0 0 1.5rem' }}>
                    {post.excerpt}
                  </p>
                </div>

                <button
                  onClick={() => setSelectedPost(post)}
                  style={{
                    background: 'transparent',
                    color: 'var(--color-forest)',
                    border: 'none',
                    fontWeight: 700,
                    fontSize: '0.9rem',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    cursor: 'pointer',
                    padding: 0
                  }}
                >
                  <span>Read Story</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Shop Sam's Curated Trees Strip */}
        <div style={{ background: '#ffffff', padding: '2.5rem', borderRadius: 12, border: '1px solid #ebd9c0', textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#c59b4c', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
            <Sparkles size={16} />
            <span>Designer Collection</span>
          </div>
          <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.2rem', color: '#143d2f', margin: '0 0 0.75rem' }}>
            Shop Sam's Signature Holiday Trees
          </h3>
          <p style={{ color: '#666', maxWidth: '650px', margin: '0 auto 1.75rem' }}>
            Discover the exact trees, garlands, and French country ornaments showcased in Sam Henderson's seasonal styling tutorials.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            {products.slice(0, 3).map(p => (
              <Link
                key={p.id}
                to={`/product/${p.id}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  background: '#faf7f2',
                  padding: '0.75rem 1.25rem',
                  borderRadius: 6,
                  border: '1px solid #ddd',
                  textDecoration: 'none',
                  color: '#143d2f',
                  fontWeight: 600
                }}
              >
                <img src={p.image} alt={p.name} style={{ width: 44, height: 44, borderRadius: 4, objectFit: 'cover' }} />
                <span>{p.name} (${p.heights[0].price})</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Reading Modal */}
      {selectedPost && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0,0,0,0.65)',
            backdropFilter: 'blur(4px)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1rem'
          }}
          onClick={() => setSelectedPost(null)}
        >
          <div
            style={{
              background: '#ffffff',
              maxWidth: '750px',
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
              borderRadius: 12,
              padding: '2.5rem',
              position: 'relative'
            }}
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedPost(null)}
              style={{
                position: 'absolute',
                top: '1.25rem',
                right: '1.25rem',
                background: '#eee',
                border: 'none',
                borderRadius: '50%',
                width: 34,
                height: 34,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
            >
              <X size={18} />
            </button>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: '#c59b4c', fontWeight: 600, marginBottom: '0.5rem' }}>
              <span>By {selectedPost.author} ({selectedPost.authorRole})</span>
              <span>•</span>
              <span>{selectedPost.date}</span>
            </div>

            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.2rem', color: '#143d2f', margin: '0 0 1.5rem', lineHeight: 1.25 }}>
              {selectedPost.title}
            </h2>

            <img
              src={selectedPost.image}
              alt={selectedPost.title}
              style={{ width: '100%', height: '320px', objectFit: 'cover', borderRadius: 8, marginBottom: '1.75rem' }}
            />

            <div
              style={{ color: '#444', fontSize: '1.05rem', lineHeight: 1.7 }}
              dangerouslySetInnerHTML={{ __html: selectedPost.content }}
            />

            <div style={{ marginTop: '2.5rem', paddingTop: '1.5rem', borderTop: '1px solid #eee', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ color: '#777', fontSize: '0.85rem' }}>Balsam Hill Masterclass Series</span>
              <button
                onClick={() => setSelectedPost(null)}
                style={{ background: 'var(--color-forest)', color: '#fff', border: 'none', padding: '0.65rem 1.5rem', borderRadius: 4, fontWeight: 700, cursor: 'pointer' }}
              >
                Done Reading
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
