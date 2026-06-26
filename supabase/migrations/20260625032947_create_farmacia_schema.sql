/*
# Crear schema para Farmacia Rufanacht

1. New Tables
- `product_categories` - Categorías de productos (Medicamentos, Vitaminas, Bebés, Dermocosmética, Higiene personal)
  - `id` (uuid, primary key)
  - `name` (text, not null)
  - `slug` (text, unique, not null)
  - `icon` (text, nombre de icono lucide)
  - `created_at` (timestamptz)

- `products` - Productos del catálogo
  - `id` (uuid, primary key)
  - `name` (text, not null)
  - `description` (text)
  - `price` (numeric, not null)
  - `category_id` (uuid, foreign key a product_categories)
  - `image_url` (text)
  - `available` (boolean, default true)
  - `created_at` (timestamptz)

- `promotions` - Promociones activas
  - `id` (uuid, primary key)
  - `title` (text, not null)
  - `description` (text)
  - `discount_percentage` (integer)
  - `image_url` (text)
  - `active` (boolean, default true)
  - `created_at` (timestamptz)

- `testimonials` - Testimonios de clientes
  - `id` (uuid, primary key)
  - `name` (text, not null)
  - `text` (text, not null)
  - `rating` (integer, default 5)
  - `avatar_url` (text)
  - `created_at` (timestamptz)

- `pharmacy_turns` - Farmacias de turno
  - `id` (uuid, primary key)
  - `name` (text, not null)
  - `address` (text)
  - `phone` (text)
  - `is_on_duty` (boolean, default false)
  - `duty_start` (timestamptz)
  - `duty_end` (timestamptz)
  - `created_at` (timestamptz)

2. Security
- Enable RLS on all tables.
- Allow anon + authenticated to read all data (public catalog).
- Only authenticated users can insert/update/delete for admin purposes.
*/

CREATE TABLE IF NOT EXISTS product_categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  slug text UNIQUE NOT NULL,
  icon text,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text,
  price numeric NOT NULL,
  category_id uuid REFERENCES product_categories(id) ON DELETE SET NULL,
  image_url text,
  available boolean NOT NULL DEFAULT true,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS promotions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text,
  discount_percentage integer NOT NULL DEFAULT 0,
  image_url text,
  active boolean NOT NULL DEFAULT true,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS testimonials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  text text NOT NULL,
  rating integer NOT NULL DEFAULT 5 CHECK (rating >= 1 AND rating <= 5),
  avatar_url text,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS pharmacy_turns (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  address text,
  phone text,
  is_on_duty boolean NOT NULL DEFAULT false,
  duty_start timestamptz,
  duty_end timestamptz,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE product_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE promotions ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE pharmacy_turns ENABLE ROW LEVEL SECURITY;

-- SELECT policies: public read
DROP POLICY IF EXISTS "public_select_categories" ON product_categories;
CREATE POLICY "public_select_categories" ON product_categories FOR SELECT
  TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "public_select_products" ON products;
CREATE POLICY "public_select_products" ON products FOR SELECT
  TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "public_select_promotions" ON promotions;
CREATE POLICY "public_select_promotions" ON promotions FOR SELECT
  TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "public_select_testimonials" ON testimonials;
CREATE POLICY "public_select_testimonials" ON testimonials FOR SELECT
  TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "public_select_pharmacy_turns" ON pharmacy_turns;
CREATE POLICY "public_select_pharmacy_turns" ON pharmacy_turns FOR SELECT
  TO anon, authenticated USING (true);

-- INSERT policies: authenticated only
DROP POLICY IF EXISTS "auth_insert_categories" ON product_categories;
CREATE POLICY "auth_insert_categories" ON product_categories FOR INSERT
  TO authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "auth_insert_products" ON products;
CREATE POLICY "auth_insert_products" ON products FOR INSERT
  TO authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "auth_insert_promotions" ON promotions;
CREATE POLICY "auth_insert_promotions" ON promotions FOR INSERT
  TO authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "auth_insert_testimonials" ON testimonials;
CREATE POLICY "auth_insert_testimonials" ON testimonials FOR INSERT
  TO authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "auth_insert_pharmacy_turns" ON pharmacy_turns;
CREATE POLICY "auth_insert_pharmacy_turns" ON pharmacy_turns FOR INSERT
  TO authenticated WITH CHECK (true);

-- UPDATE policies: authenticated only
DROP POLICY IF EXISTS "auth_update_categories" ON product_categories;
CREATE POLICY "auth_update_categories" ON product_categories FOR UPDATE
  TO authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "auth_update_products" ON products;
CREATE POLICY "auth_update_products" ON products FOR UPDATE
  TO authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "auth_update_promotions" ON promotions;
CREATE POLICY "auth_update_promotions" ON promotions FOR UPDATE
  TO authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "auth_update_testimonials" ON testimonials;
CREATE POLICY "auth_update_testimonials" ON testimonials FOR UPDATE
  TO authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "auth_update_pharmacy_turns" ON pharmacy_turns;
CREATE POLICY "auth_update_pharmacy_turns" ON pharmacy_turns FOR UPDATE
  TO authenticated USING (true) WITH CHECK (true);

-- DELETE policies: authenticated only
DROP POLICY IF EXISTS "auth_delete_categories" ON product_categories;
CREATE POLICY "auth_delete_categories" ON product_categories FOR DELETE
  TO authenticated USING (true);

DROP POLICY IF EXISTS "auth_delete_products" ON products;
CREATE POLICY "auth_delete_products" ON products FOR DELETE
  TO authenticated USING (true);

DROP POLICY IF EXISTS "auth_delete_promotions" ON promotions;
CREATE POLICY "auth_delete_promotions" ON promotions FOR DELETE
  TO authenticated USING (true);

DROP POLICY IF EXISTS "auth_delete_testimonials" ON testimonials;
CREATE POLICY "auth_delete_testimonials" ON testimonials FOR DELETE
  TO authenticated USING (true);

DROP POLICY IF EXISTS "auth_delete_pharmacy_turns" ON pharmacy_turns;
CREATE POLICY "auth_delete_pharmacy_turns" ON pharmacy_turns FOR DELETE
  TO authenticated USING (true);
