import { NextResponse } from "next/server";
import { connect } from "@/dbConfig/dbConfig";
import Wishlist from "../../../../models/wishlistModel";
import { getDataFromToken } from "../../../utilis/server/getDataFromToken";

connect();

export async function GET(request) {
  try {
    const userId = await getDataFromToken(request);
    const userWishlist = await Wishlist.findOne({ user: userId }).populate(
      "products"
    );
    let wishlistProducts = [];
    if (userWishlist && userWishlist.products.length !== 0) {
      wishlistProducts = userWishlist.products;
    }
    return NextResponse.json({
      message: "User's wishlist",
      status: 200,
      wishlistProducts,
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
