import { NextResponse } from "next/server";
import { connect } from "@/dbConfig/dbConfig";
import Wishlist from "../../../../models/wishlistModel";
import { getDataFromToken } from "../../../utilis/server/getDataFromToken";

connect();

export async function DELETE(request) {
  try {
    const userId = await getDataFromToken(request); // Get user ID from token
    const reqBody = await request.json();
    const { wishlistId } = reqBody; // Get the product ID to remove

    // Find the user's wishlist
    const userWishlist = await Wishlist.findOne({ user: userId });

    if (!userWishlist) {
      return NextResponse.json({ message: "Wishlist not found" }, { status: 404 });
    }

    // Remove the product from the wishlist
    userWishlist.products = userWishlist.products.filter(
      (product) => product.toString() !== wishlistId
    );

    // Save the updated wishlist
    await userWishlist.save();

    return NextResponse.json({
      message: "Product removed from wishlist",
      status: 200,
      wishlist: userWishlist,
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

