import { NextResponse } from "next/server";
import { connect } from "@/dbConfig/dbConfig";
import Cart from "../../../../models/cartModel";
import { getDataFromToken } from "../../../utilis/server/getDataFromToken";

connect();

export async function DELETE(request) {
  try {
    const userId = await getDataFromToken(request);
    const reqBody = await request.json();
    const { cartId } = reqBody;

    // Find the user's cart
    const userCart = await Cart.findOne({ user: userId });

    if (!userCart) {
      return NextResponse.json({ message: "Cart not found" }, { status: 404 });
    }

    // Remove the product from the cart correctly
    userCart.items = userCart.items.filter(
      (item) => item.product.toString() !== cartId
    );

    // If cart is empty after removal, delete it
    if (userCart.items.length === 0) {
      await Cart.deleteOne({ user: userId });
      return NextResponse.json({
        message: "Cart is now empty and has been deleted",
        status: 200,
      });
    }

    await userCart.save();

    return NextResponse.json({
      message: "Product removed from cart",
      status: 200,
      cart: userCart,
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
