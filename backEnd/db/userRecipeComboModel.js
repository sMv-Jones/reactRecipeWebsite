import mongoose from 'mongoose';

const recipeSchema = new mongoose.Schema({
  recipeId: {
    type: Number,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  ingredients: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
});

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true
  },
  recipes: [recipeSchema] // Embedded list of recipes
}, {
  timestamps: true
});

const User = mongoose.model('User', userSchema);
export default User;
