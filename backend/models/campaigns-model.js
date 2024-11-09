import mongoose from "mongoose";

const campaignSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      default: "uncategorized",
    },
    target: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      default:
        "https://imageio.forbes.com/specials-images/dam/imageserve/160993347/960x0.jpg?height=473&width=711&fit=bounds",
      required: true,
    },
  },
  { Timestamp: true }
);

const Campaign = mongoose.model("Campaigns", campaignSchema);
export default Campaign;
