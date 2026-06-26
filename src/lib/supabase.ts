import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

type Tables = {
  product_categories: {
    id: string;
    name: string;
    slug: string;
    icon: string | null;
    created_at: string;
  };
  products: {
    id: string;
    name: string;
    description: string | null;
    price: number;
    category_id: string | null;
    image_url: string | null;
    available: boolean;
    created_at: string;
  };
  promotions: {
    id: string;
    title: string;
    description: string | null;
    discount_percentage: number;
    image_url: string | null;
    active: boolean;
    created_at: string;
  };
  testimonials: {
    id: string;
    name: string;
    text: string;
    rating: number;
    avatar_url: string | null;
    created_at: string;
  };
  pharmacy_turns: {
    id: string;
    name: string;
    address: string | null;
    phone: string | null;
    is_on_duty: boolean;
    duty_start: string | null;
    duty_end: string | null;
    created_at: string;
  };
};

export type ProductCategory = Tables['product_categories'];
export type Product = Tables['products'];
export type Promotion = Tables['promotions'];
export type Testimonial = Tables['testimonials'];
export type PharmacyTurn = Tables['pharmacy_turns'];
