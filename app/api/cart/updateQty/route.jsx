import { NextResponse } from "next/server";
import { connect } from "@/dbConfig/dbConfig";
import Cart from "@/models/cartModel";
import { getDataFromToken } from "@/app/utilis/server/getDataFromToken";

connect();

export async function PUT(request) {
  try {
    const userId = await getDataFromToken(request);
    const { productId, quantity } = await request.json();

    if (!productId || quantity === undefined) {
      return NextResponse.json({ message: "Missing productId or quantity" }, { status: 400 });
    }

    const userCart = await Cart.findOne({ user: userId });

    if (!userCart) {
      return NextResponse.json({ message: "Cart not found" }, { status: 404 });
    }

    const item = userCart.items.find(
      (item) => item.product.toString() === productId
    );

    if (!item) {
      return NextResponse.json({ message: "Product not found in cart" }, { status: 404 });
    }

    item.quantity = quantity;
    await userCart.save();

    const updatedCart = await Cart.findOne({ user: userId }).populate({
      path: "items.product",
      select: "name actual_price sale_price img_url",
    }).lean();

    return NextResponse.json(
      {
        message: "Cart updated successfully",
        updatedCart,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Cart Update Error:", error);
    return NextResponse.json(
      { message: error.message || "Server error" },
      { status: 500 }
    );
  }
}
