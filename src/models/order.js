import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema(
  {
    line_items: Object,
    name: String,
    totalAmount: Number,
    email: String,
    city: String,
    postCode: String,
    streetAddress: String,
    state: String,
    paid: Boolean,
    deliveryStatus: String
  },
  { timestamps: true }
);

export const Order =
  mongoose.models.Order || mongoose.model("Order", OrderSchema);
