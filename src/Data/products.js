// src/Data/products.js
export const products = [
  {
    id: 1,
    name: "iPhone 14",
    category: "Electronics",
    subcategory: "Smartphones",
    price: 79999,
    rating: 4.5,
    description: "Latest Apple iPhone with A15 Bionic chip.",
    image: "/images/iphone14.jpg",
    features: [
      "6.1-inch Super Retina XDR display",
      "A15 Bionic chip",
      "Dual-camera system",
    ],
    reviews: [
      { user: "Rahul", rating: 5, comment: "Amazing phone, super fast!" },
      { user: "Priya", rating: 4, comment: "Great camera, battery is okay." },
    ],
    responses: [
      { question: "Does it support 5G?", answer: "Yes, it supports 5G." },
      { question: "Is charger included?", answer: "No, only cable included." },
    ],
  },
  {
    id: 2,
    name: "Samsung Galaxy S23",
    category: "Electronics",
    subcategory: "Smartphones",
    price: 69999,
    rating: 4.4,
    description: "Samsung flagship with amazing display.",
    image: "/images/galaxys23.jpg",
    features: [
      "6.2-inch AMOLED display",
      "Snapdragon 8 Gen 2",
      "Triple-camera system",
    ],
    reviews: [
      { user: "Amit", rating: 5, comment: "Excellent phone!" },
      { user: "Neha", rating: 4, comment: "Good performance." },
    ],
    responses: [
      { question: "Does it have wireless charging?", answer: "Yes" },
    ],
  },
  {
    id: 3,
    name: "OnePlus 11",
    category: "Electronics",
    subcategory: "Smartphones",
    price: 49999,
    rating: 4.3,
    description: "OnePlus flagship with Snapdragon 8 Gen 2.",
    image: "/images/oneplus11.jpg",
    features: [
      "6.7-inch Fluid AMOLED display",
      "Snapdragon 8 Gen 2",
      "Triple-camera system",
    ],
    reviews: [
      { user: "Kiran", rating: 5, comment: "Fast and smooth experience!" },
      { user: "Sonia", rating: 4, comment: "Good value for money." },
    ],
    responses: [
      { question: "Does it support fast charging?", answer: "Yes, 100W charging." },
    ],
  },
  {
    id: 4,
    name: "Dell XPS 13",
    category: "Electronics",
    subcategory: "Laptops",
    price: 109999,
    rating: 4.7,
    description: "Compact and powerful laptop for professionals.",
    image: "/images/dellxps.jpg",
    features: [
      "13.4-inch FHD display",
      "Intel Core i7 12th Gen",
      "16GB RAM, 512GB SSD",
    ],
    reviews: [
      { user: "Ramesh", rating: 5, comment: "Excellent laptop for work!" },
    ],
    responses: [
      { question: "Does it have Thunderbolt ports?", answer: "Yes, two ports available." },
    ],
  },
  {
    id: 5,
    name: "MacBook Air M2",
    category: "Electronics",
    subcategory: "Laptops",
    price: 129999,
    rating: 4.8,
    description: "Apple's lightweight laptop with M2 chip.",
    image: "/images/macbookair.jpg",
    features: [
      "13.6-inch Retina display",
      "Apple M2 chip",
      "8GB RAM, 256GB SSD",
    ],
    reviews: [
      { user: "Anita", rating: 5, comment: "Super fast and silent!" },
    ],
    responses: [
      { question: "Can it run Adobe Photoshop smoothly?", answer: "Yes, easily." },
    ],
  },
  {
    id: 6,
    name: "Sony WH-1000XM5",
    category: "Electronics",
    subcategory: "Headphones",
    price: 29999,
    rating: 4.8,
    description: "Industry-leading noise-canceling headphones.",
    image: "/images/sonyheadphones.jpg",
    features: [
      "Active Noise Cancellation",
      "30-hour battery life",
      "Touch controls",
    ],
    reviews: [
      { user: "Vikram", rating: 5, comment: "Best noise cancellation!" },
    ],
    responses: [
      { question: "Can I use it with phone calls?", answer: "Yes, clear calls." },
    ],
  },
  {
    id: 7,
    name: "Apple Watch Series 8",
    category: "Electronics",
    subcategory: "Smart Watches",
    price: 39999,
    rating: 4.5,
    description: "Apple Watch with advanced health tracking.",
    image: "/images/applewatch8.jpg",
    features: [
      "Blood Oxygen & ECG monitoring",
      "Always-on Retina display",
      "Fitness tracking",
    ],
    reviews: [
      { user: "Meera", rating: 5, comment: "Love the fitness features!" },
    ],
    responses: [
      { question: "Does it support LTE?", answer: "Yes, optional LTE available." },
    ],
  }
];
