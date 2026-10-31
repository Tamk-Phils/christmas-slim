import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

export const MegaMenu: React.FC = () => {
  return (
    <nav className="site-nav" aria-label="Primary Categories">
      <div className="container">
        <ul className="nav-list">
          {/* Christmas Trees */}
          <li className="nav-item">
            <Link to="/category/trees" className="nav-link">
              <span>Christmas Trees</span>
              <ChevronDown size={12} />
            </Link>
            <div className="mega-menu">
              <div className="mega-menu-grid">
                <div>
                  <h4 className="mega-column-title">Shop by Realism</h4>
                  <ul className="mega-link-list">
                    <li><Link to="/category/trees?realism=Most+Realistic">Most Realistic True Needle® (95%+)</Link></li>
                    <li><Link to="/category/trees?realism=Realistic">Realistic True Needle® Blend</Link></li>
                    <li><Link to="/category/trees?realism=Traditional">Classic Traditional PVC</Link></li>
                    <li><Link to="/category/trees?style=Flocked">Frosted & Flocked Snow Trees</Link></li>
                  </ul>
                </div>
                <div>
                  <h4 className="mega-column-title">Shop by Height</h4>
                  <ul className="mega-link-list">
                    <li><Link to="/category/trees?height=Under+6">Under 6 Feet (Tabletop & Entry)</Link></li>
                    <li><Link to="/category/trees?height=6.5+-+7">6.5 - 7 Feet (Standard 8ft Ceilings)</Link></li>
                    <li><Link to="/category/trees?height=7.5">7.5 Feet (Most Popular Size)</Link></li>
                    <li><Link to="/category/trees?height=9+-+10">9 - 10 Feet (Vaulted Ceilings)</Link></li>
                    <li><Link to="/category/trees?height=12+">12 - 15+ Feet (Grand Estate Trees)</Link></li>
                  </ul>
                </div>
                <div>
                  <h4 className="mega-column-title">Innovations</h4>
                  <ul className="mega-link-list">
                    <li><Link to="/flip-tree">Patented Flip Tree® (No Heavy Lifting)</Link></li>
                    <li><Link to="/flip-tree">Easy Plug® Instant Trunk Lights</Link></li>
                    <li><Link to="/category/trees?lighting=Twinkly">Twinkly® App-Controlled Smart LEDs</Link></li>
                    <li><Link to="/category/trees?lighting=Clear">Simple String Light System</Link></li>
                  </ul>
                </div>
                <div>
                  <h4 className="mega-column-title">Signature Foliage</h4>
                  <ul className="mega-link-list">
                    <li><Link to="/product/1">BH Balsam Fir™ (#1 Best Seller)</Link></li>
                    <li><Link to="/product/2">Balsam Fir Flip Tree®</Link></li>
                    <li><Link to="/product/3">Silverado Slim Fir™</Link></li>
                    <li><Link to="/product/4">European Fir™</Link></li>
                  </ul>
                </div>
                <div className="mega-feature-card">
                  <img src="/assets/images/needle-realism-demo.jpg" alt="True Needle foliage" className="mega-feature-img" />
                  <div className="mega-feature-title">True Needle® Preview</div>
                  <Link to="/branch-sample-kit" className="mega-feature-link">Compare Foliage →</Link>
                </div>
              </div>
            </div>
          </li>

          {/* Wreaths & Garlands */}
          <li className="nav-item">
            <Link to="/category/wreaths" className="nav-link">
              <span>Wreaths & Garlands</span>
              <ChevronDown size={12} />
            </Link>
            <div className="mega-menu">
              <div className="mega-menu-grid">
                <div>
                  <h4 className="mega-column-title">Wreaths</h4>
                  <ul className="mega-link-list">
                    <li><Link to="/product/6">BH Fraser Fir Pre-Lit Wreath (26")</Link></li>
                    <li><Link to="/product/7">Champagne & Crystal Wreath (28")</Link></li>
                    <li><Link to="/product/8">Outdoor Red Berry Burst Wreath</Link></li>
                    <li><Link to="/category/wreaths">Battery Operated with Timers</Link></li>
                  </ul>
                </div>
                <div>
                  <h4 className="mega-column-title">Garlands & Greenery</h4>
                  <ul className="mega-link-list">
                    <li><Link to="/category/wreaths">Woodland Pine 10ft Mantel Garland</Link></li>
                    <li><Link to="/category/wreaths">Cedar Banister Swags</Link></li>
                    <li><Link to="/category/wreaths">Snowy Flocked Greenery</Link></li>
                    <li><Link to="/category/wreaths">Outdoor UV Protected Foliage</Link></li>
                  </ul>
                </div>
                <div>
                  <h4 className="mega-column-title">Decor Collections</h4>
                  <ul className="mega-link-list">
                    <li><Link to="/category/decor">French Country Woodland</Link></li>
                    <li><Link to="/category/decor">Silver & Champagne Radiance</Link></li>
                    <li><Link to="/category/decor">Traditional Berry & Gold</Link></li>
                  </ul>
                </div>
                <div>
                  <h4 className="mega-column-title">Foliage Accessories</h4>
                  <ul className="mega-link-list">
                    <li><Link to="/category/wreaths">Magnetic Wreath Hangers</Link></li>
                    <li><Link to="/category/wreaths">Foliage Storage Bags</Link></li>
                    <li><Link to="/category/wreaths">Scents of the Season Oils</Link></li>
                  </ul>
                </div>
                <div className="mega-feature-card">
                  <img src="/assets/images/fraser-fir-wreath.jpg" alt="Decorated Wreath" className="mega-feature-img" />
                  <div className="mega-feature-title">Shop The Look</div>
                  <Link to="/category/wreaths" className="mega-feature-link">View All Greenery →</Link>
                </div>
              </div>
            </div>
          </li>

          {/* Holiday Decor */}
          <li className="nav-item">
            <Link to="/category/decor" className="nav-link">
              <span>Holiday Decor</span>
              <ChevronDown size={12} />
            </Link>
            <div className="mega-menu">
              <div className="mega-menu-grid">
                <div>
                  <h4 className="mega-column-title">Ornaments</h4>
                  <ul className="mega-link-list">
                    <li><Link to="/category/decor">Mouth-Blown Glass Sets</Link></li>
                    <li><Link to="/category/decor">French Country Finials (36-pc)</Link></li>
                    <li><Link to="/category/decor">Mercury Glass Baubles</Link></li>
                    <li><Link to="/category/decor">Delicate Crystal Drops</Link></li>
                  </ul>
                </div>
                <div>
                  <h4 className="mega-column-title">Tree Accents</h4>
                  <ul className="mega-link-list">
                    <li><Link to="/category/decor">Handcrafted Woven Willow Collars</Link></li>
                    <li><Link to="/category/decor">Velvet & Quilted Tree Skirts</Link></li>
                    <li><Link to="/category/decor">Mirrored Star & Angel Tree Toppers</Link></li>
                    <li><Link to="/category/decor">Wired Velvet Ribbons</Link></li>
                  </ul>
                </div>
                <div>
                  <h4 className="mega-column-title">Tabletop & Hearth</h4>
                  <ul className="mega-link-list">
                    <li><Link to="/category/decor">Pre-Lit Musical Snow Globes</Link></li>
                    <li><Link to="/category/decor">Handmade Velvet Stockings</Link></li>
                    <li><Link to="/category/decor">Cast Brass Stocking Holders</Link></li>
                    <li><Link to="/category/decor">Lit Winter Lanterns</Link></li>
                  </ul>
                </div>
                <div>
                  <h4 className="mega-column-title">Outdoor Lit Decor</h4>
                  <ul className="mega-link-list">
                    <li><Link to="/category/decor">Pre-Lit Crystal Deer Family</Link></li>
                    <li><Link to="/category/decor">Pathway Lighted Trees</Link></li>
                    <li><Link to="/category/decor">Topiary Urn Fillers</Link></li>
                  </ul>
                </div>
                <div className="mega-feature-card">
                  <img src="/assets/images/gilded-glory-wreath.jpg" alt="Holiday Decor" className="mega-feature-img" />
                  <div className="mega-feature-title">Sam's Styling Secrets</div>
                  <Link to="/inspiration" className="mega-feature-link">Read Sam's Posts →</Link>
                </div>
              </div>
            </div>
          </li>

          {/* Branch Sample Kit */}
          <li className="nav-item">
            <Link to="/branch-sample-kit" className="nav-link">
              <span>Branch Sample Kit</span>
              <span className="nav-link-badge">Touch & Feel</span>
            </Link>
          </li>

          {/* Sam's Journal */}
          <li className="nav-item">
            <Link to="/inspiration" className="nav-link">
              <span>Sam's Inspiration</span>
              <span className="nav-link-badge" style={{ background: 'var(--color-gold)', color: '#000' }}>Guides</span>
            </Link>
          </li>

          {/* Tree Finder Quiz */}
          <li className="nav-item">
            <Link to="/tree-finder" className="nav-link">
              <span>Tree Finder Quiz</span>
            </Link>
          </li>

          {/* Sale */}
          <li className="nav-item">
            <Link to="/category/sale" className="nav-link" style={{ color: 'var(--color-gold-light)' }}>
              <span>Sale & Offers</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
