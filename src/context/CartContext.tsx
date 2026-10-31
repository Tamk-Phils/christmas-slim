import React, { createContext, useContext, useState, useEffect } from 'react';
import type { CartItem, Product } from '../types';

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product, heightIndex?: number, quantity?: number) => void;
  updateQuantity: (index: number, delta: number) => void;
  removeFromCart: (index: number) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  appliedCoupon: string | null;
  applyCoupon: (code: string) => { success: boolean; message: string };
  subtotal: number;
  discountAmount: number;
  finalTotal: number;
  freeShippingThreshold: number;
  freeShippingProgress: number;
  quickViewProduct: Product | null;
  openQuickView: (product: Product) => void;
  closeQuickView: () => void;
  isCheckoutOpen: boolean;
  openCheckout: () => void;
  closeCheckout: () => void;
  toastMessage: string | null;
  showToast: (message: string) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('balsam_react_cart');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.warn('Failed parsing cart storage:', e);
    }
    // Default initial cart with BH Balsam Fir
    return [
      {
        productId: 'bh-balsam-fir',
        name: 'BH Balsam Fir™',
        height: '7.5 ft',
        price: 999,
        originalPrice: 1399,
        quantity: 1,
        image: '/assets/images/bh-balsam-fir.jpg',
        lights: '1,100 lights'
      }
    ];
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [appliedCoupon, setAppliedCoupon] = useState<string | null>(null);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    localStorage.setItem('balsam_react_cart', JSON.stringify(cart));
  }, [cart]);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(current => (current === message ? null : current));
    }, 3500);
  };

  const addToCart = (product: Product, heightIndex?: number, quantity: number = 1) => {
    const hIdx = heightIndex !== undefined ? heightIndex : (product.selectedHeightIndex || 0);
    const variant = product.heights[hIdx] || product.heights[0];

    setCart(prev => {
      const existingIdx = prev.findIndex(item => item.productId === product.id && item.height === variant.height);
      if (existingIdx > -1) {
        const copy = [...prev];
        copy[existingIdx].quantity += quantity;
        return copy;
      } else {
        return [
          ...prev,
          {
            productId: product.id,
            name: product.name,
            height: variant.height,
            price: variant.price,
            originalPrice: variant.originalPrice,
            quantity,
            image: product.image,
            lights: variant.lights
          }
        ];
      }
    });

    setIsCartOpen(true);
    showToast(`Added ${product.name} (${variant.height}) to your holiday cart! 🎄`);
  };

  const updateQuantity = (index: number, delta: number) => {
    setCart(prev => {
      const copy = [...prev];
      copy[index].quantity += delta;
      if (copy[index].quantity <= 0) {
        copy.splice(index, 1);
      }
      return copy;
    });
  };

  const removeFromCart = (index: number) => {
    setCart(prev => prev.filter((_, i) => i !== index));
    showToast('Item removed from cart.');
  };

  const clearCart = () => {
    setCart([]);
  };

  const applyCoupon = (code: string) => {
    const clean = code.trim().toUpperCase();
    if (clean === 'BALSAM50') {
      setAppliedCoupon('BALSAM50');
      return { success: true, message: 'Holiday Preview: 50% Tree Discount applied!' };
    } else if (clean === 'CHEER25') {
      setAppliedCoupon('CHEER25');
      return { success: true, message: '$25 Festive Voucher credited to your cart!' };
    } else {
      return { success: false, message: 'Invalid code. Try BALSAM50 or CHEER25.' };
    }
  };

  const rawSubtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  let discountAmount = 0;
  if (appliedCoupon === 'BALSAM50') {
    discountAmount = Math.round(rawSubtotal * 0.5);
  } else if (appliedCoupon === 'CHEER25') {
    discountAmount = Math.min(25, rawSubtotal);
  }

  const finalTotal = Math.max(0, rawSubtotal - discountAmount);
  const freeShippingThreshold = 150;
  const freeShippingProgress = Math.min(100, (finalTotal / freeShippingThreshold) * 100);

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      updateQuantity,
      removeFromCart,
      clearCart,
      isCartOpen,
      openCart: () => setIsCartOpen(true),
      closeCart: () => setIsCartOpen(false),
      appliedCoupon,
      applyCoupon,
      subtotal: rawSubtotal,
      discountAmount,
      finalTotal,
      freeShippingThreshold,
      freeShippingProgress,
      quickViewProduct,
      openQuickView: (product: Product) => setQuickViewProduct(product),
      closeQuickView: () => setQuickViewProduct(null),
      isCheckoutOpen,
      openCheckout: () => { setIsCartOpen(false); setIsCheckoutOpen(true); },
      closeCheckout: () => setIsCheckoutOpen(false),
      toastMessage,
      showToast
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within CartProvider');
  return context;
};
