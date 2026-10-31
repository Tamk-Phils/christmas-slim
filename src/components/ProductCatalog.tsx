import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import type { Product } from '../types';
import { Heart, ShoppingBag } from 'lucide-react';

interface ProductCatalogProps {
  products: Product[];
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({ products }) => {
  const { addToCart, openQuickView, showToast } = useCart();
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'trees' | 'wreaths' | 'decor'>('all');
  const [heightSelections, setHeightSelections] = useState<Record<string, number>>({});
  const [wishlist, setWishlist] = useState<Record<string, boolean>>({});

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(p => p.category === selectedCategory);

  const handleHeightSelect = (productId: string, heightIndex: number) => {
    setHeightSelections(prev => ({ ...prev, [productId]: heightIndex }));
  };

  const toggleWishlist = (productId: string) => {
    setWishlist(prev => {
      const next = !prev[productId];
      showToast(next ? 'Item saved to your Holiday Wishlist! ❤️' : 'Item removed from Wishlist.');
      return { ...prev, [productId]: next };
    });
  };

  return (
    <section className="catalog-section" id="catalog-anchor">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Explore Our Collections</span>
          <h2 className="section-title">Iconic Trees & Greenery</h2>
          <p className="section-subtitle">
            Every tree includes our 3-Year Limited Warranty, free storage bag, cotton shaping gloves, and extra replacement bulbs.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="catalog-tabs">
          <button
            className={`catalog-tab-btn ${selectedCategory === 'all' ? 'is-active' : ''}`}
            onClick={() => setSelectedCategory('all')}
          >
            All Holiday Greenery
          </button>
          <button
            className={`catalog-tab-btn ${selectedCategory === 'trees' ? 'is-active' : ''}`}
            onClick={() => setSelectedCategory('trees')}
          >
            Artificial Trees
          </button>
          <button
            className={`catalog-tab-btn ${selectedCategory === 'wreaths' ? 'is-active' : ''}`}
            onClick={() => setSelectedCategory('wreaths')}
          >
            Wreaths & Garlands
          </button>
          <button
            className={`catalog-tab-btn ${selectedCategory === 'decor' ? 'is-active' : ''}`}
            onClick={() => setSelectedCategory('decor')}
          >
            Artisan Ornaments & Accents
          </button>
        </div>

        {/* Grid */}
        <div className="products-grid">
          {filteredProducts.map(product => {
            const hIndex = heightSelections[product.id] ?? (product.selectedHeightIndex || 0);
            const variant = product.heights[hIndex] || product.heights[0];
            const isWishlisted = Boolean(wishlist[product.id]);

            return (
              <div key={product.id} className="product-card">
                <div className="product-media">
                  <div className="product-badge-wrap">
                    <span className={`product-badge ${product.badgeClass}`}>{product.badge}</span>
                  </div>

                  <button
                    className={`wishlist-btn ${isWishlisted ? 'is-active' : ''}`}
                    onClick={() => toggleWishlist(product.id)}
                    title={isWishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}
                  >
                    <Heart size={18} fill={isWishlisted ? 'currentColor' : 'none'} />
                  </button>

                  <img src={product.image} alt={product.name} className="product-img" loading="lazy" />

                  <button
                    className="quick-view-overlay-btn"
                    onClick={() => openQuickView(product)}
                  >
                    Quick View
                  </button>
                </div>

                <div className="product-content">
                  <span className="product-category">
                    {product.category.toUpperCase()} • {product.realism}
                  </span>
                  <h3 className="product-title">{product.name}</h3>
                  <div className="product-rating">
                    <div className="rating-stars">★★★★★</div>
                    <span>{product.rating} ({product.reviewsCount})</span>
                  </div>

                  <div className="variant-selector-wrap">
                    <span className="variant-label">Select Height & Specifications:</span>
                    <div className="height-chips">
                      {product.heights.map((h, i) => (
                        <button
                          key={h.height}
                          className={`height-chip ${i === hIndex ? 'is-selected' : ''}`}
                          onClick={() => handleHeightSelect(product.id, i)}
                        >
                          {h.height}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="product-price-row">
                    <div className="price-wrap">
                      <span className="current-price">${variant.price}</span>
                      <span className="original-price">${variant.originalPrice}</span>
                    </div>
                    <button
                      className="add-to-cart-btn"
                      onClick={() => addToCart(product, hIndex)}
                    >
                      <ShoppingBag size={16} />
                      <span>Add To Cart</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
