import { NextResponse } from "next/server";
import { connect } from "@/dbConfig/dbConfig";
import Cart from "../../../../models/cartModel";
import { getDataFromToken } from "../../../utilis/server/getDataFromToken";

connect();

export async function GET(request) {
  try {
    const userId = await getDataFromToken(request);

    const userCart = await Cart.findOne({ user: userId }).populate({
        path: "items.product",
        select: "name actual_price sale_price img_url",
      }).lean(); // Convert to plain JS object (faster)

    // If the cart doesn't exist, return an empty array
    if (!userCart || userCart.items.length === 0) {
      return NextResponse.json({
        message: "User's cart is empty",
        status: 200,
        cartProducts: [],
      });
    }

    return NextResponse.json({
      message: "User's cart retrieved successfully",
      status: 200,
      userCart,
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
