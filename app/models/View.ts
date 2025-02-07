import mongoose from "mongoose";

const ViewSchema = new mongoose.Schema(
  {
    page: { type: String, required: true, unique: true },
    count: { type: Number, default: 0 }, 
  },
  { timestamps: true }
);

export default mongoose.models.View || mongoose.model("View", ViewSchema);
