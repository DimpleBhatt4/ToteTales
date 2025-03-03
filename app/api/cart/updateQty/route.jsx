import { NextResponse } from "next/server";
import { connect } from "@/dbConfig/dbConfig";
import Cart from "../../../../models/cartModel";
import { getDataFromToken } from "../../../utilis/server/getDataFromToken";

connect();

export async function PUT(request) {
  try {
    const userId = await getDataFromToken(request);
    const reqBody = await request.json();
    const { productId, quantity } = reqBody;

    let userCart = await Cart.findOne({ user: userId });

    if (!userCart) {
      return NextResponse.json({ message: "Cart not found" }, { status: 404 });
    }

    const cartItem = userCart.items.find(item => item.product.toString() === productId);

    if (!cartItem) {
      return NextResponse.json({ message: "Product not found in cart" }, { status: 404 });
    }

    cartItem.quantity = quantity; // Update quantity
    await userCart.save();

    return NextResponse.json({
      message: "Cart updated successfully",
      status: 200,
      updatedCart: userCart
    });

  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
