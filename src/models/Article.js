// models/Article.js
import mongoose from "mongoose";

const articleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  image: String,
  description: String,
  category: String,
  categoryLink: String,
  date: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Article ||
  mongoose.model("Article", articleSchema);
