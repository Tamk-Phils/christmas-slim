import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import type { Product } from '../types';
import { Plus } from 'lucide-react';

interface ShopTheLookProps {
  products: Product[];
}

export const ShopTheLook: React.FC<ShopTheLookProps> = ({ products }) => {
  const { addToCart } = useCart();
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null);

  const hotspots = [
    {
      id: 'hotspot-tree',
      title: 'BH Balsam Fir™ (7.5ft)',
      price: 999,
      originalPrice: 1399,
      productId: 'bh-balsam-fir',
      top: '44%',
      left: '68%',
      image: '/assets/images/bh-balsam-fir.jpg',
      heightIndex: 1
    },
    {
      id: 'hotspot-wreath',
      title: 'BH Fraser Fir Pre-Lit Wreath (26")',
      price: 129,
      originalPrice: 169,
      productId: 'fraser-fir-wreath',
      top: '20%',
      left: '26%',
      image: '/assets/images/fraser-fir-wreath.jpg',
      heightIndex: 0
    },
    {
      id: 'hotspot-garland',
      title: 'Gilded Glory Magnolia Wreath (28")',
      price: 189,
      originalPrice: 239,
      productId: 'gilded-glory-wreath',
      top: '46%',
      left: '28%',
      image: '/assets/images/gilded-glory-wreath.jpg',
      heightIndex: 0
    },
    {
      id: 'hotspot-flip',
      title: 'Balsam Fir Flip Tree® (7.5ft)',
      price: 1199,
      originalPrice: 1599,
      productId: 'balsam-fir-flip',
      top: '82%',
      left: '70%',
      image: '/assets/images/balsam-fir-flip.jpg',
      heightIndex: 1
    }
  ];

  const handleToggle = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveHotspot(prev => (prev === id ? null : id));
  };

  return (
    <section
      className="shop-the-look-section"
      id="shop-look-anchor"
      onClick={() => setActiveHotspot(null)}
    >
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Styled by Sam Henderson</span>
          <h2 className="section-title">Shop The Look: Staged Holiday Manor</h2>
          <p className="section-subtitle">
            Hover or click the glowing pins on the staged salon below to explore and add matching items directly to your cart.
          </p>
        </div>

        <div className="lookbook-container">
          <div className="lookbook-image-wrap">
            <img
              src="/assets/images/hero-banner.webp"
              alt="Balsam Hill Staged Living Room with Hotspots"
              className="lookbook-image"
            />

            {hotspots.map(spot => {
              const product = products.find(p => p.id === spot.productId) || products[0];
              const isCardActive = activeHotspot === spot.id;

              return (
                <React.Fragment key={spot.id}>
                  {/* Pulsing Pin */}
                  <button
                    className={`hotspot-pin ${isCardActive ? 'is-active' : ''}`}
                    style={{ top: spot.top, left: spot.left }}
                    onClick={(e) => handleToggle(spot.id, e)}
                    aria-label={`Inspect ${spot.title}`}
                  >
                    <Plus size={14} />
                  </button>

                  {/* Popover Card */}
                  {isCardActive && (
                    <div
                      className="hotspot-popover is-active"
                      style={{
                        top: `calc(${spot.top} - 120px)`,
                        left: `clamp(10px, calc(${spot.left} - 130px), calc(100% - 270px))`
                      }}
                      onClick={e => e.stopPropagation()}
                    >
                      <img src={spot.image} alt={spot.title} className="popover-img" />
                      <div className="popover-title">{spot.title}</div>
                      <div className="popover-price">
                        ${spot.price}{' '}
                        <span style={{ fontSize: '0.8rem', textDecoration: 'line-through', color: '#888' }}>
                          ${spot.originalPrice}
                        </span>
                      </div>
                      <button
                        className="btn-primary"
                        style={{ padding: '0.4rem 0.8rem', fontSize: '0.75rem', width: '100%', justifyContent: 'center' }}
                        onClick={() => {
                          addToCart(product, spot.heightIndex);
                          setActiveHotspot(null);
                        }}
                      >
                        Quick Add To Cart
                      </button>
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
