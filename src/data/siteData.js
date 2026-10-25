/**
 * BIG DADDY — Product & Location Data Configuration
 * 
 * This file contains all configurable product and location data.
 * Update this file to add real product information, prices, and location details.
 * Fields marked as null or empty are placeholders awaiting real data.
 */

// ─── Location / Division Data ──────────────────────────────────────────────────

export const divisions = [
  {
    id: 'gadag',
    name: 'Gadag',
    tagline: 'The Flagship Experience',
    image: null, // Add store image path when available
    address: null, // Add verified address
    phone: null, // Add verified phone number
    email: null,
    hours: null, // e.g. "10:00 AM – 9:00 PM"
    mapUrl: null, // Add Google Maps link when verified
    collections: [], // Add store-specific collection IDs
  },
  {
    id: 'koppal',
    name: 'Koppal',
    tagline: 'Style Meets Tradition',
    image: null,
    address: null,
    phone: null,
    email: null,
    hours: null,
    mapUrl: null,
    collections: [],
  },
  {
    id: 'gangavathi',
    name: 'Gangavathi',
    tagline: 'Bold & Contemporary',
    image: null,
    address: null,
    phone: null,
    email: null,
    hours: null,
    mapUrl: null,
    collections: [],
  },
  {
    id: 'sindhanur',
    name: 'Sindhanur',
    tagline: 'Premium Menswear Destination',
    image: null,
    address: null,
    phone: null,
    email: null,
    hours: null,
    mapUrl: null,
    collections: [],
    comingSoon: false,
  },
  {
    id: 'hb-halli',
    name: 'H.B. Halli',
    tagline: 'A New Chapter Awaits',
    image: null,
    address: null,
    phone: null,
    email: null,
    hours: null,
    mapUrl: null,
    collections: [],
    comingSoon: true,
  },
];

// ─── Product Data ──────────────────────────────────────────────────────────────

export const products = [
  {
    id: 'round-shoulder-tshirts',
    name: 'Round Shoulder T-Shirts',
    category: 'tshirts',
    price: null,
    originalPrice: null,
    dealTag: '4 Round Shoulder T-Shirts @ ₹1000',
    description: 'Trendy oversized round-shoulder t-shirts with bold graphic prints from the BIG DADDY collection.',
    images: ['/images/tshirts.jpg'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Sky Blue', hex: '#87CEEB' },
      { name: 'Royal Blue', hex: '#4169E1' },
    ],
    fabric: 'Premium Cotton',
    inStock: true,
    isNew: true,
    featured: true,
  },
  {
    id: 'premium-shorts',
    name: 'Premium Casual Shorts',
    category: 'shorts',
    price: null,
    originalPrice: null,
    dealTag: '8 Shorts @ ₹1000',
    description: 'Comfortable and stylish shorts for everyday wear. Available in athletic and casual styles.',
    images: ['/images/shorts.jpg'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Navy Blue', hex: '#1B2A4A' },
      { name: 'Beige', hex: '#C8B88A' },
    ],
    fabric: 'Cotton Blend',
    inStock: true,
    isNew: true,
    featured: true,
  },
  {
    id: 'track-pants',
    name: 'Stripe Track Pants',
    category: 'tshirts',
    price: null,
    originalPrice: null,
    dealTag: '3 Track Pants @ ₹1000',
    description: 'Athletic jogger-style track pants with stripe detail. Perfect for workouts and casual wear.',
    images: ['/images/trackpants.jpg'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [{ name: 'Charcoal', hex: '#36454F' }],
    fabric: 'Polyester Blend',
    inStock: true,
    isNew: true,
    featured: true,
  },
  {
    id: 'formal-shirts',
    name: 'Classic Formal Shirts',
    category: 'formals',
    price: null,
    originalPrice: null,
    dealTag: 'Premium Formal Collection',
    description: 'Refined formal shirts with fine patterns. Perfect for office and special occasions.',
    images: ['/images/formal-shirts.jpg'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Burgundy', hex: '#722F37' },
      { name: 'Cream', hex: '#FFFDD0' },
    ],
    fabric: 'Premium Cotton',
    inStock: true,
    isNew: false,
    featured: true,
  },
  {
    id: 'moto-jacket',
    name: 'Moto Racing Jacket',
    category: 'shirts',
    price: null,
    originalPrice: null,
    dealTag: 'New Arrival — Limited Edition',
    description: 'Vintage motorsport-inspired jacket with premium patches. A bold statement piece.',
    images: ['/images/jacket.jpg'],
    sizes: ['M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Black', hex: '#1a1a1a' },
      { name: 'Cream', hex: '#F5F5DC' },
    ],
    fabric: 'Faux Leather',
    inStock: true,
    isNew: true,
    featured: true,
  },
];

export const categories = [
  { id: 'all', name: 'All Products' },
  { id: 'tshirts', name: 'T-Shirts' },
  { id: 'shorts', name: 'Shorts' },
  { id: 'formals', name: 'Formals' },
  { id: 'shirts', name: 'Shirts' },
  { id: 'new', name: 'New Arrivals' },
];

// ─── Brand Info ────────────────────────────────────────────────────────────────

export const brandInfo = {
  name: 'BIG DADDY',
  tagline: 'PREMIUM COLLECTIONS',
  instagram: 'https://www.instagram.com/big_daddy_.14/',
  instagramHandle: '@big_daddy_.14',
  description: 'BIG DADDY brings together contemporary style and everyday confidence.',
  foundedYear: null, // Add when verified
  founderName: null,
};

// ─── Shipping & Policy Configuration ───────────────────────────────────────────

export const shippingConfig = {
  shippingCost: null, // Set when shipping rates are configured
  freeShippingThreshold: null,
  estimatedDelivery: null, // e.g. "3-5 business days"
  taxRate: null,
};

export const policyConfig = {
  returnPolicy: null, // Add actual return policy text
  privacyPolicy: null,
  termsAndConditions: null,
  shippingPolicy: null,
};
