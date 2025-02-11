import mongoose from "mongoose";
import { sectionSchema } from "./Section";

export const pageSchema = new mongoose.Schema({
  slug: {
    type: String,
    required: true,
    index: true,
  },
  sections: [sectionSchema],
  metadata: {
    title: String,
    description: String,
    keywords: [String],
  },
});
