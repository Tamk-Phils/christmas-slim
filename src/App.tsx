import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GlowProvider } from './context/GlowContext';
import { CartProvider } from './context/CartContext';
import { getProducts, getPosts } from './lib/supabase';
import type { Product, Post } from './types';

// Global Overlays & Layout
import { SnowfallCanvas } from './components/SnowfallCanvas';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { QuickViewModal } from './components/QuickViewModal';
import { CheckoutModal } from './components/CheckoutModal';
import { Toast } from './components/Toast';
import { ScrollToTop } from './components/ScrollToTop';

// Dedicated Multi-Page Views
import { HomePage } from './pages/HomePage';
import { CategoryPage } from './pages/CategoryPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { InspirationPage } from './pages/InspirationPage';
import { BranchSampleKitPage } from './pages/BranchSampleKitPage';
import { TreeFinderPage } from './pages/TreeFinderPage';
import { FlipTreePage } from './pages/FlipTreePage';
import { CartPage } from './pages/CartPage';
import { CheckoutPage } from './pages/CheckoutPage';
import { CustomerSupportPage } from './pages/CustomerSupportPage';
import { SearchResultsPage } from './pages/SearchResultsPage';

export function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    async function loadData() {
      try {
        const [loadedProducts, loadedPosts] = await Promise.all([
          getProducts(),
          getPosts()
        ]);
        setProducts(loadedProducts);
        setPosts(loadedPosts);
      } catch (err) {
        console.error('Failed loading catalog data:', err);
      }
    }
    loadData();
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <GlowProvider>
        <CartProvider>
          {/* Snowfall Particle Engine */}
          <SnowfallCanvas />

          {/* Global Toast Notifications */}
          <Toast />

          {/* Top Marquee, Gold Sales Banner, Navigation & Header */}
          <Header products={products} />

          {/* Multi-Page Routes */}
          <main className="site-main-content">
            <Routes>
              {/* 1. Flagship Balsam Hill Homepage (19 authentic modules) */}
              <Route path="/" element={<HomePage products={products} posts={posts} />} />

              {/* 2. Product Listing Pages (PLP) & Category Routers */}
              <Route path="/category/:category" element={<CategoryPage products={products} />} />
              <Route path="/trees" element={<CategoryPage products={products} />} />
              <Route path="/wreaths" element={<CategoryPage products={products} />} />
              <Route path="/decor" element={<CategoryPage products={products} />} />
              <Route path="/sale" element={<CategoryPage products={products} />} />

              {/* 3. Product Detail Page (PDP) */}
              <Route path="/product/:id" element={<ProductDetailPage products={products} />} />

              {/* 4. Sam Henderson's Holiday Journal & Masterclass Posts ("sam posts") */}
              <Route path="/inspiration" element={<InspirationPage posts={posts} products={products} />} />

              {/* 5. Branch Sample Kit ($29 with $29 rebate voucher) */}
              <Route path="/branch-sample-kit" element={<BranchSampleKitPage />} />

              {/* 6. 4-Step Interactive Tree Finder Quiz */}
              <Route path="/tree-finder" element={<TreeFinderPage products={products} />} />

              {/* 7. Patented Flip Tree® Technology Showcase */}
              <Route path="/flip-tree" element={<FlipTreePage products={products} />} />

              {/* 8. Dedicated Shopping Bag & Cart Page */}
              <Route path="/cart" element={<CartPage />} />

              {/* 9. Dedicated Express Checkout Page */}
              <Route path="/checkout" element={<CheckoutPage />} />

              {/* 10. Customer Support Hub, 3-Year Warranty & Free Catalog Request */}
              <Route path="/customer-support" element={<CustomerSupportPage />} />
              <Route path="/warranty" element={<CustomerSupportPage />} />
              <Route path="/catalog-request" element={<CustomerSupportPage />} />

              {/* 11. Search Results Page */}
              <Route path="/search" element={<SearchResultsPage products={products} posts={posts} />} />

              {/* Fallback */}
              <Route path="*" element={<HomePage products={products} posts={posts} />} />
            </Routes>
          </main>

          {/* Luxury Multi-Column Footer & VIP Newsletter */}
          <Footer />

          {/* Modals and Drawers */}
          <CartDrawer />
          <QuickViewModal />
          <CheckoutModal />
        </CartProvider>
      </GlowProvider>
    </BrowserRouter>
  );
}

export default App;
