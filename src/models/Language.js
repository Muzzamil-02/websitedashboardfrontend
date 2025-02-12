import mongoose from "mongoose";
import { pageSchema } from "./Page";

const languageSchema = new mongoose.Schema(
  {
    code: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: (v) => /^[a-z]{2}(-[A-Z]{2})?$/.test(v),
        message: "Invalid language code",
      },
    },
    pages: [pageSchema],
    active: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

// Compound index for faster nested queries
languageSchema.index({ code: 1, "pages.slug": 1, "pages.sections.slug": 1 });

export default mongoose.models.Language ||
  mongoose.model("Language", languageSchema);
