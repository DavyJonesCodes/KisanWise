const mongoose = require('mongoose');

// Define the schema for comments
const commentSchema = new mongoose.Schema({
  commentId: {
    type: mongoose.Schema.Types.ObjectId,
    default: mongoose.Types.ObjectId // Automatically generate a unique ObjectId
  },
  content: {
    type: String,
    required: true // Comment content is required
  },
  authorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the User model
    required: true // Author of the comment is required
  },
  createdAt: {
    type: Date,
    default: Date.now // Default to the current date and time
  }
});

// Define the schema for forum posts
const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true // Title of the post is required
  },
  content: {
    type: String,
    required: true // Content of the post is required
  },
  authorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the User model
    required: true // Author of the post is required
  },
  createdAt: {
    type: Date,
    default: Date.now // Default to the current date and time
  },
  updatedAt: {
    type: Date,
    default: Date.now // Default to the current date and time
  },
  comments: [commentSchema], // Array of comments
  tags: {
    type: [String], // Array of tags for categorization
    enum: ['resource', 'question'], // Possible values for tags
    required: true // Ensure that at least one tag is provided
  }
});

// Create the model for forum posts
const Post = mongoose.model('Post', postSchema);

module.exports = Post;
