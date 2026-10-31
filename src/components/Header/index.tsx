import React from 'react';
import { PromoBar } from './PromoBar';
import { UtilityBar } from './UtilityBar';
import { MainHeader } from './MainHeader';
import { MegaMenu } from './MegaMenu';
import type { Product } from '../../types';

interface HeaderProps {
  products: Product[];
}

export const Header: React.FC<HeaderProps> = ({ products }) => {
  return (
    <header className="site-header">
      <PromoBar />
      <UtilityBar />
      <MainHeader products={products} />
      <MegaMenu />
    </header>
  );
};
