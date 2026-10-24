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
  },
];

// ─── Product Data ──────────────────────────────────────────────────────────────

export const products = [
  {
    id: 'burgundy-shirt',
    name: 'Burgundy Classic Shirt',
    category: 'shirts',
    price: null, // Set actual price when available
    originalPrice: null,
    description: 'A refined burgundy shirt from the BIG DADDY signature collection.',
    images: ['/images/burgundy-shirt.jpg'],
    sizes: [], // e.g. ['S', 'M', 'L', 'XL', 'XXL']
    colors: [{ name: 'Burgundy', hex: '#722F37' }],
    fabric: null, // Add when verified
    inStock: true,
    isNew: true,
    featured: true,
  },
  {
    id: 'charcoal-trouser',
    name: 'Charcoal Formal Trouser',
    category: 'trousers',
    price: null,
    originalPrice: null,
    description: 'Sleek charcoal trousers designed for the modern gentleman.',
    images: ['/images/charcoal-trouser.jpg'],
    sizes: [],
    colors: [{ name: 'Charcoal', hex: '#36454F' }],
    fabric: null,
    inStock: true,
    isNew: true,
    featured: true,
  },
  {
    id: 'pink-shirt',
    name: 'Blush Pink Shirt',
    category: 'shirts',
    price: null,
    originalPrice: null,
    description: 'A contemporary pink shirt that brings subtle sophistication.',
    images: ['/images/pink-shirt.jpg'],
    sizes: [],
    colors: [{ name: 'Blush Pink', hex: '#DE6FA1' }],
    fabric: null,
    inStock: true,
    isNew: true,
    featured: true,
  },
  {
    id: 'charcoal-trouser-2',
    name: 'Charcoal Slim Trouser',
    category: 'trousers',
    price: null,
    originalPrice: null,
    description: 'Contemporary slim-cut charcoal trousers with a refined finish.',
    images: ['/images/charcoal-trouser.jpg'],
    sizes: [],
    colors: [{ name: 'Charcoal', hex: '#36454F' }],
    fabric: null,
    inStock: true,
    isNew: false,
    featured: true,
  },
];

export const categories = [
  { id: 'all', name: 'All Products' },
  { id: 'shirts', name: 'Shirts' },
  { id: 'trousers', name: 'Trousers' },
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
