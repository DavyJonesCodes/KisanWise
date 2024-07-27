const mongoose = require('mongoose');

// Define the schema for product reviews
const reviewSchema = new mongoose.Schema({
  reviewId: {
    type: mongoose.Schema.Types.ObjectId,
    default: mongoose.Types.ObjectId, // Auto-generate a unique ID if not provided
  },
  reviewer: {
    type: String,
    required: true // Assume reviewer name or user ID is required
  },
  rating: {
    type: Number,
    min: 1, // Minimum rating
    max: 5, // Maximum rating
    required: true
  },
  comment: {
    type: String,
    required: false
  },
  date: {
    type: Date,
    default: Date.now
  }
});

// Define the main schema for products
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    enum: ['fertilizer', 'seed', 'machine', 'equipment'], // List possible types
    required: true
  },
  category: {
    type: String,
    enum: ['organic', 'inorganic', 'machinery'], // List possible categories
    required: true
  },
  description: {
    type: String,
    required: false
  },
  price: {
    type: Number,
    required: true
  },
  stock: {
    type: Number,
    required: true
  },
  images: {
    type: [String], // Array of URLs
    required: false
  },
  productURL: {
    type: String,
    required: false
  },
  reviews: [reviewSchema], // Embed review schema
  tags: {
    type: [String], // Array of tags
    required: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Create the model
const Product = mongoose.model('Product', productSchema);

module.exports = Product;
