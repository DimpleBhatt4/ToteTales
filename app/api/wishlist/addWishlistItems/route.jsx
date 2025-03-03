import { NextResponse } from "next/server";
import { connect } from "@/dbConfig/dbConfig";
import Wishlist from "../../../../models/wishlistModel";
import { getDataFromToken } from "../../../utilis/server/getDataFromToken";

connect();

export async function POST(request) {
  try {
    const userId = await getDataFromToken(request);
    const reqBody = await request.json();
    const { wishlistId } = reqBody;
    const userWishlist = await Wishlist.findOne({ user: userId });
    let wishlist;
    if (userWishlist) {
      userWishlist.products.push(wishlistId);
      wishlist= userWishlist
    } else {
      wishlist = new Wishlist({
        user: userId,
        products: [wishlistId],
      });
    }
    const savedWishlist = await wishlist.save();
    return NextResponse.json({
      message: "Product added to wishlist",
      status: 200,
      savedWishlist,
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
