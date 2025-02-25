import mongoose from "mongoose";

const publicationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  organization: {
    type: String,
    required: true,
  },
});

export default mongoose.models.Publication ||
  mongoose.model("Publication", publicationSchema);
