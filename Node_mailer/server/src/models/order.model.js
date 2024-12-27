import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
  userEmail: {
    type: String,
    required: true,
    unique: true,
  },
  items: {
    name: String,
    quantity: Number,
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    default: "Processing",
  },
  orderedAt: {
    type: Date,
    default: Date.now(),
  },
});

export default mongoose.model("Order", OrderSchema);
