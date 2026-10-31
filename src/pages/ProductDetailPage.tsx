import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import type { Product } from '../types';
import { useCart } from '../context/CartContext';
import {
  Star,
  ShieldCheck,
  Truck,
  RotateCcw,
  ShoppingBag,
  Heart,
  ChevronRight,
  Package,
  Sparkles,
  Zap,
  Check
} from 'lucide-react';

interface ProductDetailPageProps {
  products: Product[];
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ products }) => {
  const { id } = useParams<{ id: string }>();
  const product = products.find(p => p.id === id) || products[0];

  const { addToCart, openCart, showToast } = useCart();
  const [selectedHeightIdx, setSelectedHeightIdx] = useState<number>(product?.selectedHeightIndex || 1);
  const [quantity, setQuantity] = useState<number>(1);
  const [activeTab, setActiveTab] = useState<'specs' | 'box' | 'warranty' | 'reviews'>('specs');
  const [selectedImage, setSelectedImage] = useState<string>(product?.image || '');
  const [isWishlisted, setIsWishlisted] = useState<boolean>(false);

  // Review Form State
  const [showReviewForm, setShowReviewForm] = useState<boolean>(false);
  const [reviewerName, setReviewerName] = useState<string>('');
  const [reviewRating, setReviewRating] = useState<number>(5);
  const [reviewTitle, setReviewTitle] = useState<string>('');
  const [reviewText, setReviewText] = useState<string>('');
  const [reviewsList, setReviewsList] = useState<{ name: string; date: string; rating: number; title: string; text: string; verified: boolean }[]>([
    {
      name: 'Eleanor Vance',
      date: 'October 14, 2026',
      rating: 5,
      title: 'Indistinguishable from a freshly cut Maine fir!',
      text: 'After 30 years of cutting real trees, we took the plunge on this Balsam Hill tree. Our guests literally tried to smell the branches because the True Needle foliage looks so authentic.',
      verified: true
    },
    {
      name: 'David S., Boston MA',
      date: 'September 28, 2026',
      rating: 5,
      title: 'The pre-strung Candlelight LEDs are magical',
      text: 'Setup took 20 minutes with the Easy Plug system. The 2700K warm white lighting creates the coziest evening glow imaginable.',
      verified: true
    }
  ]);

  if (!product) {
    return (
      <div style={{ padding: '5rem 1rem', textAlign: 'center', background: '#faf7f2', minHeight: '60vh' }}>
        <h2>Product not found</h2>
        <Link to="/category/trees" style={{ color: 'var(--color-forest)', fontWeight: 700 }}>
          Back to Artificial Trees
        </Link>
      </div>
    );
  }

  const currentVariant = product.heights[selectedHeightIdx] || product.heights[0];
  const galleryImages = [
    product.image,
    '/assets/images/needle-realism-demo.jpg',
    '/assets/images/hero-banner.webp',
    '/assets/images/tree-guide-hero.webp'
  ];

  const handleAddCart = () => {
    addToCart(product, selectedHeightIdx, quantity);
    openCart();
  };

  const handleToggleWishlist = () => {
    setIsWishlisted(!isWishlisted);
    showToast(isWishlisted ? `Removed from Wishlist` : `Added ${product.name} to Wishlist! ❤️`);
  };

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!reviewerName || !reviewText) return;
    setReviewsList([
      {
        name: reviewerName,
        date: 'Just now',
        rating: reviewRating,
        title: reviewTitle || 'Outstanding holiday centerpiece',
        text: reviewText,
        verified: true
      },
      ...reviewsList
    ]);
    setShowReviewForm(false);
    setReviewerName('');
    setReviewTitle('');
    setReviewText('');
    showToast('Thank you! Your verified review has been published. 🎄');
  };

  return (
    <div className="product-detail-page" style={{ background: '#faf7f2', minHeight: '100vh', paddingBottom: '6rem' }}>
      {/* Breadcrumb Strip */}
      <div style={{ background: '#ffffff', borderBottom: '1px solid #eee', padding: '0.85rem 1rem' }}>
        <div className="container" style={{ maxWidth: '1240px', margin: '0 auto', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: '#666' }}>
          <Link to="/" style={{ color: '#444', textDecoration: 'none' }}>Home</Link>
          <ChevronRight size={13} />
          <Link to={`/category/${product.category}`} style={{ color: '#444', textDecoration: 'none', textTransform: 'capitalize' }}>
            {product.category === 'trees' ? 'Artificial Christmas Trees' : product.category === 'wreaths' ? 'Wreaths & Greenery' : 'Holiday Décor'}
          </Link>
          <ChevronRight size={13} />
          <span style={{ color: '#143d2f', fontWeight: 600 }}>{product.name}</span>
        </div>
      </div>

      <div className="container" style={{ maxWidth: '1240px', margin: '2.5rem auto 0', padding: '0 1rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '2rem', alignItems: 'start' }}>
          {/* Left Column: Image Gallery */}
          <div>
            {/* Main Big Photo */}
            <div
              style={{
                position: 'relative',
                background: '#ffffff',
                borderRadius: 12,
                overflow: 'hidden',
                boxShadow: '0 8px 24px rgba(0,0,0,0.06)',
                border: '1px solid #ebd9c0',
                aspectRatio: '1 / 1.15'
              }}
            >
              <img
                src={selectedImage || product.image}
                alt={product.name}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />

              {product.badge && (
                <div
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    left: '1rem',
                    background: 'var(--color-forest)',
                    color: '#fff',
                    padding: '0.35rem 0.8rem',
                    borderRadius: 4,
                    fontWeight: 700,
                    fontSize: '0.8rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em'
                  }}
                >
                  {product.badge}
                </div>
              )}

              <button
                onClick={handleToggleWishlist}
                style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  background: '#ffffff',
                  border: 'none',
                  borderRadius: '50%',
                  width: 38,
                  height: 38,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  boxShadow: '0 4px 10px rgba(0,0,0,0.15)'
                }}
                title="Save to Wishlist"
              >
                <Heart size={18} fill={isWishlisted ? '#891b29' : 'none'} color={isWishlisted ? '#891b29' : '#444'} />
              </button>
            </div>

            {/* Thumbnail Carousel */}
            <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1rem', overflowX: 'auto', paddingBottom: '0.5rem', scrollSnapType: 'x mandatory' }}>
              {galleryImages.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(img)}
                  style={{
                    width: 72,
                    height: 72,
                    flexShrink: 0,
                    scrollSnapAlign: 'start',
                    borderRadius: 6,
                    overflow: 'hidden',
                    border: (selectedImage || product.image) === img ? '2px solid var(--color-forest)' : '1px solid #ddd',
                    padding: 0,
                    cursor: 'pointer',
                    background: '#fff'
                  }}
                >
                  <img src={img} alt={`View ${i + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </button>
              ))}
            </div>

            {/* Trust Highlights */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(90px, 1fr))', gap: '0.75rem', marginTop: '1.5rem', textAlign: 'center' }}>
              <div style={{ background: '#ffffff', padding: '0.85rem 0.5rem', borderRadius: 8, border: '1px solid #ebd9c0' }}>
                <Truck size={20} color="var(--color-forest)" style={{ margin: '0 auto 0.25rem' }} />
                <div style={{ fontWeight: 700, fontSize: '0.8rem', color: '#143d2f' }}>Free Shipping</div>
                <div style={{ fontSize: '0.72rem', color: '#666' }}>Ships in 1-2 days</div>
              </div>
              <div style={{ background: '#ffffff', padding: '0.85rem 0.5rem', borderRadius: 8, border: '1px solid #ebd9c0' }}>
                <ShieldCheck size={20} color="var(--color-forest)" style={{ margin: '0 auto 0.25rem' }} />
                <div style={{ fontWeight: 700, fontSize: '0.8rem', color: '#143d2f' }}>3-Year Warranty</div>
                <div style={{ fontSize: '0.72rem', color: '#666' }}>Lights &amp; frame</div>
              </div>
              <div style={{ background: '#ffffff', padding: '0.85rem 0.5rem', borderRadius: 8, border: '1px solid #ebd9c0' }}>
                <RotateCcw size={20} color="var(--color-forest)" style={{ margin: '0 auto 0.25rem' }} />
                <div style={{ fontWeight: 700, fontSize: '0.8rem', color: '#143d2f' }}>30-Day Returns</div>
                <div style={{ fontSize: '0.72rem', color: '#666' }}>Hassle-free</div>
              </div>
            </div>
          </div>

          {/* Right Column: Pricing, Variant Selector, Add to Bag */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <div style={{ display: 'flex', color: '#c59b4c' }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="#c59b4c" color="#c59b4c" />
                ))}
              </div>
              <span style={{ fontSize: '0.85rem', color: '#555', fontWeight: 600 }}>
                {product.rating} / 5.0 ({product.reviewsCount} Reviews)
              </span>
              <span style={{ color: '#ccc' }}>•</span>
              <span style={{ fontSize: '0.8rem', color: '#888' }}>SKU: BH-{product.id.toUpperCase()}-75</span>
            </div>

            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.2rem, 3.5vw, 3rem)', color: '#143d2f', margin: '0 0 0.5rem', fontWeight: 600 }}>
              {product.name}
            </h1>

            <p style={{ color: '#555', fontSize: '1rem', lineHeight: 1.5, margin: '0 0 1.5rem' }}>
              {product.description}
            </p>

            {/* Price Box */}
            <div style={{ background: '#ffffff', padding: '1.25rem 1.5rem', borderRadius: 8, border: '1px solid #ebd9c0', marginBottom: '1.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.75rem' }}>
                <span style={{ fontSize: '2.2rem', fontWeight: 700, color: '#143d2f' }}>
                  ${currentVariant.price.toLocaleString()}
                </span>
                {currentVariant.originalPrice > currentVariant.price && (
                  <>
                    <span style={{ fontSize: '1.15rem', color: '#888', textDecoration: 'line-through' }}>
                      ${currentVariant.originalPrice.toLocaleString()}
                    </span>
                    <span style={{ background: '#891b29', color: '#fff', fontSize: '0.75rem', fontWeight: 700, padding: '0.2rem 0.5rem', borderRadius: 3 }}>
                      SAVE ${(currentVariant.originalPrice - currentVariant.price).toLocaleString()}
                    </span>
                  </>
                )}
              </div>
              <div style={{ fontSize: '0.82rem', color: '#555', marginTop: '0.4rem' }}>
                Or 4 interest-free payments of <strong>${(currentVariant.price / 4).toFixed(2)}</strong> with PayPal or Affirm.
              </div>
            </div>

            {/* Height Variant Selector */}
            <div style={{ marginBottom: '1.75rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                <label style={{ fontWeight: 700, fontSize: '0.9rem', color: '#222' }}>
                  Select Tree Height:
                </label>
                <Link to="/tree-finder" style={{ fontSize: '0.8rem', color: 'var(--color-forest)', fontWeight: 600, textDecoration: 'underline' }}>
                  Need sizing advice?
                </Link>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '0.65rem' }}>
                {product.heights.map((h, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedHeightIdx(i)}
                    style={{
                      border: selectedHeightIdx === i ? '2px solid var(--color-forest)' : '1px solid #ccc',
                      background: selectedHeightIdx === i ? 'rgba(20,61,47,0.06)' : '#ffffff',
                      borderRadius: 6,
                      padding: '0.65rem 0.5rem',
                      textAlign: 'center',
                      cursor: 'pointer'
                    }}
                  >
                    <div style={{ fontWeight: 700, color: '#143d2f', fontSize: '0.95rem' }}>{h.height}</div>
                    <div style={{ fontSize: '0.78rem', color: '#666' }}>{h.tips}</div>
                    <div style={{ fontWeight: 700, color: '#891b29', fontSize: '0.85rem', marginTop: '0.2rem' }}>
                      ${h.price.toLocaleString()}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Lighting Style */}
            <div style={{ marginBottom: '1.75rem' }}>
              <label style={{ display: 'block', fontWeight: 700, fontSize: '0.9rem', color: '#222', marginBottom: '0.5rem' }}>
                Lighting Style:
              </label>
              <div style={{ background: '#ffffff', padding: '0.85rem 1rem', borderRadius: 6, border: '1px solid #ddd', display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <Sparkles size={18} color="#c59b4c" />
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.9rem', color: '#143d2f' }}>{product.lightStyle}</div>
                  <div style={{ fontSize: '0.78rem', color: '#666' }}>Pre-strung with Easy Plug® trunk-powered connections</div>
                </div>
              </div>
            </div>

            {/* Quantity & CTA Buttons */}
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #ccc', borderRadius: 4, background: '#fff' }}>
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  style={{ border: 'none', background: 'transparent', padding: '0.75rem 1rem', fontSize: '1rem', cursor: 'pointer' }}
                >
                  -
                </button>
                <span style={{ fontWeight: 700, padding: '0 0.5rem', minWidth: 28, textAlign: 'center' }}>{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  style={{ border: 'none', background: 'transparent', padding: '0.75rem 1rem', fontSize: '1rem', cursor: 'pointer' }}
                >
                  +
                </button>
              </div>

              <button
                onClick={handleAddCart}
                style={{
                  flexGrow: 1,
                  background: 'var(--color-forest)',
                  color: '#ffffff',
                  border: 'none',
                  padding: '1rem 2rem',
                  borderRadius: 6,
                  fontWeight: 700,
                  fontSize: '1.05rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  boxShadow: '0 4px 16px rgba(20,61,47,0.3)',
                  transition: 'background 0.2s'
                }}
              >
                <ShoppingBag size={18} />
                <span>Add to Shopping Bag</span>
              </button>
            </div>

            {/* Branch Sample Kit Callout */}
            <div style={{ background: '#f4ede2', padding: '1rem 1.25rem', borderRadius: 6, border: '1px solid #ebd9c0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
              <div>
                <div style={{ fontWeight: 700, color: '#143d2f', fontSize: '0.85rem' }}>Unsure about foliage needle realism?</div>
                <div style={{ fontSize: '0.78rem', color: '#666' }}>Order our $29 sample kit. Cost is credited back on this tree purchase!</div>
              </div>
              <Link to="/branch-sample-kit" style={{ color: '#891b29', fontWeight: 700, fontSize: '0.85rem', textDecoration: 'none' }}>
                Order Sample Kit &rarr;
              </Link>
            </div>
          </div>
        </div>

        {/* Detailed Tabs: Specs, What's in the Box, Warranty, Reviews */}
        <div style={{ marginTop: '5rem', background: '#ffffff', borderRadius: 12, border: '1px solid #ebd9c0', overflow: 'hidden' }}>
          <div style={{ display: 'flex', borderBottom: '1px solid #eee', background: '#faf7f2', overflowX: 'auto' }}>
            {[
              { id: 'specs', label: 'Detailed Specifications' },
              { id: 'box', label: "What's in the Box" },
              { id: 'warranty', label: '3-Year Warranty & Care' },
              { id: 'reviews', label: `Customer Reviews (${reviewsList.length + product.reviewsCount})` }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                style={{
                  padding: '1.25rem 2rem',
                  border: 'none',
                  background: activeTab === tab.id ? '#ffffff' : 'transparent',
                  borderBottom: activeTab === tab.id ? '3px solid var(--color-forest)' : '3px solid transparent',
                  fontWeight: activeTab === tab.id ? 700 : 500,
                  color: activeTab === tab.id ? '#143d2f' : '#666',
                  fontSize: '0.95rem',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap'
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div style={{ padding: '2.5rem' }}>
            {activeTab === 'specs' && (
              <div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', color: '#143d2f', margin: '0 0 1.25rem' }}>
                  {product.name} Specifications ({currentVariant.height})
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem' }}>
                  <div style={{ padding: '0.75rem', background: '#faf7f2', borderRadius: 6 }}>
                    <div style={{ fontSize: '0.75rem', color: '#888', textTransform: 'uppercase' }}>Foliage Realism</div>
                    <div style={{ fontWeight: 700, color: '#222' }}>{product.realism}</div>
                  </div>
                  <div style={{ padding: '0.75rem', background: '#faf7f2', borderRadius: 6 }}>
                    <div style={{ fontSize: '0.75rem', color: '#888', textTransform: 'uppercase' }}>Branch Tip Count</div>
                    <div style={{ fontWeight: 700, color: '#222' }}>{currentVariant.tips}</div>
                  </div>
                  <div style={{ padding: '0.75rem', background: '#faf7f2', borderRadius: 6 }}>
                    <div style={{ fontSize: '0.75rem', color: '#888', textTransform: 'uppercase' }}>Light Count &amp; Tech</div>
                    <div style={{ fontWeight: 700, color: '#222' }}>{currentVariant.lights} ({product.lightStyle})</div>
                  </div>
                  <div style={{ padding: '0.75rem', background: '#faf7f2', borderRadius: 6 }}>
                    <div style={{ fontSize: '0.75rem', color: '#888', textTransform: 'uppercase' }}>Trunk Connection</div>
                    <div style={{ fontWeight: 700, color: '#222' }}>Easy Plug® (Power through center pole)</div>
                  </div>
                  <div style={{ padding: '0.75rem', background: '#faf7f2', borderRadius: 6 }}>
                    <div style={{ fontSize: '0.75rem', color: '#888', textTransform: 'uppercase' }}>Safety Certification</div>
                    <div style={{ fontWeight: 700, color: '#222' }}>UL Listed &amp; Flame-Retardant Certified</div>
                  </div>
                  <div style={{ padding: '0.75rem', background: '#faf7f2', borderRadius: 6 }}>
                    <div style={{ fontSize: '0.75rem', color: '#888', textTransform: 'uppercase' }}>Base Diameter</div>
                    <div style={{ fontWeight: 700, color: '#222' }}>56 Inches at Widest Point</div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'box' && (
              <div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', color: '#143d2f', margin: '0 0 1rem' }}>
                  What’s Included in Your Shipment
                </h3>
                <p style={{ color: '#666', marginBottom: '2rem' }}>
                  Every Balsam Hill artificial Christmas tree arrives securely packed in heavy-duty shipping cartons with everything required for setup and off-season storage:
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
                  <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                    <Package size={22} color="var(--color-forest)" />
                    <div>
                      <div style={{ fontWeight: 700, color: '#143d2f' }}>Heavy-Duty Folding Tree Stand</div>
                      <div style={{ fontSize: '0.85rem', color: '#666' }}>Reinforced powder-coated steel with rubber floor protectors</div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                    <Package size={22} color="var(--color-forest)" />
                    <div>
                      <div style={{ fontWeight: 700, color: '#143d2f' }}>Off-Season Storage Bag</div>
                      <div style={{ fontSize: '0.85rem', color: '#666' }}>Durable ripstop nylon with padded carry handles</div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                    <Check size={22} color="var(--color-forest)" />
                    <div>
                      <div style={{ fontWeight: 700, color: '#143d2f' }}>Soft Cotton Shaping Gloves</div>
                      <div style={{ fontSize: '0.85rem', color: '#666' }}>Protects hands while shaping and fluffing branches</div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                    <Zap size={22} color="var(--color-forest)" />
                    <div>
                      <div style={{ fontWeight: 700, color: '#143d2f' }}>Foot Pedal &amp; Extra Bulbs</div>
                      <div style={{ fontSize: '0.85rem', color: '#666' }}>Convenient on/off foot switch with extra micro-LED bulbs and fuses</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'warranty' && (
              <div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', color: '#143d2f', margin: '0 0 1rem' }}>
                  Balsam Hill 3-Year Limited Warranty
                </h3>
                <p style={{ color: '#555', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  We stand behind our craftsmanship. Every tree purchase includes our three-year limited warranty covering:
                </p>
                <ul style={{ color: '#444', lineHeight: 1.8, paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
                  <li>Structural tree frame, steel center pole, metal hinges, and base stand.</li>
                  <li>Factory-strung LED light wiring, light strands, and connectors.</li>
                  <li>True Needle® molded branch tips against cracking or premature decay.</li>
                </ul>
                <div style={{ background: '#faf7f2', padding: '1.25rem', borderRadius: 8, border: '1px solid #ebd9c0' }}>
                  <strong>Need replacement parts or assistance?</strong> Our dedicated seasonal specialists in California are available 7 days a week at <strong>1-888-55-BALSAM</strong>.
                </div>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', color: '#143d2f', margin: 0 }}>
                      Verified Customer Ratings &amp; Reviews
                    </h3>
                    <div style={{ color: '#666', fontSize: '0.9rem', marginTop: '0.25rem' }}>
                      Overall score: <strong>{product.rating} out of 5 stars</strong> based on {product.reviewsCount} verified purchasers.
                    </div>
                  </div>
                  <button
                    onClick={() => setShowReviewForm(!showReviewForm)}
                    style={{
                      background: 'var(--color-forest)',
                      color: '#fff',
                      border: 'none',
                      padding: '0.65rem 1.4rem',
                      borderRadius: 4,
                      fontWeight: 700,
                      cursor: 'pointer'
                    }}
                  >
                    {showReviewForm ? 'Close Form' : 'Write a Review'}
                  </button>
                </div>

                {/* Review Submission Form */}
                {showReviewForm && (
                  <form onSubmit={handleSubmitReview} style={{ background: '#faf7f2', padding: '1.75rem', borderRadius: 8, border: '1px solid #ebd9c0', marginBottom: '2rem' }}>
                    <h4 style={{ margin: '0 0 1rem', color: '#143d2f', fontFamily: 'var(--font-serif)', fontSize: '1.3rem' }}>
                      Share Your Experience with {product.name}
                    </h4>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '1rem' }}>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, marginBottom: '0.25rem' }}>Your Name</label>
                        <input
                          type="text"
                          required
                          value={reviewerName}
                          onChange={e => setReviewerName(e.target.value)}
                          placeholder="e.g. Sarah M."
                          style={{ width: '100%', padding: '0.5rem', border: '1px solid #ccc', borderRadius: 4 }}
                        />
                      </div>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, marginBottom: '0.25rem' }}>Star Rating</label>
                        <select
                          value={reviewRating}
                          onChange={e => setReviewRating(Number(e.target.value))}
                          style={{ width: '100%', padding: '0.5rem', border: '1px solid #ccc', borderRadius: 4 }}
                        >
                          <option value={5}>5 Stars - Exceptional Realism</option>
                          <option value={4}>4 Stars - Great Quality</option>
                          <option value={3}>3 Stars - Average</option>
                        </select>
                      </div>
                    </div>
                    <div style={{ marginBottom: '1rem' }}>
                      <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, marginBottom: '0.25rem' }}>Review Headline</label>
                      <input
                        type="text"
                        value={reviewTitle}
                        onChange={e => setReviewTitle(e.target.value)}
                        placeholder="e.g. Looks so real my guests couldn't believe it!"
                        style={{ width: '100%', padding: '0.5rem', border: '1px solid #ccc', borderRadius: 4 }}
                      />
                    </div>
                    <div style={{ marginBottom: '1.25rem' }}>
                      <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, marginBottom: '0.25rem' }}>Your Comments</label>
                      <textarea
                        required
                        rows={3}
                        value={reviewText}
                        onChange={e => setReviewText(e.target.value)}
                        placeholder="Tell others about the foliage realism, fluffing experience, and lighting..."
                        style={{ width: '100%', padding: '0.5rem', border: '1px solid #ccc', borderRadius: 4 }}
                      />
                    </div>
                    <button
                      type="submit"
                      style={{ background: 'var(--color-forest)', color: '#fff', border: 'none', padding: '0.75rem 1.75rem', borderRadius: 4, fontWeight: 700, cursor: 'pointer' }}
                    >
                      Publish Verified Review
                    </button>
                  </form>
                )}

                {/* Reviews List */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  {reviewsList.map((rev, idx) => (
                    <div key={idx} style={{ borderBottom: '1px solid #eee', paddingBottom: '1.5rem' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                          <span style={{ fontWeight: 700, color: '#143d2f' }}>{rev.name}</span>
                          {rev.verified && (
                            <span style={{ background: '#e8f5e9', color: '#2e7d32', fontSize: '0.72rem', fontWeight: 700, padding: '0.15rem 0.4rem', borderRadius: 3 }}>
                              Verified Buyer
                            </span>
                          )}
                        </div>
                        <span style={{ fontSize: '0.8rem', color: '#888' }}>{rev.date}</span>
                      </div>
                      <div style={{ display: 'flex', color: '#c59b4c', marginBottom: '0.4rem' }}>
                        {[...Array(rev.rating)].map((_, i) => (
                          <Star key={i} size={14} fill="#c59b4c" color="#c59b4c" />
                        ))}
                      </div>
                      <div style={{ fontWeight: 700, color: '#222', fontSize: '0.95rem', marginBottom: '0.35rem' }}>
                        {rev.title}
                      </div>
                      <p style={{ color: '#555', fontSize: '0.92rem', lineHeight: 1.6, margin: 0 }}>
                        {rev.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Sticky Bottom Add to Bag Bar */}
      <div className="mobile-sticky-pdp-bar">
        <div className="mobile-sticky-info">
          <span className="mobile-sticky-title">{product.name}</span>
          <span className="mobile-sticky-price">${currentVariant.price}</span>
        </div>
        <button
          onClick={handleAddCart}
          className="btn-primary mobile-sticky-btn"
          style={{ background: 'var(--color-forest)', color: '#fff', border: 'none', borderRadius: 4, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
        >
          <ShoppingBag size={16} />
          <span>Add to Bag</span>
        </button>
      </div>
    </div>
  );
};
