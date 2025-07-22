import mongoose from "mongoose";

const portfolio_visited_users = new mongoose.Schema(
  {
    ip: {
      type: String,
      required: true,
    },

    ipInfo: {
      type: String,
      required: true,
    },

    userAgent: {
      type: [String],
      default: [],
    },
    visits: {
      type: [Date],
      default: [],
    },

    lastVisitedAt: {
      type: Date,
      default: null,
    },

    visitCount: {
      type: Number,
      default: 0,
    },

    userActivity: [
      {
        action: { type: String, required: true },
        at: { type: Date, default: Date.now },
        url: { type: String, default: null },
      },
    ],
  },

  {
    timestamps: true,
  },
);
export default mongoose.models.portfolio_visited_users ||
  mongoose.model("portfolio_visited_users", portfolio_visited_users);
