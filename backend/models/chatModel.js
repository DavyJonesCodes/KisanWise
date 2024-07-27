const mongoose = require('mongoose');

// Define the schema for individual messages
const messageSchema = new mongoose.Schema({
  role: {
    type: String,
    enum: ['user', 'ai'],  // Role of the sender, must be either 'user' or 'ai'
    required: true
  },
  text: {
    type: String,
    required: true  // Message content is required
  },
  timestamp: {
    type: Date,
    default: Date.now  // Defaults to current date and time if not provided
  }
});

// Define the schema for chats
const chatSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true  // User ID is required
  },
  timestamp: {
    type: Date,
    default: Date.now  // Defaults to current date and time if not provided
  },
  messages: [messageSchema]  // Array of message subdocuments
});

// Create the model
const Chat = mongoose.model('Chat', chatSchema);

module.exports = Chat;