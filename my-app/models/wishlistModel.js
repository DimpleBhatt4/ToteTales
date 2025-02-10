import mongoose from "mongoose";

const WishlistSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Reference to the User model
    required: true,
  },
  products: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product", // Reference to the Product model
    },
  ],
}, { timestamps: true });

const Wishlist = mongoose.models.Wishlist || mongoose.model("Wishlist", WishlistSchema);
export default Wishlist
