// models/ArticleDetail.js
import mongoose from "mongoose";

const articleDetailSchema = new mongoose.Schema({
  article: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Article",
    required: true,
  },
  content: {
    type: mongoose.Schema.Types.Mixed,
    required: true,
  },
  lastUpdated: {
    type: Date,
    default: Date.now,
  },
  views: {
    type: Number,
    default: 0,
  },
});

export default mongoose.models.ArticleDetail ||
  mongoose.model("ArticleDetail", articleDetailSchema);
