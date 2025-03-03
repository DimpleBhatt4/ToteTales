import mongoose from "mongoose";

const CartSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Reference to the User model
    required: true,
  },
  items: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product", // Reference to the Product model
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
        default: 1, // Default quantity is 1
        min: 1,
      },
    },
  ],
  totalPrice: {
    type: Number,
    default: 0, // Can be calculated dynamically
  },
}, { timestamps: true });

export default mongoose.models.Cart || mongoose.model("Cart", CartSchema);
