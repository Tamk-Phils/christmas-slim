import { createClient } from '@supabase/supabase-js';
import type { Product, Post } from '../types';

// ============================================================================
// SUPABASE CLIENT INITIALIZATION
// ============================================================================
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

export const supabase = (supabaseUrl && supabaseAnonKey && !supabaseUrl.includes('placeholder'))
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

// ============================================================================
// COMPREHENSIVE SEED DATABASE (Extracted from Balsam Hill Production Store)
// ============================================================================
export const SEED_PRODUCTS: Product[] = [
  {
    "id": "bh-balsam-fir",
    "name": "BH Balsam Fir\u2122",
    "category": "trees",
    "badge": "Best Seller",
    "badgeClass": "badge-best-seller",
    "rating": 4.95,
    "reviewsCount": 2840,
    "image": "/assets/images/bh-balsam-fir.jpg",
    "description": "Modeled after natural Abies balsamea from Maine, featuring our highest concentration of True Needle\u00ae foliage with semi-flat needles and subtle silver undersides.",
    "realism": "Most Realistic True Needle\u00ae (95%)",
    "lightStyle": "Candlelight Clear LED",
    "heights": [
      {
        "height": "6.5 ft",
        "price": 799,
        "originalPrice": 1099,
        "tips": "3,124 tips",
        "lights": "800 lights"
      },
      {
        "height": "7.5 ft",
        "price": 999,
        "originalPrice": 1399,
        "tips": "4,518 tips",
        "lights": "1,100 lights"
      },
      {
        "height": "9 ft",
        "price": 1399,
        "originalPrice": 1899,
        "tips": "6,280 tips",
        "lights": "1,500 lights"
      },
      {
        "height": "10 ft",
        "price": 1899,
        "originalPrice": 2499,
        "tips": "8,450 tips",
        "lights": "2,100 lights"
      }
    ],
    "selectedHeightIndex": 1,
    "isFeatured": true
  },
  {
    "id": "balsam-fir-flip",
    "name": "Balsam Fir Flip Tree\u00ae",
    "category": "trees",
    "badge": "Flip Tree\u00ae",
    "badgeClass": "badge-flip-tree",
    "rating": 4.98,
    "reviewsCount": 3120,
    "image": "/assets/images/balsam-fir-flip.jpg",
    "description": "Our patented Flip Tree\u00ae technology eliminates heavy lifting. Rolls on smooth rubber wheels and flips upright in seconds with Easy Plug\u00ae trunk lights connecting automatically.",
    "realism": "Most Realistic True Needle\u00ae (95%)",
    "lightStyle": "Dual Color + Clear LED",
    "heights": [
      {
        "height": "6.5 ft",
        "price": 899,
        "originalPrice": 1199,
        "tips": "3,124 tips",
        "lights": "750 lights"
      },
      {
        "height": "7.5 ft",
        "price": 1199,
        "originalPrice": 1599,
        "tips": "4,518 tips",
        "lights": "1,000 lights"
      },
      {
        "height": "9 ft",
        "price": 1599,
        "originalPrice": 2099,
        "tips": "6,280 tips",
        "lights": "1,400 lights"
      }
    ],
    "selectedHeightIndex": 1,
    "isFeatured": true
  },
  {
    "id": "silverado-slim",
    "name": "Silverado Slim Fir\u2122",
    "category": "trees",
    "badge": "Space Saver",
    "badgeClass": "badge-true-needle",
    "rating": 4.85,
    "reviewsCount": 1150,
    "image": "/assets/images/silverado-slim.jpg",
    "description": "Designed for compact corners, townhomes, and bay windows without sacrificing the dense, lifelike foliage of our full-sized trees.",
    "realism": "Realistic True Needle\u00ae (75%)",
    "lightStyle": "Candlelight Clear LED",
    "heights": [
      {
        "height": "6 ft",
        "price": 599,
        "originalPrice": 799,
        "tips": "1,890 tips",
        "lights": "500 lights"
      },
      {
        "height": "7 ft",
        "price": 799,
        "originalPrice": 1049,
        "tips": "2,740 tips",
        "lights": "700 lights"
      },
      {
        "height": "8 ft",
        "price": 999,
        "originalPrice": 1299,
        "tips": "3,500 tips",
        "lights": "900 lights"
      }
    ],
    "selectedHeightIndex": 1,
    "isFeatured": true
  },
  {
    "id": "european-fir",
    "name": "European Fir\u2122",
    "category": "trees",
    "badge": "Customer Pick",
    "badgeClass": "badge-best-seller",
    "rating": 4.9,
    "reviewsCount": 940,
    "image": "/assets/images/european-fir.jpg",
    "description": "Inspired by evergreen forests of Central Europe, characterized by outward-spreading tiers, open branch architecture, and room for larger statement ornaments.",
    "realism": "Most Realistic True Needle\u00ae (90%)",
    "lightStyle": "Candlelight Clear LED",
    "heights": [
      {
        "height": "6.5 ft",
        "price": 749,
        "originalPrice": 999,
        "tips": "2,420 tips",
        "lights": "700 lights"
      },
      {
        "height": "7.5 ft",
        "price": 949,
        "originalPrice": 1299,
        "tips": "3,650 tips",
        "lights": "950 lights"
      },
      {
        "height": "9 ft",
        "price": 1299,
        "originalPrice": 1749,
        "tips": "5,100 tips",
        "lights": "1,300 lights"
      }
    ],
    "selectedHeightIndex": 1,
    "isFeatured": true
  },
  {
    "id": "berkshire-mountain-fir",
    "name": "Berkshire Mountain Fir\u2122",
    "category": "trees",
    "badge": "Traditional Charm",
    "badgeClass": "badge-true-needle",
    "rating": 4.88,
    "reviewsCount": 820,
    "image": "/assets/images/berkshire-mountain-fir.jpg",
    "description": "Captures the classic rugged beauty of the New England mountains. Dense, layered needles with natural brown stems and sturdy branches.",
    "realism": "Realistic True Needle\u00ae (85%)",
    "lightStyle": "Candlelight Clear LED",
    "heights": [
      {
        "height": "6.5 ft",
        "price": 729,
        "originalPrice": 949,
        "tips": "2,580 tips",
        "lights": "750 lights"
      },
      {
        "height": "7.5 ft",
        "price": 929,
        "originalPrice": 1249,
        "tips": "3,800 tips",
        "lights": "1,000 lights"
      },
      {
        "height": "9 ft",
        "price": 1299,
        "originalPrice": 1699,
        "tips": "5,300 tips",
        "lights": "1,350 lights"
      }
    ],
    "selectedHeightIndex": 1,
    "isFeatured": false
  },
  {
    "id": "sanibel-spruce",
    "name": "Sanibel Spruce\u2122",
    "category": "trees",
    "badge": "Twinkly\u00ae Smart",
    "badgeClass": "badge-best-seller",
    "rating": 4.88,
    "reviewsCount": 860,
    "image": "/assets/images/sanibel-spruce.jpg",
    "description": "Rich blue-green needles with natural silvery tint, sturdy horizontal boughs, and pre-strung Twinkly\u00ae smart app-controlled lights.",
    "realism": "Realistic True Needle\u00ae (80%)",
    "lightStyle": "Twinkly\u00ae Smart RGB+W LED",
    "heights": [
      {
        "height": "6.5 ft",
        "price": 699,
        "originalPrice": 899,
        "tips": "2,200 tips",
        "lights": "600 lights"
      },
      {
        "height": "7.5 ft",
        "price": 899,
        "originalPrice": 1199,
        "tips": "3,250 tips",
        "lights": "850 lights"
      },
      {
        "height": "9 ft",
        "price": 1249,
        "originalPrice": 1649,
        "tips": "4,700 tips",
        "lights": "1,150 lights"
      }
    ],
    "selectedHeightIndex": 1,
    "isFeatured": false
  },
  {
    "id": "alpine-balsam-fir",
    "name": "Alpine Balsam Fir\u2122",
    "category": "trees",
    "badge": "Architectural",
    "badgeClass": "badge-true-needle",
    "rating": 4.92,
    "reviewsCount": 710,
    "image": "/assets/images/alpine-balsam-fir.jpg",
    "description": "Featuring natural open branch spacing that evokes wild mountain firs, perfect for showcasing your collection of delicate blown-glass ornaments.",
    "realism": "Most Realistic True Needle\u00ae (92%)",
    "lightStyle": "Micro Fairy LED",
    "heights": [
      {
        "height": "6.5 ft",
        "price": 779,
        "originalPrice": 999,
        "tips": "2,300 tips",
        "lights": "650 lights"
      },
      {
        "height": "7.5 ft",
        "price": 979,
        "originalPrice": 1329,
        "tips": "3,400 tips",
        "lights": "900 lights"
      },
      {
        "height": "9 ft",
        "price": 1349,
        "originalPrice": 1799,
        "tips": "4,900 tips",
        "lights": "1,250 lights"
      }
    ],
    "selectedHeightIndex": 1,
    "isFeatured": false
  },
  {
    "id": "frosted-fraser-fir",
    "name": "Frosted Fraser Fir\u2122",
    "category": "trees",
    "badge": "Snow Flocked",
    "badgeClass": "badge-best-seller",
    "rating": 4.94,
    "reviewsCount": 1240,
    "image": "/assets/images/frosted-fraser-fir.jpg",
    "description": "Delicately dusted with soft snow flocking that feels freshly fallen from an alpine morning, paired with warm candlelight micro LEDs.",
    "realism": "True Needle\u00ae with Heavy Flocking",
    "lightStyle": "Candlelight Clear LED",
    "heights": [
      {
        "height": "6.5 ft",
        "price": 849,
        "originalPrice": 1149,
        "tips": "2,750 tips",
        "lights": "700 lights"
      },
      {
        "height": "7.5 ft",
        "price": 1099,
        "originalPrice": 1499,
        "tips": "3,950 tips",
        "lights": "950 lights"
      },
      {
        "height": "9 ft",
        "price": 1499,
        "originalPrice": 1999,
        "tips": "5,400 tips",
        "lights": "1,350 lights"
      }
    ],
    "selectedHeightIndex": 1,
    "isFeatured": true
  },
  {
    "id": "lake-tahoe-pine",
    "name": "Lake Tahoe Pine\u2122",
    "category": "trees",
    "badge": "Sierra Mountain",
    "badgeClass": "badge-true-needle",
    "rating": 4.91,
    "reviewsCount": 530,
    "image": "/assets/images/lake-tahoe-pine.jpg",
    "description": "Featuring long, wispy pine needles with light green accents and genuine miniature sugar pinecones tucked throughout.",
    "realism": "True Needle\u00ae Pine Foliage",
    "lightStyle": "Candlelight Clear LED",
    "heights": [
      {
        "height": "7.5 ft",
        "price": 899,
        "originalPrice": 1249,
        "tips": "2,900 tips",
        "lights": "850 lights"
      },
      {
        "height": "9 ft",
        "price": 1299,
        "originalPrice": 1699,
        "tips": "4,100 tips",
        "lights": "1,150 lights"
      }
    ],
    "selectedHeightIndex": 0,
    "isFeatured": false
  },
  {
    "id": "norwegian-grand-fir",
    "name": "Norwegian Grand Fir\u2122",
    "category": "trees",
    "badge": "Scandinavian",
    "badgeClass": "badge-best-seller",
    "rating": 4.96,
    "reviewsCount": 670,
    "image": "/assets/images/norwegian-grand-fir.jpg",
    "description": "Inspired by Norwegian fjords, with deep forest green needles, silvery accents, and dense natural weeping boughs.",
    "realism": "Most Realistic True Needle\u00ae (94%)",
    "lightStyle": "Dual Color LED",
    "heights": [
      {
        "height": "7.5 ft",
        "price": 1049,
        "originalPrice": 1449,
        "tips": "4,200 tips",
        "lights": "1,050 lights"
      },
      {
        "height": "9 ft",
        "price": 1449,
        "originalPrice": 1949,
        "tips": "5,800 tips",
        "lights": "1,450 lights"
      }
    ],
    "selectedHeightIndex": 0,
    "isFeatured": false
  },
  {
    "id": "bh-noble-fir",
    "name": "BH Noble Fir\u2122",
    "category": "trees",
    "badge": "Regal Profile",
    "badgeClass": "badge-true-needle",
    "rating": 4.93,
    "reviewsCount": 910,
    "image": "/assets/images/bh-noble-fir.jpg",
    "description": "Known for its majestic horizontal branches and blue-green foliage, providing ample space to display your most treasured heirloom ornaments.",
    "realism": "Most Realistic True Needle\u00ae (92%)",
    "lightStyle": "Candlelight Clear LED",
    "heights": [
      {
        "height": "7.5 ft",
        "price": 999,
        "originalPrice": 1399,
        "tips": "3,800 tips",
        "lights": "950 lights"
      },
      {
        "height": "9 ft",
        "price": 1399,
        "originalPrice": 1899,
        "tips": "5,200 tips",
        "lights": "1,300 lights"
      }
    ],
    "selectedHeightIndex": 0,
    "isFeatured": false
  },
  {
    "id": "bh-4100833",
    "name": "Outdoor Harvest Bloom Wreath",
    "category": "wreaths",
    "badge": "Outdoor Safe",
    "badgeClass": "badge-true-needle",
    "rating": 4.98,
    "reviewsCount": 553,
    "image": "/assets/images/4100833_outdoor-harvest-bloom-wreath.webp",
    "description": "Authentic Balsam Hill outdoor harvest bloom wreath, designed with lifelike botanical textures, hand-detailed accents, and enduring holiday charm.",
    "realism": "True Needle\u00ae Botanical Blend",
    "lightStyle": "Unlit Natural Foliage",
    "heights": [
      {
        "height": "Standard",
        "price": 129,
        "originalPrice": 149,
        "tips": "Handcrafted foliage",
        "lights": "Warm LED"
      }
    ],
    "selectedHeightIndex": 0,
    "isFeatured": false
  },
  {
    "id": "bh-4003583",
    "name": "Scarlet Outdoor Sunset Mums Pot Filler",
    "category": "decor",
    "badge": "Outdoor Safe",
    "badgeClass": "badge-true-needle",
    "rating": 4.93,
    "reviewsCount": 503,
    "image": "/assets/images/4003583_scarlet-outdoor-sunset-mums-po.webp",
    "description": "Authentic Balsam Hill scarlet outdoor sunset mums pot filler, designed with lifelike botanical textures, hand-detailed accents, and enduring holiday charm.",
    "realism": "True Needle\u00ae Botanical Blend",
    "lightStyle": "Unlit Natural Foliage",
    "heights": [
      {
        "height": "Standard",
        "price": 119,
        "originalPrice": 189,
        "tips": "Handcrafted foliage",
        "lights": "Warm LED"
      }
    ],
    "selectedHeightIndex": 0,
    "isFeatured": false
  },
  {
    "id": "bh-4001600",
    "name": "Autumn Abundance Wreath",
    "category": "wreaths",
    "badge": "Best Seller",
    "badgeClass": "badge-best-seller",
    "rating": 4.9,
    "reviewsCount": 320,
    "image": "/assets/images/4001600_autumn-abundance-wreath.webp",
    "description": "Authentic Balsam Hill autumn abundance wreath, designed with lifelike botanical textures, hand-detailed accents, and enduring holiday charm.",
    "realism": "True Needle\u00ae Botanical Blend",
    "lightStyle": "Unlit Natural Foliage",
    "heights": [
      {
        "height": "Standard",
        "price": 179,
        "originalPrice": 299,
        "tips": "Handcrafted foliage",
        "lights": "Warm LED"
      }
    ],
    "selectedHeightIndex": 0,
    "isFeatured": false
  },
  {
    "id": "bh-4002367",
    "name": "Briarwood Cottage Wreath",
    "category": "wreaths",
    "badge": "Best Seller",
    "badgeClass": "badge-best-seller",
    "rating": 4.92,
    "reviewsCount": 187,
    "image": "/assets/images/4002367_briarwood-cottage-wreath.webp",
    "description": "Authentic Balsam Hill briarwood cottage wreath, designed with lifelike botanical textures, hand-detailed accents, and enduring holiday charm.",
    "realism": "True Needle\u00ae Botanical Blend",
    "lightStyle": "Unlit Natural Foliage",
    "heights": [
      {
        "height": "Standard",
        "price": 149,
        "originalPrice": 249,
        "tips": "Handcrafted foliage",
        "lights": "Warm LED"
      }
    ],
    "selectedHeightIndex": 0,
    "isFeatured": false
  },
  {
    "id": "bh-4100825",
    "name": "Scarlet Outdoor Sunset Mums Pot Filler Set",
    "category": "decor",
    "badge": "Outdoor Safe",
    "badgeClass": "badge-true-needle",
    "rating": 4.9,
    "reviewsCount": 545,
    "image": "/assets/images/4100825_scarlet-outdoor-sunset-mums-po.webp",
    "description": "Authentic Balsam Hill scarlet outdoor sunset mums pot filler set, designed with lifelike botanical textures, hand-detailed accents, and enduring holiday charm.",
    "realism": "True Needle\u00ae Botanical Blend",
    "lightStyle": "Unlit Natural Foliage",
    "heights": [
      {
        "height": "Standard",
        "price": 209,
        "originalPrice": 359,
        "tips": "Handcrafted foliage",
        "lights": "Warm LED"
      }
    ],
    "selectedHeightIndex": 0,
    "isFeatured": false
  },
  {
    "id": "bh-4003559",
    "name": "Outdoor Sunburst Mums Wreath",
    "category": "wreaths",
    "badge": "Outdoor Safe",
    "badgeClass": "badge-true-needle",
    "rating": 4.99,
    "reviewsCount": 479,
    "image": "/assets/images/4003559_outdoor-sunburst-mums-wreath.webp",
    "description": "Authentic Balsam Hill outdoor sunburst mums wreath, designed with lifelike botanical textures, hand-detailed accents, and enduring holiday charm.",
    "realism": "True Needle\u00ae Botanical Blend",
    "lightStyle": "Unlit Natural Foliage",
    "heights": [
      {
        "height": "Standard",
        "price": 159,
        "originalPrice": 189,
        "tips": "Handcrafted foliage",
        "lights": "Warm LED"
      }
    ],
    "selectedHeightIndex": 0,
    "isFeatured": false
  },
  {
    "id": "bh-4002948",
    "name": "Fairytale Pumpkin Wreath",
    "category": "wreaths",
    "badge": "Best Seller",
    "badgeClass": "badge-best-seller",
    "rating": 4.88,
    "reviewsCount": 318,
    "image": "/assets/images/4002948_fairytale-pumpkin-wreath.webp",
    "description": "Authentic Balsam Hill fairytale pumpkin wreath, designed with lifelike botanical textures, hand-detailed accents, and enduring holiday charm.",
    "realism": "True Needle\u00ae Botanical Blend",
    "lightStyle": "Unlit Natural Foliage",
    "heights": [
      {
        "height": "Standard",
        "price": 299,
        "originalPrice": 319,
        "tips": "Handcrafted foliage",
        "lights": "Warm LED"
      }
    ],
    "selectedHeightIndex": 0,
    "isFeatured": false
  },
  {
    "id": "bh-4003561",
    "name": "Outdoor Autumn Traditions Wreath",
    "category": "wreaths",
    "badge": "Outdoor Safe",
    "badgeClass": "badge-true-needle",
    "rating": 4.86,
    "reviewsCount": 481,
    "image": "/assets/images/4003561_outdoor-autumn-traditions-wrea.webp",
    "description": "Authentic Balsam Hill outdoor autumn traditions wreath, designed with lifelike botanical textures, hand-detailed accents, and enduring holiday charm.",
    "realism": "True Needle\u00ae Botanical Blend",
    "lightStyle": "Unlit Natural Foliage",
    "heights": [
      {
        "height": "Standard",
        "price": 119,
        "originalPrice": 199,
        "tips": "Handcrafted foliage",
        "lights": "Warm LED"
      }
    ],
    "selectedHeightIndex": 0,
    "isFeatured": false
  },
  {
    "id": "bh-4107623",
    "name": "Ivory Outdoor Sunset Mums Pot Filler Set",
    "category": "decor",
    "badge": "Outdoor Safe",
    "badgeClass": "badge-true-needle",
    "rating": 4.93,
    "reviewsCount": 143,
    "image": "/assets/images/4107623_ivory-outdoor-sunset-mums-pot-.webp",
    "description": "Authentic Balsam Hill ivory outdoor sunset mums pot filler set, designed with lifelike botanical textures, hand-detailed accents, and enduring holiday charm.",
    "realism": "True Needle\u00ae Botanical Blend",
    "lightStyle": "Unlit Natural Foliage",
    "heights": [
      {
        "height": "Standard",
        "price": 209,
        "originalPrice": 359,
        "tips": "Handcrafted foliage",
        "lights": "Warm LED"
      }
    ],
    "selectedHeightIndex": 0,
    "isFeatured": false
  },
  {
    "id": "bh-4004064",
    "name": "Outdoor Dahlia Festival Wreath",
    "category": "wreaths",
    "badge": "Outdoor Safe",
    "badgeClass": "badge-true-needle",
    "rating": 4.94,
    "reviewsCount": 534,
    "image": "/assets/images/4004064_outdoor-dahlia-festival-wreath.webp",
    "description": "Authentic Balsam Hill outdoor dahlia festival wreath, designed with lifelike botanical textures, hand-detailed accents, and enduring holiday charm.",
    "realism": "True Needle\u00ae Botanical Blend",
    "lightStyle": "Unlit Natural Foliage",
    "heights": [
      {
        "height": "Standard",
        "price": 149,
        "originalPrice": 229,
        "tips": "Handcrafted foliage",
        "lights": "Warm LED"
      }
    ],
    "selectedHeightIndex": 0,
    "isFeatured": false
  },
  {
    "id": "bh-4107622",
    "name": "Ivory Outdoor Sunset Mums Pot Filler",
    "category": "decor",
    "badge": "Outdoor Safe",
    "badgeClass": "badge-true-needle",
    "rating": 4.92,
    "reviewsCount": 142,
    "image": "/assets/images/4107622_ivory-outdoor-sunset-mums-pot-.webp",
    "description": "Authentic Balsam Hill ivory outdoor sunset mums pot filler, designed with lifelike botanical textures, hand-detailed accents, and enduring holiday charm.",
    "realism": "True Needle\u00ae Botanical Blend",
    "lightStyle": "Unlit Natural Foliage",
    "heights": [
      {
        "height": "Standard",
        "price": 159,
        "originalPrice": 189,
        "tips": "Handcrafted foliage",
        "lights": "Warm LED"
      }
    ],
    "selectedHeightIndex": 0,
    "isFeatured": false
  },
  {
    "id": "bh-4003556",
    "name": "Glowing Glass Pumpkins",
    "category": "decor",
    "badge": "Best Seller",
    "badgeClass": "badge-best-seller",
    "rating": 4.96,
    "reviewsCount": 476,
    "image": "/assets/images/4003556_glowing-glass-pumpkins.webp",
    "description": "Authentic Balsam Hill glowing glass pumpkins, designed with lifelike botanical textures, hand-detailed accents, and enduring holiday charm.",
    "realism": "True Needle\u00ae Botanical Blend",
    "lightStyle": "Unlit Natural Foliage",
    "heights": [
      {
        "height": "Standard",
        "price": 109,
        "originalPrice": 229,
        "tips": "Handcrafted foliage",
        "lights": "Warm LED"
      }
    ],
    "selectedHeightIndex": 0,
    "isFeatured": false
  },
  {
    "id": "bh-4003546",
    "name": "Outdoor Lit Autumn Maple Tree",
    "category": "decor",
    "badge": "Outdoor Safe",
    "badgeClass": "badge-true-needle",
    "rating": 4.86,
    "reviewsCount": 466,
    "image": "/assets/images/4003546_outdoor-lit-autumn-maple-tree.webp",
    "description": "Authentic Balsam Hill outdoor lit autumn maple tree, designed with lifelike botanical textures, hand-detailed accents, and enduring holiday charm.",
    "realism": "True Needle\u00ae Botanical Blend",
    "lightStyle": "Battery LED with 6-Hour Timer",
    "heights": [
      {
        "height": "Standard",
        "price": 149,
        "originalPrice": 249,
        "tips": "Handcrafted foliage",
        "lights": "Warm LED"
      }
    ],
    "selectedHeightIndex": 0,
    "isFeatured": false
  },
  {
    "id": "bh-4001956",
    "name": "Country Fields Wreath",
    "category": "wreaths",
    "badge": "Best Seller",
    "badgeClass": "badge-best-seller",
    "rating": 4.86,
    "reviewsCount": 226,
    "image": "/assets/images/4001956_country-fields-wreath.webp",
    "description": "Authentic Balsam Hill country fields wreath, designed with lifelike botanical textures, hand-detailed accents, and enduring holiday charm.",
    "realism": "True Needle\u00ae Botanical Blend",
    "lightStyle": "Unlit Natural Foliage",
    "heights": [
      {
        "height": "Standard",
        "price": 189,
        "originalPrice": 249,
        "tips": "Handcrafted foliage",
        "lights": "Warm LED"
      }
    ],
    "selectedHeightIndex": 0,
    "isFeatured": false
  },
  {
    "id": "bh-4003569",
    "name": "Outdoor Autumn Maple Wreath",
    "category": "wreaths",
    "badge": "Outdoor Safe",
    "badgeClass": "badge-true-needle",
    "rating": 4.94,
    "reviewsCount": 489,
    "image": "/assets/images/4003569_outdoor-autumn-maple-wreath.webp",
    "description": "Authentic Balsam Hill outdoor autumn maple wreath, designed with lifelike botanical textures, hand-detailed accents, and enduring holiday charm.",
    "realism": "True Needle\u00ae Botanical Blend",
    "lightStyle": "Unlit Natural Foliage",
    "heights": [
      {
        "height": "Standard",
        "price": 69,
        "originalPrice": 149,
        "tips": "Handcrafted foliage",
        "lights": "Warm LED"
      }
    ],
    "selectedHeightIndex": 0,
    "isFeatured": false
  },
  {
    "id": "bh-4003552",
    "name": "Bronzed Tabletop Turkey",
    "category": "decor",
    "badge": "Best Seller",
    "badgeClass": "badge-best-seller",
    "rating": 4.92,
    "reviewsCount": 472,
    "image": "/assets/images/4003552_bronzed-tabletop-turkey.webp",
    "description": "Authentic Balsam Hill bronzed tabletop turkey, designed with lifelike botanical textures, hand-detailed accents, and enduring holiday charm.",
    "realism": "True Needle\u00ae Botanical Blend",
    "lightStyle": "Unlit Natural Foliage",
    "heights": [
      {
        "height": "Standard",
        "price": 189,
        "originalPrice": 249,
        "tips": "Handcrafted foliage",
        "lights": "Warm LED"
      }
    ],
    "selectedHeightIndex": 0,
    "isFeatured": false
  },
  {
    "id": "bh-4100824",
    "name": "Orange Outdoor Sunset Mums Pot Filler Set",
    "category": "decor",
    "badge": "Outdoor Safe",
    "badgeClass": "badge-true-needle",
    "rating": 4.89,
    "reviewsCount": 544,
    "image": "/assets/images/4100824_orange-outdoor-sunset-mums-pot.webp",
    "description": "Authentic Balsam Hill orange outdoor sunset mums pot filler set, designed with lifelike botanical textures, hand-detailed accents, and enduring holiday charm.",
    "realism": "True Needle\u00ae Botanical Blend",
    "lightStyle": "Unlit Natural Foliage",
    "heights": [
      {
        "height": "Standard",
        "price": 289,
        "originalPrice": 359,
        "tips": "Handcrafted foliage",
        "lights": "Warm LED"
      }
    ],
    "selectedHeightIndex": 0,
    "isFeatured": false
  },
  {
    "id": "bh-4100823",
    "name": "Gold Outdoor Sunset Mums Pot Filler",
    "category": "decor",
    "badge": "Outdoor Safe",
    "badgeClass": "badge-true-needle",
    "rating": 4.88,
    "reviewsCount": 543,
    "image": "/assets/images/4100823_gold-outdoor-sunset-mums-pot-f.webp",
    "description": "Authentic Balsam Hill gold outdoor sunset mums pot filler, designed with lifelike botanical textures, hand-detailed accents, and enduring holiday charm.",
    "realism": "True Needle\u00ae Botanical Blend",
    "lightStyle": "Unlit Natural Foliage",
    "heights": [
      {
        "height": "Standard",
        "price": 159,
        "originalPrice": 189,
        "tips": "Handcrafted foliage",
        "lights": "Warm LED"
      }
    ],
    "selectedHeightIndex": 0,
    "isFeatured": false
  },
  {
    "id": "bh-4107630",
    "name": "Harvest Maple Wreath",
    "category": "wreaths",
    "badge": "Best Seller",
    "badgeClass": "badge-best-seller",
    "rating": 4.85,
    "reviewsCount": 150,
    "image": "/assets/images/4107630_harvest-maple-wreath.webp",
    "description": "Authentic Balsam Hill harvest maple wreath, designed with lifelike botanical textures, hand-detailed accents, and enduring holiday charm.",
    "realism": "True Needle\u00ae Botanical Blend",
    "lightStyle": "Unlit Natural Foliage",
    "heights": [
      {
        "height": "Standard",
        "price": 109,
        "originalPrice": 179,
        "tips": "Handcrafted foliage",
        "lights": "Warm LED"
      }
    ],
    "selectedHeightIndex": 0,
    "isFeatured": false
  },
  {
    "id": "bh-4107620",
    "name": "Orange Outdoor Vibrant Dahlias Pot Filler",
    "category": "decor",
    "badge": "Outdoor Safe",
    "badgeClass": "badge-true-needle",
    "rating": 4.9,
    "reviewsCount": 140,
    "image": "/assets/images/4107620_orange-outdoor-vibrant-dahlias.webp",
    "description": "Authentic Balsam Hill orange outdoor vibrant dahlias pot filler, designed with lifelike botanical textures, hand-detailed accents, and enduring holiday charm.",
    "realism": "True Needle\u00ae Botanical Blend",
    "lightStyle": "Unlit Natural Foliage",
    "heights": [
      {
        "height": "Standard",
        "price": 239,
        "originalPrice": 379,
        "tips": "Handcrafted foliage",
        "lights": "Warm LED"
      }
    ],
    "selectedHeightIndex": 0,
    "isFeatured": false
  },
  {
    "id": "bh-4004063",
    "name": "Pumpkin Patch and Berry Wreath",
    "category": "wreaths",
    "badge": "Best Seller",
    "badgeClass": "badge-best-seller",
    "rating": 4.93,
    "reviewsCount": 533,
    "image": "/assets/images/4004063_pumpkin-patch-and-berry-wreath.webp",
    "description": "Authentic Balsam Hill pumpkin patch and berry wreath, designed with lifelike botanical textures, hand-detailed accents, and enduring holiday charm.",
    "realism": "True Needle\u00ae Botanical Blend",
    "lightStyle": "Unlit Natural Foliage",
    "heights": [
      {
        "height": "Standard",
        "price": 99,
        "originalPrice": 199,
        "tips": "Handcrafted foliage",
        "lights": "Warm LED"
      }
    ],
    "selectedHeightIndex": 0,
    "isFeatured": false
  },
  {
    "id": "bh-4003544",
    "name": "Solar Jack-o'-Lantern Pathway Lights",
    "category": "decor",
    "badge": "Outdoor Safe",
    "badgeClass": "badge-true-needle",
    "rating": 4.99,
    "reviewsCount": 464,
    "image": "/assets/images/4003544_solar-jack-o-lantern-pathway-l.webp",
    "description": "Authentic Balsam Hill solar jack-o'-lantern pathway lights, designed with lifelike botanical textures, hand-detailed accents, and enduring holiday charm.",
    "realism": "True Needle\u00ae Botanical Blend",
    "lightStyle": "Unlit Natural Foliage",
    "heights": [
      {
        "height": "Standard",
        "price": 89,
        "originalPrice": 169,
        "tips": "Handcrafted foliage",
        "lights": "Warm LED"
      }
    ],
    "selectedHeightIndex": 0,
    "isFeatured": false
  },
  {
    "id": "bh-4003550",
    "name": "Outdoor Lit Wire Pumpkins",
    "category": "decor",
    "badge": "Outdoor Safe",
    "badgeClass": "badge-true-needle",
    "rating": 4.9,
    "reviewsCount": 470,
    "image": "/assets/images/4003550_outdoor-lit-wire-pumpkins.webp",
    "description": "Authentic Balsam Hill outdoor lit wire pumpkins, designed with lifelike botanical textures, hand-detailed accents, and enduring holiday charm.",
    "realism": "True Needle\u00ae Botanical Blend",
    "lightStyle": "Battery LED with 6-Hour Timer",
    "heights": [
      {
        "height": "Standard",
        "price": 159,
        "originalPrice": 319,
        "tips": "Handcrafted foliage",
        "lights": "Warm LED"
      }
    ],
    "selectedHeightIndex": 0,
    "isFeatured": false
  },
  {
    "id": "bh-4003397",
    "name": "Tabletop Heirloom Pumpkin Set",
    "category": "decor",
    "badge": "Best Seller",
    "badgeClass": "badge-best-seller",
    "rating": 4.87,
    "reviewsCount": 317,
    "image": "/assets/images/4003397_tabletop-heirloom-pumpkin-set.webp",
    "description": "Authentic Balsam Hill tabletop heirloom pumpkin set, designed with lifelike botanical textures, hand-detailed accents, and enduring holiday charm.",
    "realism": "True Needle\u00ae Botanical Blend",
    "lightStyle": "Unlit Natural Foliage",
    "heights": [
      {
        "height": "Standard",
        "price": 69,
        "originalPrice": 149,
        "tips": "Handcrafted foliage",
        "lights": "Warm LED"
      }
    ],
    "selectedHeightIndex": 0,
    "isFeatured": false
  },
  {
    "id": "bh-4003398",
    "name": "Crate of 12 Mini Pumpkins",
    "category": "decor",
    "badge": "Best Seller",
    "badgeClass": "badge-best-seller",
    "rating": 4.88,
    "reviewsCount": 318,
    "image": "/assets/images/4003398_crate-of-12-mini-pumpkins.webp",
    "description": "Authentic Balsam Hill crate of 12 mini pumpkins, designed with lifelike botanical textures, hand-detailed accents, and enduring holiday charm.",
    "realism": "True Needle\u00ae Botanical Blend",
    "lightStyle": "Unlit Natural Foliage",
    "heights": [
      {
        "height": "Standard",
        "price": 89,
        "originalPrice": 189,
        "tips": "Handcrafted foliage",
        "lights": "Warm LED"
      }
    ],
    "selectedHeightIndex": 0,
    "isFeatured": false
  },
  {
    "id": "bh-4000444",
    "name": "Red Wreath Storage Bag",
    "category": "wreaths",
    "badge": "Best Seller",
    "badgeClass": "badge-best-seller",
    "rating": 4.89,
    "reviewsCount": 514,
    "image": "/assets/images/4000444_red-wreath-storage-bag.webp",
    "description": "Authentic Balsam Hill red wreath storage bag, designed with lifelike botanical textures, hand-detailed accents, and enduring holiday charm.",
    "realism": "True Needle\u00ae Botanical Blend",
    "lightStyle": "Unlit Natural Foliage",
    "heights": [
      {
        "height": "Standard",
        "price": 139,
        "originalPrice": 179,
        "tips": "Handcrafted foliage",
        "lights": "Warm LED"
      }
    ],
    "selectedHeightIndex": 0,
    "isFeatured": true
  },
  {
    "id": "bh-4100821",
    "name": "Succulent Harvest Pumpkin Centerpiece Arrangement",
    "category": "decor",
    "badge": "Best Seller",
    "badgeClass": "badge-best-seller",
    "rating": 4.86,
    "reviewsCount": 541,
    "image": "/assets/images/4100821_succulent-harvest-pumpkin-cent.webp",
    "description": "Authentic Balsam Hill succulent harvest pumpkin centerpiece arrangement, designed with lifelike botanical textures, hand-detailed accents, and enduring holiday charm.",
    "realism": "True Needle\u00ae Botanical Blend",
    "lightStyle": "Unlit Natural Foliage",
    "heights": [
      {
        "height": "Standard",
        "price": 119,
        "originalPrice": 199,
        "tips": "Handcrafted foliage",
        "lights": "Warm LED"
      }
    ],
    "selectedHeightIndex": 0,
    "isFeatured": false
  },
  {
    "id": "bh-4100827",
    "name": "Orange Outdoor Sunset Mums Hanging Basket",
    "category": "decor",
    "badge": "Outdoor Safe",
    "badgeClass": "badge-true-needle",
    "rating": 4.92,
    "reviewsCount": 547,
    "image": "/assets/images/4100827_orange-outdoor-sunset-mums-han.webp",
    "description": "Authentic Balsam Hill orange outdoor sunset mums hanging basket, designed with lifelike botanical textures, hand-detailed accents, and enduring holiday charm.",
    "realism": "True Needle\u00ae Botanical Blend",
    "lightStyle": "Unlit Natural Foliage",
    "heights": [
      {
        "height": "Standard",
        "price": 119,
        "originalPrice": 149,
        "tips": "Handcrafted foliage",
        "lights": "Warm LED"
      }
    ],
    "selectedHeightIndex": 0,
    "isFeatured": false
  },
  {
    "id": "bh-4107621",
    "name": "Crimson Outdoor Vibrant Dahlias Pot Filler",
    "category": "decor",
    "badge": "Outdoor Safe",
    "badgeClass": "badge-true-needle",
    "rating": 4.91,
    "reviewsCount": 141,
    "image": "/assets/images/4107621_crimson-outdoor-vibrant-dahlia.webp",
    "description": "Authentic Balsam Hill crimson outdoor vibrant dahlias pot filler, designed with lifelike botanical textures, hand-detailed accents, and enduring holiday charm.",
    "realism": "True Needle\u00ae Botanical Blend",
    "lightStyle": "Unlit Natural Foliage",
    "heights": [
      {
        "height": "Standard",
        "price": 249,
        "originalPrice": 379,
        "tips": "Handcrafted foliage",
        "lights": "Warm LED"
      }
    ],
    "selectedHeightIndex": 0,
    "isFeatured": false
  },
  {
    "id": "bh-4004023",
    "name": "Outdoor Boxwood Wreath",
    "category": "wreaths",
    "badge": "Outdoor Safe",
    "badgeClass": "badge-true-needle",
    "rating": 4.98,
    "reviewsCount": 493,
    "image": "/assets/images/4004023_outdoor-boxwood-wreath.webp",
    "description": "Authentic Balsam Hill outdoor boxwood wreath, designed with lifelike botanical textures, hand-detailed accents, and enduring holiday charm.",
    "realism": "True Needle\u00ae Botanical Blend",
    "lightStyle": "Unlit Natural Foliage",
    "heights": [
      {
        "height": "Standard",
        "price": 99,
        "originalPrice": 149,
        "tips": "Handcrafted foliage",
        "lights": "Warm LED"
      }
    ],
    "selectedHeightIndex": 0,
    "isFeatured": false
  },
  {
    "id": "bh-4003399",
    "name": "Faux Wood Pumpkins",
    "category": "decor",
    "badge": "Best Seller",
    "badgeClass": "badge-best-seller",
    "rating": 4.89,
    "reviewsCount": 319,
    "image": "/assets/images/4003399_faux-wood-pumpkins.webp",
    "description": "Authentic Balsam Hill faux wood pumpkins, designed with lifelike botanical textures, hand-detailed accents, and enduring holiday charm.",
    "realism": "True Needle\u00ae Botanical Blend",
    "lightStyle": "Unlit Natural Foliage",
    "heights": [
      {
        "height": "Standard",
        "price": 99,
        "originalPrice": 179,
        "tips": "Handcrafted foliage",
        "lights": "Warm LED"
      }
    ],
    "selectedHeightIndex": 0,
    "isFeatured": false
  },
  {
    "id": "bh-4003205",
    "name": "Autumn Abundance Arrangement",
    "category": "decor",
    "badge": "Best Seller",
    "badgeClass": "badge-best-seller",
    "rating": 4.9,
    "reviewsCount": 125,
    "image": "/assets/images/4003205_autumn-abundance-arrangement.webp",
    "description": "Authentic Balsam Hill autumn abundance arrangement, designed with lifelike botanical textures, hand-detailed accents, and enduring holiday charm.",
    "realism": "True Needle\u00ae Botanical Blend",
    "lightStyle": "Unlit Natural Foliage",
    "heights": [
      {
        "height": "Standard",
        "price": 129,
        "originalPrice": 219,
        "tips": "Handcrafted foliage",
        "lights": "Warm LED"
      }
    ],
    "selectedHeightIndex": 0,
    "isFeatured": false
  },
  {
    "id": "bh-4004059",
    "name": "Fall Harvest Wreath",
    "category": "wreaths",
    "badge": "Best Seller",
    "badgeClass": "badge-best-seller",
    "rating": 4.89,
    "reviewsCount": 529,
    "image": "/assets/images/4004059_fall-harvest-wreath.webp",
    "description": "Authentic Balsam Hill fall harvest wreath, designed with lifelike botanical textures, hand-detailed accents, and enduring holiday charm.",
    "realism": "True Needle\u00ae Botanical Blend",
    "lightStyle": "Unlit Natural Foliage",
    "heights": [
      {
        "height": "Standard",
        "price": 89,
        "originalPrice": 179,
        "tips": "Handcrafted foliage",
        "lights": "Warm LED"
      }
    ],
    "selectedHeightIndex": 0,
    "isFeatured": false
  },
  {
    "id": "bh-4004008",
    "name": "Mixed Eucalyptus Wreath",
    "category": "wreaths",
    "badge": "Best Seller",
    "badgeClass": "badge-best-seller",
    "rating": 4.98,
    "reviewsCount": 478,
    "image": "/assets/images/4004008_mixed-eucalyptus-wreath.webp",
    "description": "Authentic Balsam Hill mixed eucalyptus wreath, designed with lifelike botanical textures, hand-detailed accents, and enduring holiday charm.",
    "realism": "True Needle\u00ae Botanical Blend",
    "lightStyle": "Unlit Natural Foliage",
    "heights": [
      {
        "height": "Standard",
        "price": 99,
        "originalPrice": 169,
        "tips": "Handcrafted foliage",
        "lights": "Warm LED"
      }
    ],
    "selectedHeightIndex": 0,
    "isFeatured": false
  },
  {
    "id": "bh-4100829",
    "name": "Gold Outdoor Sunset Mums Hanging Basket",
    "category": "decor",
    "badge": "Outdoor Safe",
    "badgeClass": "badge-true-needle",
    "rating": 4.94,
    "reviewsCount": 549,
    "image": "/assets/images/4100829_gold-outdoor-sunset-mums-hangi.webp",
    "description": "Authentic Balsam Hill gold outdoor sunset mums hanging basket, designed with lifelike botanical textures, hand-detailed accents, and enduring holiday charm.",
    "realism": "True Needle\u00ae Botanical Blend",
    "lightStyle": "Unlit Natural Foliage",
    "heights": [
      {
        "height": "Standard",
        "price": 89,
        "originalPrice": 149,
        "tips": "Handcrafted foliage",
        "lights": "Warm LED"
      }
    ],
    "selectedHeightIndex": 0,
    "isFeatured": false
  },
  {
    "id": "bh-4000782",
    "name": "Fall Harvest Swag",
    "category": "wreaths",
    "badge": "Best Seller",
    "badgeClass": "badge-best-seller",
    "rating": 4.97,
    "reviewsCount": 402,
    "image": "/assets/images/4000782_fall-harvest-swag.webp",
    "description": "Authentic Balsam Hill fall harvest swag, designed with lifelike botanical textures, hand-detailed accents, and enduring holiday charm.",
    "realism": "True Needle\u00ae Botanical Blend",
    "lightStyle": "Unlit Natural Foliage",
    "heights": [
      {
        "height": "Standard",
        "price": 119,
        "originalPrice": 239,
        "tips": "Handcrafted foliage",
        "lights": "Warm LED"
      }
    ],
    "selectedHeightIndex": 0,
    "isFeatured": false
  },
  {
    "id": "bh-4107639",
    "name": "Outdoor Fairytale Heirloom Pumpkin Set",
    "category": "decor",
    "badge": "Best Seller",
    "badgeClass": "badge-best-seller",
    "rating": 4.94,
    "reviewsCount": 159,
    "image": "/assets/images/4107639_outdoor-fairytale-heirloom-pum.webp",
    "description": "Authentic Balsam Hill outdoor fairytale heirloom pumpkin set, designed with lifelike botanical textures, hand-detailed accents, and enduring holiday charm.",
    "realism": "True Needle\u00ae Botanical Blend",
    "lightStyle": "Unlit Natural Foliage",
    "heights": [
      {
        "height": "Standard",
        "price": 271,
        "originalPrice": 339,
        "tips": "Handcrafted foliage",
        "lights": "Warm LED"
      }
    ],
    "selectedHeightIndex": 0,
    "isFeatured": false
  },
  {
    "id": "bh-4100840",
    "name": "Orange Lit Stackable Jack-o'-Lanterns, Set of 3",
    "category": "decor",
    "badge": "Outdoor Safe",
    "badgeClass": "badge-true-needle",
    "rating": 4.9,
    "reviewsCount": 560,
    "image": "/assets/images/4100840_orange-lit-stackable-jack-o-la.webp",
    "description": "Authentic Balsam Hill orange lit stackable jack-o'-lanterns, set of 3, designed with lifelike botanical textures, hand-detailed accents, and enduring holiday charm.",
    "realism": "True Needle\u00ae Botanical Blend",
    "lightStyle": "Battery LED with 6-Hour Timer",
    "heights": [
      {
        "height": "Standard",
        "price": 169,
        "originalPrice": 349,
        "tips": "Handcrafted foliage",
        "lights": "Warm LED"
      }
    ],
    "selectedHeightIndex": 0,
    "isFeatured": false
  },
  {
    "id": "bh-4003582",
    "name": "Orange Outdoor Sunset Mums Pot Filler",
    "category": "decor",
    "badge": "Outdoor Safe",
    "badgeClass": "badge-true-needle",
    "rating": 4.92,
    "reviewsCount": 502,
    "image": "/assets/images/4003582_orange-outdoor-sunset-mums-pot.webp",
    "description": "Authentic Balsam Hill orange outdoor sunset mums pot filler, designed with lifelike botanical textures, hand-detailed accents, and enduring holiday charm.",
    "realism": "True Needle\u00ae Botanical Blend",
    "lightStyle": "Unlit Natural Foliage",
    "heights": [
      {
        "height": "Standard",
        "price": 159,
        "originalPrice": 189,
        "tips": "Handcrafted foliage",
        "lights": "Warm LED"
      }
    ],
    "selectedHeightIndex": 0,
    "isFeatured": false
  },
  {
    "id": "bh-4100828",
    "name": "Scarlet Outdoor Sunset Mums Hanging Basket",
    "category": "decor",
    "badge": "Outdoor Safe",
    "badgeClass": "badge-true-needle",
    "rating": 4.93,
    "reviewsCount": 548,
    "image": "/assets/images/4100828_scarlet-outdoor-sunset-mums-ha.webp",
    "description": "Authentic Balsam Hill scarlet outdoor sunset mums hanging basket, designed with lifelike botanical textures, hand-detailed accents, and enduring holiday charm.",
    "realism": "True Needle\u00ae Botanical Blend",
    "lightStyle": "Unlit Natural Foliage",
    "heights": [
      {
        "height": "Standard",
        "price": 129,
        "originalPrice": 149,
        "tips": "Handcrafted foliage",
        "lights": "Warm LED"
      }
    ],
    "selectedHeightIndex": 0,
    "isFeatured": false
  },
  {
    "id": "bh-4002343",
    "name": "Outdoor Harvest Bloom Potted Arrangement",
    "category": "decor",
    "badge": "Outdoor Safe",
    "badgeClass": "badge-true-needle",
    "rating": 4.98,
    "reviewsCount": 163,
    "image": "/assets/images/4002343_outdoor-harvest-bloom-potted-a.webp",
    "description": "Authentic Balsam Hill outdoor harvest bloom potted arrangement, designed with lifelike botanical textures, hand-detailed accents, and enduring holiday charm.",
    "realism": "True Needle\u00ae Botanical Blend",
    "lightStyle": "Unlit Natural Foliage",
    "heights": [
      {
        "height": "Standard",
        "price": 189,
        "originalPrice": 329,
        "tips": "Handcrafted foliage",
        "lights": "Warm LED"
      }
    ],
    "selectedHeightIndex": 0,
    "isFeatured": false
  },
  {
    "id": "bh-4100832",
    "name": "Gold Outdoor Sunset Mums Window Box",
    "category": "decor",
    "badge": "Outdoor Safe",
    "badgeClass": "badge-true-needle",
    "rating": 4.97,
    "reviewsCount": 552,
    "image": "/assets/images/4100832_gold-outdoor-sunset-mums-windo.webp",
    "description": "Authentic Balsam Hill gold outdoor sunset mums window box, designed with lifelike botanical textures, hand-detailed accents, and enduring holiday charm.",
    "realism": "True Needle\u00ae Botanical Blend",
    "lightStyle": "Unlit Natural Foliage",
    "heights": [
      {
        "height": "Standard",
        "price": 89,
        "originalPrice": 149,
        "tips": "Handcrafted foliage",
        "lights": "Warm LED"
      }
    ],
    "selectedHeightIndex": 0,
    "isFeatured": false
  },
  {
    "id": "bh-4001594",
    "name": "Autumn Abundance Swag",
    "category": "wreaths",
    "badge": "Best Seller",
    "badgeClass": "badge-best-seller",
    "rating": 4.99,
    "reviewsCount": 314,
    "image": "/assets/images/4001594_autumn-abundance-swag.webp",
    "description": "Authentic Balsam Hill autumn abundance swag, designed with lifelike botanical textures, hand-detailed accents, and enduring holiday charm.",
    "realism": "True Needle\u00ae Botanical Blend",
    "lightStyle": "Unlit Natural Foliage",
    "heights": [
      {
        "height": "Standard",
        "price": 139,
        "originalPrice": 239,
        "tips": "Handcrafted foliage",
        "lights": "Warm LED"
      }
    ],
    "selectedHeightIndex": 0,
    "isFeatured": false
  },
  {
    "id": "bh-4002341",
    "name": "Outdoor Harvest Bloom Garland",
    "category": "wreaths",
    "badge": "Outdoor Safe",
    "badgeClass": "badge-true-needle",
    "rating": 4.96,
    "reviewsCount": 161,
    "image": "/assets/images/4002341_outdoor-harvest-bloom-garland.webp",
    "description": "Authentic Balsam Hill outdoor harvest bloom garland, designed with lifelike botanical textures, hand-detailed accents, and enduring holiday charm.",
    "realism": "True Needle\u00ae Botanical Blend",
    "lightStyle": "Unlit Natural Foliage",
    "heights": [
      {
        "height": "Standard",
        "price": 119,
        "originalPrice": 199,
        "tips": "Handcrafted foliage",
        "lights": "Warm LED"
      }
    ],
    "selectedHeightIndex": 0,
    "isFeatured": false
  },
  {
    "id": "bh-4100837",
    "name": "Outdoor Illuminated Stacked Jack-o'-Lanterns Silhouette",
    "category": "decor",
    "badge": "Outdoor Safe",
    "badgeClass": "badge-true-needle",
    "rating": 4.87,
    "reviewsCount": 557,
    "image": "/assets/images/4100837_outdoor-illuminated-stacked-ja.webp",
    "description": "Authentic Balsam Hill outdoor illuminated stacked jack-o'-lanterns silhouette, designed with lifelike botanical textures, hand-detailed accents, and enduring holiday charm.",
    "realism": "True Needle\u00ae Botanical Blend",
    "lightStyle": "Battery LED with 6-Hour Timer",
    "heights": [
      {
        "height": "Standard",
        "price": 69,
        "originalPrice": 149,
        "tips": "Handcrafted foliage",
        "lights": "Warm LED"
      }
    ],
    "selectedHeightIndex": 0,
    "isFeatured": false
  },
  {
    "id": "bh-4003580",
    "name": "Burgundy Leaves Wreath",
    "category": "wreaths",
    "badge": "Outdoor Safe",
    "badgeClass": "badge-true-needle",
    "rating": 4.9,
    "reviewsCount": 500,
    "image": "/assets/images/4003580_burgundy-leaves-wreath.webp",
    "description": "Authentic Balsam Hill burgundy leaves wreath, designed with lifelike botanical textures, hand-detailed accents, and enduring holiday charm.",
    "realism": "True Needle\u00ae Botanical Blend",
    "lightStyle": "Unlit Natural Foliage",
    "heights": [
      {
        "height": "Standard",
        "price": 149,
        "originalPrice": 299,
        "tips": "Handcrafted foliage",
        "lights": "Warm LED"
      }
    ],
    "selectedHeightIndex": 0,
    "isFeatured": false
  },
  {
    "id": "bh-4003571",
    "name": "Fall Medley Wreath",
    "category": "wreaths",
    "badge": "Best Seller",
    "badgeClass": "badge-best-seller",
    "rating": 4.96,
    "reviewsCount": 491,
    "image": "/assets/images/4003571_fall-medley-wreath.webp",
    "description": "Authentic Balsam Hill fall medley wreath, designed with lifelike botanical textures, hand-detailed accents, and enduring holiday charm.",
    "realism": "True Needle\u00ae Botanical Blend",
    "lightStyle": "Unlit Natural Foliage",
    "heights": [
      {
        "height": "Standard",
        "price": 109,
        "originalPrice": 229,
        "tips": "Handcrafted foliage",
        "lights": "Warm LED"
      }
    ],
    "selectedHeightIndex": 0,
    "isFeatured": false
  },
  {
    "id": "bh-4100841",
    "name": "Globe Fairy Light String",
    "category": "decor",
    "badge": "Outdoor Safe",
    "badgeClass": "badge-true-needle",
    "rating": 4.91,
    "reviewsCount": 561,
    "image": "/assets/images/4100841_globe-fairy-light-string.webp",
    "description": "Authentic Balsam Hill globe fairy light string, designed with lifelike botanical textures, hand-detailed accents, and enduring holiday charm.",
    "realism": "True Needle\u00ae Botanical Blend",
    "lightStyle": "Unlit Natural Foliage",
    "heights": [
      {
        "height": "Standard",
        "price": 59,
        "originalPrice": 79,
        "tips": "Handcrafted foliage",
        "lights": "Warm LED"
      }
    ],
    "selectedHeightIndex": 0,
    "isFeatured": false
  },
  {
    "id": "bh-4003581",
    "name": "Golden Aspen Wreath",
    "category": "wreaths",
    "badge": "Outdoor Safe",
    "badgeClass": "badge-true-needle",
    "rating": 4.91,
    "reviewsCount": 501,
    "image": "/assets/images/4003581_golden-aspen-wreath.webp",
    "description": "Authentic Balsam Hill golden aspen wreath, designed with lifelike botanical textures, hand-detailed accents, and enduring holiday charm.",
    "realism": "True Needle\u00ae Botanical Blend",
    "lightStyle": "Unlit Natural Foliage",
    "heights": [
      {
        "height": "Standard",
        "price": 119,
        "originalPrice": 239,
        "tips": "Handcrafted foliage",
        "lights": "Warm LED"
      }
    ],
    "selectedHeightIndex": 0,
    "isFeatured": false
  },
  {
    "id": "bh-4100820",
    "name": "Sweet Pear Arrangement",
    "category": "decor",
    "badge": "Best Seller",
    "badgeClass": "badge-best-seller",
    "rating": 4.85,
    "reviewsCount": 540,
    "image": "/assets/images/4100820_sweet-pear-arrangement.webp",
    "description": "Authentic Balsam Hill sweet pear arrangement, designed with lifelike botanical textures, hand-detailed accents, and enduring holiday charm.",
    "realism": "True Needle\u00ae Botanical Blend",
    "lightStyle": "Unlit Natural Foliage",
    "heights": [
      {
        "height": "Standard",
        "price": 119,
        "originalPrice": 199,
        "tips": "Handcrafted foliage",
        "lights": "Warm LED"
      }
    ],
    "selectedHeightIndex": 0,
    "isFeatured": false
  },
  {
    "id": "bh-4100113",
    "name": "Storybook Pumpkin Wreath",
    "category": "wreaths",
    "badge": "Best Seller",
    "badgeClass": "badge-best-seller",
    "rating": 4.98,
    "reviewsCount": 283,
    "image": "/assets/images/4100113_storybook-pumpkin-wreath.webp",
    "description": "Authentic Balsam Hill storybook pumpkin wreath, designed with lifelike botanical textures, hand-detailed accents, and enduring holiday charm.",
    "realism": "True Needle\u00ae Botanical Blend",
    "lightStyle": "Unlit Natural Foliage",
    "heights": [
      {
        "height": "Standard",
        "price": 119,
        "originalPrice": 249,
        "tips": "Handcrafted foliage",
        "lights": "Warm LED"
      }
    ],
    "selectedHeightIndex": 0,
    "isFeatured": false
  },
  {
    "id": "bh-4004076",
    "name": "Lit Tabletop Stacked Jack-o'-Lanterns",
    "category": "decor",
    "badge": "Best Seller",
    "badgeClass": "badge-best-seller",
    "rating": 4.91,
    "reviewsCount": 546,
    "image": "/assets/images/4004076_lit-tabletop-stacked-jack-o-la.webp",
    "description": "Authentic Balsam Hill lit tabletop stacked jack-o'-lanterns, designed with lifelike botanical textures, hand-detailed accents, and enduring holiday charm.",
    "realism": "True Needle\u00ae Botanical Blend",
    "lightStyle": "Battery LED with 6-Hour Timer",
    "heights": [
      {
        "height": "Standard",
        "price": 69,
        "originalPrice": 149,
        "tips": "Handcrafted foliage",
        "lights": "Warm LED"
      }
    ],
    "selectedHeightIndex": 0,
    "isFeatured": false
  },
  {
    "id": "bh-4002947",
    "name": "Rustic Heirloom Pumpkins Set",
    "category": "decor",
    "badge": "Best Seller",
    "badgeClass": "badge-best-seller",
    "rating": 4.87,
    "reviewsCount": 317,
    "image": "/assets/images/4002947_rustic-heirloom-pumpkins-set.webp",
    "description": "Authentic Balsam Hill rustic heirloom pumpkins set, designed with lifelike botanical textures, hand-detailed accents, and enduring holiday charm.",
    "realism": "True Needle\u00ae Botanical Blend",
    "lightStyle": "Unlit Natural Foliage",
    "heights": [
      {
        "height": "Standard",
        "price": 159,
        "originalPrice": 199,
        "tips": "Handcrafted foliage",
        "lights": "Warm LED"
      }
    ],
    "selectedHeightIndex": 0,
    "isFeatured": false
  },
  {
    "id": "bh-4107617",
    "name": "Outdoor Sunset Mums Garland",
    "category": "wreaths",
    "badge": "Outdoor Safe",
    "badgeClass": "badge-true-needle",
    "rating": 4.87,
    "reviewsCount": 137,
    "image": "/assets/images/4107617_outdoor-sunset-mums-garland.webp",
    "description": "Authentic Balsam Hill outdoor sunset mums garland, designed with lifelike botanical textures, hand-detailed accents, and enduring holiday charm.",
    "realism": "True Needle\u00ae Botanical Blend",
    "lightStyle": "Unlit Natural Foliage",
    "heights": [
      {
        "height": "Standard",
        "price": 79,
        "originalPrice": 129,
        "tips": "Handcrafted foliage",
        "lights": "Warm LED"
      }
    ],
    "selectedHeightIndex": 0,
    "isFeatured": false
  },
  {
    "id": "bh-4107629",
    "name": "Autumn Sunrise Wreath",
    "category": "wreaths",
    "badge": "Best Seller",
    "badgeClass": "badge-best-seller",
    "rating": 4.99,
    "reviewsCount": 149,
    "image": "/assets/images/4107629_autumn-sunrise-wreath.webp",
    "description": "Authentic Balsam Hill autumn sunrise wreath, designed with lifelike botanical textures, hand-detailed accents, and enduring holiday charm.",
    "realism": "True Needle\u00ae Botanical Blend",
    "lightStyle": "Unlit Natural Foliage",
    "heights": [
      {
        "height": "Standard",
        "price": 129,
        "originalPrice": 189,
        "tips": "Handcrafted foliage",
        "lights": "Warm LED"
      }
    ],
    "selectedHeightIndex": 0,
    "isFeatured": false
  },
  {
    "id": "bh-4003543",
    "name": "Lit Halloween Glitter Twig Tree",
    "category": "decor",
    "badge": "Best Seller",
    "badgeClass": "badge-best-seller",
    "rating": 4.98,
    "reviewsCount": 463,
    "image": "/assets/images/4003543_lit-halloween-glitter-twig-tre.webp",
    "description": "Authentic Balsam Hill lit halloween glitter twig tree, designed with lifelike botanical textures, hand-detailed accents, and enduring holiday charm.",
    "realism": "True Needle\u00ae Botanical Blend",
    "lightStyle": "Battery LED with 6-Hour Timer",
    "heights": [
      {
        "height": "Standard",
        "price": 149,
        "originalPrice": 249,
        "tips": "Handcrafted foliage",
        "lights": "Warm LED"
      }
    ],
    "selectedHeightIndex": 0,
    "isFeatured": false
  },
  {
    "id": "bh-4001597",
    "name": "Fall Berry Wreath",
    "category": "wreaths",
    "badge": "Best Seller",
    "badgeClass": "badge-best-seller",
    "rating": 4.87,
    "reviewsCount": 317,
    "image": "/assets/images/4001597_fall-berry-wreath.webp",
    "description": "Authentic Balsam Hill fall berry wreath, designed with lifelike botanical textures, hand-detailed accents, and enduring holiday charm.",
    "realism": "True Needle\u00ae Botanical Blend",
    "lightStyle": "Unlit Natural Foliage",
    "heights": [
      {
        "height": "Standard",
        "price": 139,
        "originalPrice": 169,
        "tips": "Handcrafted foliage",
        "lights": "Warm LED"
      }
    ],
    "selectedHeightIndex": 0,
    "isFeatured": false
  },
  {
    "id": "bh-4003570",
    "name": "Outdoor Autumn Maple Garland",
    "category": "wreaths",
    "badge": "Outdoor Safe",
    "badgeClass": "badge-true-needle",
    "rating": 4.95,
    "reviewsCount": 490,
    "image": "/assets/images/4003570_outdoor-autumn-maple-garland.webp",
    "description": "Authentic Balsam Hill outdoor autumn maple garland, designed with lifelike botanical textures, hand-detailed accents, and enduring holiday charm.",
    "realism": "True Needle\u00ae Botanical Blend",
    "lightStyle": "Unlit Natural Foliage",
    "heights": [
      {
        "height": "Standard",
        "price": 59,
        "originalPrice": 129,
        "tips": "Handcrafted foliage",
        "lights": "Warm LED"
      }
    ],
    "selectedHeightIndex": 0,
    "isFeatured": false
  },
  {
    "id": "bh-4100863",
    "name": "Halloween Glitter Starburst Light Set",
    "category": "decor",
    "badge": "Best Seller",
    "badgeClass": "badge-best-seller",
    "rating": 4.98,
    "reviewsCount": 133,
    "image": "/assets/images/4100863_halloween-glitter-starburst-li.webp",
    "description": "Authentic Balsam Hill halloween glitter starburst light set, designed with lifelike botanical textures, hand-detailed accents, and enduring holiday charm.",
    "realism": "True Needle\u00ae Botanical Blend",
    "lightStyle": "Battery LED with 6-Hour Timer",
    "heights": [
      {
        "height": "Standard",
        "price": 59,
        "originalPrice": 129,
        "tips": "Handcrafted foliage",
        "lights": "Warm LED"
      }
    ],
    "selectedHeightIndex": 0,
    "isFeatured": false
  },
  {
    "id": "bh-4002339",
    "name": "Outdoor Harvest Bloom Hanging Basket",
    "category": "decor",
    "badge": "Outdoor Safe",
    "badgeClass": "badge-true-needle",
    "rating": 4.94,
    "reviewsCount": 159,
    "image": "/assets/images/4002339_outdoor-harvest-bloom-hanging-.webp",
    "description": "Authentic Balsam Hill outdoor harvest bloom hanging basket, designed with lifelike botanical textures, hand-detailed accents, and enduring holiday charm.",
    "realism": "True Needle\u00ae Botanical Blend",
    "lightStyle": "Unlit Natural Foliage",
    "heights": [
      {
        "height": "Standard",
        "price": 229,
        "originalPrice": 279,
        "tips": "Handcrafted foliage",
        "lights": "Warm LED"
      }
    ],
    "selectedHeightIndex": 0,
    "isFeatured": false
  }
];

export const SEED_POSTS: Post[] = [
  {
    "id": "fluffing-mastery",
    "title": "Sam's 5 Golden Rules for Fluffing & Branch Shaping",
    "author": "Sam Henderson",
    "authorRole": "Lead Creative Decorator",
    "date": "OCTOBER 24, 2026",
    "readTime": "6 MIN READ",
    "image": "/assets/images/tree-guide-hero.webp",
    "excerpt": "The difference between an artificial tree and a showstopper is all in the branch shaping. Learn Sam's proven outward-and-upward fan technique.",
    "content": "<p>Hello holiday friends! I'm Sam Henderson, Lead Creative Decorator at Balsam Hill. Every year, customers ask me how our showroom trees look so impossibly full, dense, and lifelike. The answer isn't magic\u2014it's the art of proper fluffing.</p>\n<h4>1. Work from the Bottom Trunk Outward</h4>\n<p>Before attaching higher sections, fluff each bottom tier thoroughly. Separate the inner filler branches to form a dense inner core that hides the center pole completely.</p>\n<h4>2. Fan Tips Upward and Outward</h4>\n<p>Real evergreen branches reach toward the sky for sunlight. Angle the outermost True Needle\u00ae tips slightly upward at 45-degree angles to create natural depth.</p>\n<h4>3. Wear Protective Cotton Shaping Gloves</h4>\n<p>We include white shaping gloves in every Balsam Hill box! They allow you to pull branches firmly without scratching your hands.</p>\n<h4>4. Step Back 10 Feet Every 15 Minutes</h4>\n<p>It's easy to lose perspective when you're 6 inches away. Step back, squint slightly, and look for negative space or gaps.</p>"
  },
  {
    "id": "lighting-guide",
    "title": "Warm Candlelight vs Twinkly\u00ae Smart RGB: The Comprehensive Lighting Guide",
    "author": "Sam Henderson",
    "authorRole": "Lead Creative Decorator",
    "date": "OCTOBER 18, 2026",
    "readTime": "5 MIN READ",
    "image": "/assets/images/needle-realism-demo.jpg",
    "excerpt": "Which glow fits your home? Sam breaks down the timeless warmth of 2700K Candlelight Clear LEDs vs. interactive smartphone-mapped RGB animations.",
    "content": "<p>Lighting sets the entire mood of your home during the festive season. At Balsam Hill, we offer several proprietary lighting systems, but two stand out as customer favorites.</p>\n<h4>The Classic: Candlelight Clear LED (2700K)</h4>\n<p>If you cherish traditional Victorian elegance, our Candlelight Clear LEDs emulate the warm amber flicker of authentic wax candles. They emit a soothing, soft golden hue that flatters wood mantels and fireplace stone.</p>\n<h4>The Innovator: Twinkly\u00ae Smart RGB+W</h4>\n<p>For modern families and tech lovers, Twinkly transforms your tree into a programmable light canvas. Using your smartphone camera, the app maps the 3D position of every single LED bulb, allowing you to paint custom animations, snowfall cascades, or festive color themes in real time.</p>"
  },
  {
    "id": "metallic-styling",
    "title": "How to Style a 9ft Tree with Metallic Champagne Accents",
    "author": "Sam Henderson",
    "authorRole": "Lead Creative Decorator",
    "date": "OCTOBER 10, 2026",
    "readTime": "7 MIN READ",
    "image": "/assets/images/hero-banner.webp",
    "excerpt": "Step into Sam's staged holiday salon and discover how blending antiqued mercury glass, warm champagne velvet, and brushed bronze creates unmatched depth.",
    "content": "<p>Monochromatic decorating can fall flat if you don't vary textures. In this season's featured lookbook salon, I used four distinct metallic finishes to build layered luxury.</p>\n<h4>Texture Layer 1: Antiqued Mercury Glass</h4>\n<p>Mercury glass features distressed mirror silver and warm gold spots that catch the tree lights from multiple angles without glaring reflections.</p>\n<h4>Texture Layer 2: Wired Silk & Velvet Ribbons</h4>\n<p>Never spiral ribbon tightly like a barber pole! Instead, cut ribbon into 24-inch strips, pinch each end into a graceful wave, and tuck them deep between branch layers.</p>"
  },
  {
    "id": "branch-sample-kit-guide",
    "title": "How to Choose an Artificial Christmas Tree: The Branch Sample Kit Guide",
    "author": "Sam Henderson",
    "authorRole": "Lead Creative Decorator",
    "date": "OCTOBER 04, 2026",
    "readTime": "5 MIN READ",
    "image": "/assets/images/spotlight-branch-samples.webp",
    "excerpt": "Touch before you buy: Discover how our 20 foliage branch samples help you compare needle textures, green hues, and realistic branching in your own home lighting.",
    "content": "<p>Ordering a luxury Christmas tree online is an investment in years of holiday memories. That is why Balsam Hill created the Branch Sample Kit\u2014a curated presentation box with live branch cuttings from our most celebrated tree species.</p>\n<h4>1. Test Against Your Natural Room Lighting</h4>\n<p>Examine the swatches during bright daylight, under incandescent lamps, and in soft evening candlelight. Species like the BH Balsam Fir feature subtle silver needle undersides that shimmer differently as lighting shifts.</p>\n<h4>2. Touch the True Needle\u00ae Polyethylene</h4>\n<p>Feel the firmness and structural springiness of injection-molded foliage compared to flat PVC. True Needle tips mimic living evergreen shoots down to the fine needle curvature and brown branch stem coloring.</p>\n<h4>3. Apply Your 9 Rebate Voucher</h4>\n<p>Every sample kit includes a 9 coupon code valid towards your first tree purchase, making the kit effectively free!</p>"
  },
  {
    "id": "tree-decorating-ideas",
    "title": "Best Christmas Tree Decorating Ideas & Themes: French Country, Nordic Frost & Woodland",
    "author": "Sam Henderson",
    "authorRole": "Lead Creative Decorator",
    "date": "SEPTEMBER 28, 2026",
    "readTime": "8 MIN READ",
    "image": "/assets/images/spotlight-fresh-hero.webp",
    "excerpt": "Explore curated theme palettes, ribbon draping techniques, statement finials, and topper placement used by Balsam Hill interior stylists.",
    "content": "<p>Whether your interior aesthetic leans rustic farmhouse, mid-century Scandinavian, or Parisian grand salon, your Christmas tree should harmonize with your existing decor.</p>\n<h4>Theme 1: French Country Warmth</h4>\n<p>Rich cream, antiqued brass, burlap woven ribbons, and delicate glass finials give a cozy, collected-over-time European warmth.</p>\n<h4>Theme 2: Nordic Frost Minimalist</h4>\n<p>Cool white LEDs, matte silver baubles, frosted pinecones, and birchwood stars paired with our Frosted Fraser Fir create an ethereal winter wonderland.</p>\n<h4>Theme 3: Traditional Woodland Cabin</h4>\n<p>Plaid red ribbons, real sugar pinecones, rustic bronze bells, and woodland creatures evoke classic alpine heritage.</p>"
  },
  {
    "id": "tree-assembly-instructions",
    "title": "Step-by-Step Tree Assembly Instructions & Flip Tree Setup",
    "author": "Balsam Hill Design Studio",
    "authorRole": "Product Engineering",
    "date": "SEPTEMBER 20, 2026",
    "readTime": "6 MIN READ",
    "image": "/assets/images/tile-committed-quality.webp",
    "excerpt": "From stand locking to Easy Plug\u00ae trunk alignment and branch opening, master the fastest 15-minute setup method.",
    "content": "<p>Setting up your Balsam Hill tree is designed to be effortless and joyful. Follow this certified engineering guide for a smooth 15-minute setup.</p>\n<h4>The Standard Easy Plug\u00ae Tree</h4>\n<p>1. Open the heavy-duty metal tree stand on a flat surface and tighten the eyebolt securely.<br>\n2. Insert Section A (the widest bottom tier). The branches will fall open naturally on reinforced hinges.<br>\n3. Insert Section B into Section A. Our Easy Plug system routes all electrical connections directly through the center trunk\u2014no tangled cords between tiers!<br>\n4. Plug the master cord into your wall outlet or foot pedal.</p>\n<h4>The Patented Flip Tree\u00ae</h4>\n<p>1. Wheel the storage bag into place and unzip.<br>\n2. Step gently on the pedal and flip the tree base 180 degrees upright.<br>\n3. Insert the lightweight top section\u2014and you are fully assembled in under 60 seconds!</p>"
  },
  {
    "id": "tree-measuring-guide",
    "title": "How to Measure Your Room & Ceiling Height for the Perfect Tree Size",
    "author": "Balsam Hill Design Studio",
    "authorRole": "Architecture & Styling",
    "date": "SEPTEMBER 12, 2026",
    "readTime": "5 MIN READ",
    "image": "/assets/images/tile-tree-shop.webp",
    "excerpt": "Avoid the ceiling crush! Calculate the ideal 6-to-12-inch clearance for tree toppers, determine tree diameter profile (full vs slim), and choose the best placement.",
    "content": "<p>The single most common mistake tree buyers make is ordering without accounting for tree topper clearance or foot traffic clearance.</p>\n<h4>The Golden Height Formula</h4>\n<p>Measure floor-to-ceiling height accurately. Subtract at least 6 to 12 inches to account for your tree topper, stand height, and ceiling moldings:</p>\n<ul>\n  <li>8-foot ceilings &rarr; 7 ft or 7.5 ft tree</li>\n  <li>9-foot ceilings &rarr; 7.5 ft or 8 ft tree</li>\n  <li>10-foot ceilings &rarr; 9 ft tree</li>\n  <li>12-foot+ vaulted ceilings &rarr; 10 ft to 12 ft estate tree</li>\n</ul>\n<h4>Diameter Profiles: Full vs Slim</h4>\n<p>A full profile tree (like the BH Balsam Fir) boasts a generous 50-60 inch base diameter. If you have a narrower space, our Silverado Slim Fir provides lush foliage with a compact 36-42 inch footprint.</p>"
  },
  {
    "id": "wreath-garland-styling",
    "title": "Wreath & Garland Hanging Secrets: Mantels, Staircases, and Exterior Doors",
    "author": "Sam Henderson",
    "authorRole": "Lead Creative Decorator",
    "date": "SEPTEMBER 05, 2026",
    "readTime": "6 MIN READ",
    "image": "/assets/images/tile-wreath-shop.webp",
    "excerpt": "Elevate your curb appeal and hearth with secure zip ties, magnetic hangers, battery timer programming, and lush evergreen layering.",
    "content": "<p>Lush wreaths and cascading garlands frame the holidays before guests even step through your front door. Here are my favorite styling formulas.</p>\n<h4>Front Door Impact</h4>\n<p>Choose a 28 to 32 inch wreath for standard 36-inch front doors. Use a magnetic wreath hanger on metal doors or an adjustable over-the-door brass bracket. Set the automatic timer at dusk so the warm LEDs greet you every evening.</p>\n<h4>Fireplace Mantel Layering</h4>\n<p>Combine two 6ft garlands for a standard mantel. Interweave battery-powered micro fairy lights deep within the boughs, and let the garland ends pool naturally onto the floor or hearth.</p>"
  },
  {
    "id": "storage-preservation",
    "title": "How to Store Your Artificial Tree & Preserve Foliage for Decades",
    "author": "Balsam Hill Engineering",
    "authorRole": "Product Longevity",
    "date": "AUGUST 28, 2026",
    "readTime": "4 MIN READ",
    "image": "/assets/images/tile-committed-quality.webp",
    "excerpt": "Protect your tree with rolling ripstop storage bags, compression straps, and proper temperature-controlled off-season storage.",
    "content": "<p>Every Balsam Hill tree is engineered to last for decades of celebrations. Proper packing and off-season storage will keep needles springy and lights flawless.</p>\n<h4>1. Never Cram Back into the Cardboard Shipping Box</h4>\n<p>Cardboard attracts moisture and pests. Use the heavy-duty wheeled ripstop polyester storage bag included with your tree.</p>\n<h4>2. Compress Branches Gently</h4>\n<p>Fold branch tiers upward toward the center pole like an umbrella. Use the quick-release compression straps to cinch the branches without snapping needle tips.</p>\n<h4>3. Store in Climate-Controlled Spaces</h4>\n<p>Avoid non-insulated attics or damp crawlspaces where extreme summer heat can deform molded polyethylene needles. A dry closet or basement storage room is ideal.</p>"
  },
  {
    "id": "holiday-trends-2026",
    "title": "Balsam Hill Holiday Trend Report: Curated Palettes & Glass Ornament Collections",
    "author": "Sam Henderson",
    "authorRole": "Lead Creative Decorator",
    "date": "AUGUST 15, 2026",
    "readTime": "7 MIN READ",
    "image": "/assets/images/tile-ornaments-shop.webp",
    "excerpt": "Rich burgundies, gilded woodland botanicals, and hand-blown European mercury glass are dominating this year's most breathtaking holiday homes.",
    "content": "<p>This holiday season is all about emotional warmth, artisanal authenticity, and nostalgic luxury. Here are the three standout trends our design team curated for 2026.</p>\n<h4>Trend 1: Heirloom Burgundy & Gold</h4>\n<p>Deep wine-red velvet ribbons, antiqued bronze stars, and cranberry glass baubles create a rich, regal ambiance reminiscent of grand European estates.</p>\n<h4>Trend 2: Gilded Botanical Woodland</h4>\n<p>Gilded magnolia leaves, champagne eucalyptus, frosted sugar pinecones, and woodland animal accents bring organic beauty indoors.</p>\n<h4>Trend 3: Modern French Pastel Radiance</h4>\n<p>Soft blush pinks, iced champagne, and mercury glass teardrops create a serene, romantic Christmas aesthetic.</p>"
  }
];

// ============================================================================
// DATA ACCESS SERVICE (Supabase with embedded offline fallback)
// ============================================================================
export async function getProducts(): Promise<Product[]> {
  if (supabase) {
    try {
      const { data, error } = await supabase.from('products').select('*');
      if (!error && data && data.length > 0) {
        return data as Product[];
      }
    } catch (e) {
      console.warn('Supabase fetch failed, falling back to seed products:', e);
    }
  }
  return SEED_PRODUCTS;
}

export async function getPosts(): Promise<Post[]> {
  if (supabase) {
    try {
      const { data, error } = await supabase.from('posts').select('*');
      if (!error && data && data.length > 0) {
        return data as Post[];
      }
    } catch (e) {
      console.warn('Supabase fetch failed, falling back to seed posts:', e);
    }
  }
  return SEED_POSTS;
}

export async function getProductById(id: string): Promise<Product | undefined> {
  if (supabase) {
    try {
      const { data, error } = await supabase.from('products').select('*').eq('id', id).single();
      if (!error && data) {
        return data as Product;
      }
    } catch (e) {
      console.warn('Supabase fetch by ID failed, falling back:', e);
    }
  }
  return SEED_PRODUCTS.find(p => p.id === id);
}

export async function getPostById(id: string): Promise<Post | undefined> {
  if (supabase) {
    try {
      const { data, error } = await supabase.from('posts').select('*').eq('id', id).single();
      if (!error && data) {
        return data as Post;
      }
    } catch (e) {
      console.warn('Supabase post fetch failed, falling back:', e);
    }
  }
  return SEED_POSTS.find(p => p.id === id);
}

export async function createOrder(order: any): Promise<{ success: boolean; orderId?: string; error?: string }> {
  if (supabase) {
    try {
      const { data, error } = await supabase.from('orders').insert([order]).select().single();
      if (!error && data) {
        return { success: true, orderId: data.id };
      }
    } catch (e) {
      console.warn('Supabase order insert failed, returning fallback success:', e);
    }
  }
  return { 
    success: true, 
    orderId: `BH-${Math.floor(100000 + Math.random() * 900000)}` 
  };
}

export async function submitReview(review: any): Promise<{ success: boolean }> {
  if (supabase) {
    try {
      await supabase.from('reviews').insert([review]);
    } catch (e) {
      console.warn('Supabase review insert failed:', e);
    }
  }
  return { success: true };
}
