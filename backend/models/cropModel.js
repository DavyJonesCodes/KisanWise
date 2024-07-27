const mongoose = require('mongoose');

// Define the schema
const cropSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  scientificName: {
    type: String,
    required: true
  },
  type: {
    type: String,
    enum: ['fruit', 'vegetable', 'grain', 'herb', 'spice'], // Add other types as needed
    required: true
  },
  season: {
    type: String,
    enum: ['spring', 'summer', 'fall', 'winter'], // Adjust as needed
    required: true
  },
  averageYield: {
    type: Number,
    required: false
  },
  resourcesRequired: {
    type: [String],
    required: false
  },
  plantingInstructions: {
    type: String,
    required: false
  },
  harvestInstructions: {
    type: String,
    required: false
  },
  soilType: {
    type: String,
    required: false
  },
  pHRange: {
    type: String,
    required: false
  },
  temperatureRange: {
    type: String,
    required: false
  },
  growthDuration: {
    type: String,
    required: false
  },
  pestsAndDiseases: {
    type: [String],
    required: false
  },
  beneficialCompanions: {
    type: [String],
    required: false
  },
  nutritionalValue: {
    type: String,
    required: false
  },
  images: {
    type: [String],
    required: false
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Assuming there is a User model
    required: true
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

// Create a model
const Crop = mongoose.model('Crop', cropSchema);

module.exports = Crop;