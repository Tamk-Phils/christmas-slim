import React from 'react';
import type { Product, Post } from '../types';

import { HeroSlider } from '../components/HeroSlider';
import { TrustStrip } from '../components/TrustStrip';
import { SavingsSpotlight } from '../components/SavingsSpotlight';
import { FestiveTiles } from '../components/FestiveTiles';
import { BalsamFirSpotlight } from '../components/BalsamFirSpotlight';
import { WhatSetsUsApart } from '../components/WhatSetsUsApart';
import { WarrantySpotlight } from '../components/WarrantySpotlight';
import { TreeFinderWizard } from '../components/TreeFinderWizard';
import { BranchSampleKit } from '../components/BranchSampleKit';
import { NeedleComparisonSlider } from '../components/NeedleComparisonSlider';
import { FlipTreeShowcase } from '../components/FlipTreeShowcase';
import { ShopTheLook } from '../components/ShopTheLook';
import { ProductCatalog } from '../components/ProductCatalog';
import { SamJournal } from '../components/SamJournal';
import { HolidayCountdownSpotlight } from '../components/HolidayCountdownSpotlight';
import { FreshWreathsSpotlight } from '../components/FreshWreathsSpotlight';
import { DollyDecorSpotlight } from '../components/DollyDecorSpotlight';
import { DiscoverBalsamHill } from '../components/DiscoverBalsamHill';
import { CustomerReviews } from '../components/CustomerReviews';

interface HomePageProps {
  products: Product[];
  posts: Post[];
}

export const HomePage: React.FC<HomePageProps> = ({ products, posts }) => {
  return (
    <div className="home-page-view">
      {/* 1. Hero Carousel */}
      <HeroSlider />

      {/* 2. Trust Strip & Warranties */}
      <TrustStrip />

      {/* 3. Stack the Savings: Limited-Time Offer */}
      <SavingsSpotlight />

      {/* 4. "Go Ahead, Get Festive" (The Tree Shop, The Wreath Shop, The Ornaments Shop) */}
      <FestiveTiles />

      {/* 5. Flagship Tree Spotlight: BH Balsam Fir® */}
      <BalsamFirSpotlight products={products} />

      {/* 6. "What Sets Us Apart" (3 Pillars with authentic photography) */}
      <WhatSetsUsApart />

      {/* 7. "The Best Warranty" */}
      <WarrantySpotlight />

      {/* 8. "Need Help Deciding? Meet Your Match" (Interactive Tree Finder Quiz) */}
      <TreeFinderWizard products={products} />

      {/* 9. "Branch Samples: A 5-Star Favorite" */}
      <BranchSampleKit />

      {/* 10. True Needle® vs Traditional Split Comparison Slider */}
      <NeedleComparisonSlider />

      {/* 11. Flip Tree® Setup Innovation Interactive Animation */}
      <FlipTreeShowcase />

      {/* 12. "Shop The Look" Staged Living Room with Hotspots */}
      <ShopTheLook products={products} />

      {/* 13. Curated Product Catalog with Height Price Selectors */}
      <ProductCatalog products={products} />

      {/* 14. Sam Henderson's Holiday Journal & Masterclass Posts ("sam posts") */}
      <SamJournal posts={posts} />

      {/* 15. "7 Weeks 'Til Christmas" Holiday Countdown & Gifting */}
      <HolidayCountdownSpotlight />

      {/* 16. Fresh Wreaths & Garlands Spotlight Hero */}
      <FreshWreathsSpotlight />

      {/* 17. Dolly Parton "Good Lookin' Décor" Spotlight */}
      <DollyDecorSpotlight />

      {/* 18. "Discover Balsam Hill" (6 Value Guarantee Cards) */}
      <DiscoverBalsamHill />

      {/* 19. Real Customer Reviews & #BalsamHillMoments UGC Feed */}
      <CustomerReviews />
    </div>
  );
};
