import mongoose from "mongoose";

const HistorySchema = mongoose.Schema({
  videoId: { type: String, required: true },
  Viewer: { type: String, required: true },
  LikedOn: { type: Date, default: Date.now },
});

HistorySchema.index({ videoId: 1, Viewer: 1 }, { unique: true });
export default mongoose.model("History", HistorySchema);
