import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import type { Product, Post } from '../types';
import { useCart } from '../context/CartContext';
import { Search, Star, ShoppingBag, Eye, ChevronRight } from 'lucide-react';

interface SearchResultsPageProps {
  products: Product[];
  posts: Post[];
}

export const SearchResultsPage: React.FC<SearchResultsPageProps> = ({ products, posts }) => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = (searchParams.get('q') || '').toLowerCase().trim();

  const { addToCart, openQuickView } = useCart();

  const matchingProducts = products.filter(p =>
    p.name.toLowerCase().includes(query) ||
    p.description.toLowerCase().includes(query) ||
    p.realism.toLowerCase().includes(query) ||
    p.lightStyle.toLowerCase().includes(query) ||
    p.category.toLowerCase().includes(query)
  );

  const matchingPosts = posts.filter(post =>
    post.title.toLowerCase().includes(query) ||
    post.excerpt.toLowerCase().includes(query) ||
    post.content.toLowerCase().includes(query)
  );

  return (
    <div className="search-results-page" style={{ background: '#faf7f2', minHeight: '100vh', paddingBottom: '6rem' }}>
      {/* Breadcrumbs */}
      <div style={{ background: '#ffffff', borderBottom: '1px solid #eee', padding: '0.85rem 1rem' }}>
        <div className="container" style={{ maxWidth: '1240px', margin: '0 auto', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: '#666' }}>
          <Link to="/" style={{ color: '#444', textDecoration: 'none' }}>Home</Link>
          <ChevronRight size={13} />
          <span style={{ color: '#143d2f', fontWeight: 600 }}>Search Results</span>
        </div>
      </div>

      <div className="container" style={{ maxWidth: '1240px', margin: '3rem auto 0', padding: '0 1rem' }}>
        <div style={{ marginBottom: '2.5rem' }}>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.4rem', color: '#143d2f', margin: '0 0 0.5rem' }}>
            Search Results for <span style={{ color: '#891b29' }}>“{query || 'All Items'}”</span>
          </h1>
          <p style={{ color: '#666', fontSize: '1rem', margin: 0 }}>
            Found {matchingProducts.length} matching products and {matchingPosts.length} styling articles.
          </p>
        </div>

        {matchingProducts.length === 0 ? (
          <div style={{ background: '#ffffff', borderRadius: 8, padding: '4rem 2rem', textAlign: 'center', border: '1px solid #ebd9c0' }}>
            <Search size={42} color="#aaa" style={{ margin: '0 auto 1rem' }} />
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', color: '#143d2f', margin: '0 0 0.5rem' }}>
              No Products Matched Your Search
            </h3>
            <p style={{ color: '#666', marginBottom: '1.5rem' }}>
              Try searching with more general terms such as “Fir”, “Spruce”, “Flip Tree”, or “Wreath”.
            </p>
            <Link
              to="/category/trees"
              style={{ background: 'var(--color-forest)', color: '#fff', textDecoration: 'none', padding: '0.75rem 1.75rem', borderRadius: 4, fontWeight: 700 }}
            >
              Browse All Trees
            </Link>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))', gap: '1.5rem', marginBottom: '4rem' }}>
            {matchingProducts.map(product => (
              <div
                key={product.id}
                style={{
                  background: '#ffffff',
                  borderRadius: 8,
                  overflow: 'hidden',
                  border: '1px solid #ebd9c0',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.04)',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <div style={{ position: 'relative', aspectRatio: '1 / 1.15', overflow: 'hidden' }}>
                  <Link to={`/product/${product.id}`}>
                    <img src={product.image} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </Link>
                </div>

                <div style={{ padding: '1.25rem', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: '#c59b4c', marginBottom: '0.35rem', fontSize: '0.8rem' }}>
                      <div style={{ display: 'flex' }}>
                        {[...Array(5)].map((_, i) => <Star key={i} size={13} fill="#c59b4c" color="#c59b4c" />)}
                      </div>
                      <span style={{ color: '#777' }}>({product.reviewsCount})</span>
                    </div>

                    <Link to={`/product/${product.id}`} style={{ textDecoration: 'none', color: '#143d2f' }}>
                      <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', margin: '0 0 0.35rem', fontWeight: 600 }}>
                        {product.name}
                      </h3>
                    </Link>

                    <div style={{ fontSize: '0.8rem', color: '#666', marginBottom: '1rem' }}>
                      {product.realism}
                    </div>
                  </div>

                  <div>
                    <div style={{ fontSize: '1.25rem', fontWeight: 700, color: '#143d2f', marginBottom: '0.75rem' }}>
                      ${product.heights[0].price.toLocaleString()}
                    </div>

                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      <button
                        onClick={() => addToCart(product, 0, 1)}
                        style={{
                          flexGrow: 1,
                          background: 'var(--color-forest)',
                          color: '#fff',
                          border: 'none',
                          padding: '0.65rem',
                          borderRadius: 4,
                          fontWeight: 700,
                          fontSize: '0.85rem',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '0.4rem',
                          cursor: 'pointer'
                        }}
                      >
                        <ShoppingBag size={15} />
                        <span>Add to Bag</span>
                      </button>

                      <button
                        onClick={() => openQuickView(product)}
                        style={{ background: '#f5f5f5', border: '1px solid #ddd', borderRadius: 4, width: 38, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
                      >
                        <Eye size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Matching Posts */}
        {matchingPosts.length > 0 && (
          <div style={{ marginTop: '3rem' }}>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', color: '#143d2f', marginBottom: '1.5rem' }}>
              Matching Styling Articles
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '1.5rem' }}>
              {matchingPosts.map(post => (
                <div key={post.id} style={{ background: '#ffffff', borderRadius: 8, padding: '1.5rem', border: '1px solid #ebd9c0' }}>
                  <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.3rem', color: '#143d2f', margin: '0 0 0.5rem' }}>
                    {post.title}
                  </h4>
                  <p style={{ color: '#666', fontSize: '0.9rem', lineHeight: 1.5, margin: '0 0 1rem' }}>
                    {post.excerpt}
                  </p>
                  <Link to="/inspiration" style={{ color: 'var(--color-forest)', fontWeight: 700, fontSize: '0.85rem', textDecoration: 'none' }}>
                    Read Full Story &rarr;
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
