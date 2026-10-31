-- ============================================================================
-- BALSAM HILL E-COMMERCE BACKEND SCHEMA (SUPABASE / POSTGRESQL)
-- Luxury Artificial Christmas Trees & Holiday Decor Store
-- ============================================================================

-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- 1. PRODUCTS TABLE
create table if not exists public.products (
    id text primary key,
    name text not null,
    category text not null check (category in ('trees', 'wreaths', 'decor')),
    badge text not null default 'Best Seller',
    badge_class text not null default 'badge-best-seller',
    rating numeric(3, 2) not null default 4.90,
    reviews_count integer not null default 0,
    image text not null,
    description text not null,
    realism text not null,
    light_style text not null,
    heights jsonb not null default '[]'::jsonb,
    is_featured boolean not null default false,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable RLS
alter table public.products enable row level security;
create policy "Allow public read access on products" on public.products for select using (true);

-- 2. POSTS TABLE (Sam Henderson's Holiday Journal & Decorating Guides)
create table if not exists public.posts (
    id text primary key,
    title text not null,
    author text not null default 'Sam Henderson',
    author_role text not null default 'Lead Creative Director',
    date text not null,
    read_time text not null default '5 MIN READ',
    image text not null,
    excerpt text not null,
    content text not null,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table public.posts enable row level security;
create policy "Allow public read access on posts" on public.posts for select using (true);

-- 3. ORDERS TABLE
create table if not exists public.orders (
    id uuid primary key default gen_random_uuid(),
    customer_name text not null,
    customer_email text not null,
    shipping_address text not null,
    total_amount numeric(10, 2) not null,
    discount_code text,
    discount_amount numeric(10, 2) default 0.00,
    items jsonb not null,
    status text not null default 'confirmed',
    created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table public.orders enable row level security;
create policy "Allow anonymous order creation" on public.orders for insert with check (true);
create policy "Allow reading own orders" on public.orders for select using (true);

-- 4. CART ITEMS TABLE (Server-Synced Cart)
create table if not exists public.cart_items (
    id uuid primary key default gen_random_uuid(),
    session_id text not null,
    product_id text not null references public.products(id) on delete cascade,
    height text not null,
    price numeric(10, 2) not null,
    quantity integer not null default 1 check (quantity > 0),
    lights text,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

create index if not exists idx_cart_items_session on public.cart_items(session_id);
alter table public.cart_items enable row level security;
create policy "Allow public access by session_id" on public.cart_items for all using (true) with check (true);

-- 5. REVIEWS TABLE
create table if not exists public.reviews (
    id uuid primary key default gen_random_uuid(),
    product_id text not null references public.products(id) on delete cascade,
    author_name text not null,
    rating integer not null check (rating between 1 and 5),
    title text not null,
    comment text not null,
    verified_buyer boolean default true,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table public.reviews enable row level security;
create policy "Allow public read access on reviews" on public.reviews for select using (true);
create policy "Allow public insert on reviews" on public.reviews for insert with check (true);

-- ============================================================================
-- SEED DATA (Authentic Balsam Hill Products & Sam's Masterclass Posts)
-- ============================================================================
insert into public.products (id, name, category, badge, badge_class, rating, reviews_count, image, description, realism, light_style, heights, is_featured)
values
(
    'bh-balsam-fir',
    'BH Balsam Fir™',
    'trees',
    'Best Seller',
    'badge-best-seller',
    4.95,
    2840,
    '/assets/images/bh-balsam-fir.jpg',
    'Modeled after natural Abies balsamea from Maine, featuring our highest concentration of True Needle® foliage with semi-flat needles and subtle silver undersides.',
    'Most Realistic True Needle® (95%)',
    'Candlelight Clear LED',
    '[
        {"height": "6.5 ft", "price": 799, "originalPrice": 1099, "tips": "3,124 tips", "lights": "800 lights"},
        {"height": "7.5 ft", "price": 999, "originalPrice": 1399, "tips": "4,518 tips", "lights": "1,100 lights"},
        {"height": "9 ft", "price": 1399, "originalPrice": 1899, "tips": "6,280 tips", "lights": "1,500 lights"},
        {"height": "10 ft", "price": 1899, "originalPrice": 2499, "tips": "8,450 tips", "lights": "2,100 lights"}
    ]'::jsonb,
    true
),
(
    'balsam-fir-flip',
    'Balsam Fir Flip Tree®',
    'trees',
    'Flip Tree®',
    'badge-flip-tree',
    4.98,
    3120,
    '/assets/images/balsam-fir-flip.jpg',
    'Our patented Flip Tree® technology eliminates heavy lifting. Rolls on smooth rubber wheels and flips upright in seconds with Easy Plug® trunk lights connecting automatically.',
    'Most Realistic True Needle® (95%)',
    'Dual Color + Clear LED',
    '[
        {"height": "6.5 ft", "price": 899, "originalPrice": 1199, "tips": "3,124 tips", "lights": "750 lights"},
        {"height": "7.5 ft", "price": 1199, "originalPrice": 1599, "tips": "4,518 tips", "lights": "1,000 lights"},
        {"height": "9 ft", "price": 1599, "originalPrice": 2099, "tips": "6,280 tips", "lights": "1,400 lights"}
    ]'::jsonb,
    true
),
(
    'silverado-slim',
    'Silverado Slim Fir™',
    'trees',
    'Space Saver',
    'badge-true-needle',
    4.85,
    1150,
    '/assets/images/silverado-slim.jpg',
    'Designed for compact corners, townhomes, and bay windows without sacrificing the dense, lifelike foliage of our full-sized trees.',
    'Realistic True Needle® (75%)',
    'Candlelight Clear LED',
    '[
        {"height": "6 ft", "price": 599, "originalPrice": 799, "tips": "1,890 tips", "lights": "500 lights"},
        {"height": "7 ft", "price": 799, "originalPrice": 1049, "tips": "2,740 tips", "lights": "700 lights"},
        {"height": "8 ft", "price": 999, "originalPrice": 1299, "tips": "3,500 tips", "lights": "900 lights"}
    ]'::jsonb,
    true
),
(
    'european-fir',
    'European Fir™',
    'trees',
    'Customer Pick',
    'badge-best-seller',
    4.90,
    940,
    '/assets/images/european-fir.jpg',
    'Inspired by evergreen forests of Central Europe, characterized by outward-spreading tiers, open branch architecture, and room for larger statement ornaments.',
    'Most Realistic True Needle® (90%)',
    'Candlelight Clear LED',
    '[
        {"height": "6.5 ft", "price": 749, "originalPrice": 999, "tips": "2,420 tips", "lights": "700 lights"},
        {"height": "7.5 ft", "price": 949, "originalPrice": 1299, "tips": "3,650 tips", "lights": "950 lights"},
        {"height": "9 ft", "price": 1299, "originalPrice": 1749, "tips": "5,100 tips", "lights": "1,300 lights"}
    ]'::jsonb,
    true
),
(
    'sanibel-spruce',
    'Sanibel Spruce™',
    'trees',
    'Classic Realism',
    'badge-true-needle',
    4.88,
    860,
    '/assets/images/sanibel-spruce.jpg',
    'Rich blue-green needles with natural silvery tint, sturdy horizontal boughs, and generous branch fullness that holds heavy garlands and glass finials.',
    'Realistic True Needle® (80%)',
    'Twinkly® Smart RGB+W LED',
    '[
        {"height": "6.5 ft", "price": 699, "originalPrice": 899, "tips": "2,200 tips", "lights": "600 lights"},
        {"height": "7.5 ft", "price": 899, "originalPrice": 1199, "tips": "3,250 tips", "lights": "850 lights"},
        {"height": "9 ft", "price": 1249, "originalPrice": 1649, "tips": "4,700 tips", "lights": "1,150 lights"}
    ]'::jsonb,
    false
),
(
    'fraser-fir-wreath',
    'BH Fraser Fir Pre-Lit Wreath (26")',
    'wreaths',
    'Outdoor Safe',
    'badge-best-seller',
    4.92,
    740,
    '/assets/images/fraser-fir-wreath.jpg',
    'Generously accented with real sugar pinecones, lush Fraser Fir foliage, and battery-operated warm fairy lights equipped with an automatic 6-hour timer.',
    'True Needle® Polyethylene',
    'Battery Warm LED with Timer',
    '[
        {"height": "26 Inch", "price": 129, "originalPrice": 169, "tips": "320 tips", "lights": "50 lights"},
        {"height": "32 Inch", "price": 169, "originalPrice": 219, "tips": "460 tips", "lights": "80 lights"}
    ]'::jsonb,
    true
),
(
    'champagne-crystal-wreath',
    'Champagne & Crystal Wreath (28")',
    'wreaths',
    'Artisan Style',
    'badge-best-seller',
    4.96,
    510,
    '/assets/images/champagne-crystal-wreath.jpg',
    'Frosted evergreen needles adorned with hand-placed champagne baubles, mirrored crystal accents, and micro warm LEDs.',
    'True Needle® & Flocked Needle',
    'Warm Micro LED',
    '[
        {"height": "28 Inch", "price": 179, "originalPrice": 229, "tips": "380 tips", "lights": "70 lights"},
        {"height": "34 Inch", "price": 229, "originalPrice": 299, "tips": "520 tips", "lights": "100 lights"}
    ]'::jsonb,
    false
),
(
    'outdoor-berry-wreath',
    'Outdoor Red Berry Burst Wreath (28")',
    'wreaths',
    'UV Protected',
    'badge-true-needle',
    4.89,
    620,
    '/assets/images/outdoor-berry-wreath.jpg',
    'Bursting with rich crimson winterberries, cedar twigs, and noble fir tips. UV-protected foliage formulated to resist winter snow, rain, and direct sunlight.',
    'Outdoor True Needle® Blend',
    'Outdoor Rated LED',
    '[
        {"height": "28 Inch", "price": 149, "originalPrice": 199, "tips": "350 tips", "lights": "60 lights"}
    ]'::jsonb,
    false
)
on conflict (id) do update set
    name = excluded.name,
    category = excluded.category,
    price = excluded.price,
    image = excluded.image,
    heights = excluded.heights;

-- Seed Sam's Holiday Posts
insert into public.posts (id, title, author, author_role, date, read_time, image, excerpt, content)
values
(
    'fluffing-mastery',
    'Sam''s 5 Golden Rules for Fluffing & Branch Shaping',
    'Sam Henderson',
    'Lead Creative Director',
    'OCTOBER 24, 2026',
    '6 MIN READ',
    '/assets/images/tree-guide-hero.webp',
    'The difference between an artificial tree and a showstopper is all in the branch shaping. Learn Sam''s proven outward-and-upward fan technique.',
    '<p>Hello holiday friends! I''m Sam Henderson, Lead Creative Decorator at Balsam Hill. Every year, customers ask me how our showroom trees look so impossibly full, dense, and lifelike. The answer isn''t magic—it''s the art of proper fluffing.</p><br><h3>1. Work from the Bottom Trunk Outward</h3><p>Before attaching higher sections, fluff each bottom tier thoroughly. Separate the inner filler branches to form a dense inner core that hides the center pole completely.</p><br><h3>2. Fan Tips Upward and Outward</h3><p>Real evergreen branches reach toward the sky for sunlight. Angle the outermost True Needle® tips slightly upward at 45-degree angles to create natural depth.</p><br><h3>3. Wear Protective Cotton Gloves</h3><p>We include white shaping gloves in every Balsam Hill box! They allow you to pull branches firmly without scratching your hands.</p>'
),
(
    'lighting-guide',
    'Warm Candlelight vs Twinkly® Smart RGB: The Lighting Guide',
    'Sam Henderson',
    'Lead Creative Director',
    'OCTOBER 18, 2026',
    '5 MIN READ',
    '/assets/images/needle-realism-demo.jpg',
    'Which glow fits your home? Sam breaks down the timeless warmth of 2700K Candlelight Clear LEDs vs. interactive smartphone-mapped RGB animations.',
    '<p>Lighting sets the entire mood of your home during the festive season. At Balsam Hill, we offer several proprietary lighting systems, but two stand out as customer favorites.</p><br><h3>The Classic: Candlelight Clear LED (2700K)</h3><p>If you cherish traditional Victorian elegance, our Candlelight Clear LEDs emulate the warm amber flicker of authentic wax candles. They emit a soothing, soft golden hue that flatters wood mantels and fireplace stone.</p>'
),
(
    'metallic-styling',
    'How to Style a 9ft Tree with Metallic Champagne Accents',
    'Sam Henderson',
    'Lead Creative Director',
    'OCTOBER 10, 2026',
    '7 MIN READ',
    '/assets/images/hero-banner.webp',
    'Step into Sam''s staged holiday salon and discover how blending antiqued mercury glass, warm champagne velvet, and brushed bronze creates unmatched depth.',
    '<p>Monochromatic decorating can fall flat if you don''t vary textures. In this season''s featured lookbook salon, I used four distinct metallic finishes to build layered luxury with our natural woven willow tree collar and mercury glass finials.</p>'
)
on conflict (id) do nothing;
