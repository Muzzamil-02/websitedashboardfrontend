import mongoose from "mongoose";

export const sectionSchema = new mongoose.Schema({
  slug: {
    type: String,
    required: true,
    unique: true,
    match: [/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Invalid slug format"],
  },
  attributes: {
    type: Map,
    of: mongoose.Schema.Types.Mixed,
    required: true,
  },
  lastModified: {
    type: Date,
    default: Date.now, // Tracks content changes
  },
});
