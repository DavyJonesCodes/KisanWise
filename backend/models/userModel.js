const mongoose = require('mongoose');

// Define the schema
const userSchema = new mongoose.Schema({
  auth0Id: {
    type: String,
    required: true,
    unique: true
  },
  username: {
    type: String,
    required: false
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  profile: {
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    profilePicture: {
      type: String,
      required: false
    },
    district: {
      type: String,
      required: false
    },
    state: {
      type: String,
      required: false
    }
  },
  roles: {
    type: [String],
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
const User = mongoose.model('User', userSchema);

module.exports = User;