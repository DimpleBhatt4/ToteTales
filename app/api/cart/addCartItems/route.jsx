import { NextResponse } from "next/server";
import { connect } from "@/dbConfig/dbConfig";
import Cart from "../../../../models/cartModel";
import { getDataFromToken } from "../../../utilis/server/getDataFromToken";

connect();

export async function POST(request) {
  try {
    const userId = await getDataFromToken(request);
    const reqBody = await request.json();
    const { cartId } = reqBody;

    let userCart = await Cart.findOne({ user: userId });

    if (userCart) {
      //Ensuring item is an array before pushing
      if (!Array.isArray(userCart.items)) {
        userCart.items = [];
      }

      //Check if the product already exists in the cart
      const existingItem = userCart.items.find(
        (item) => item.product.toString() === cartId
      );

      if (existingItem) {
        existingItem.quantity += 1; // Increase quantity if product already exists
      } else {
        userCart.items.push({ product: cartId, quantity: 1 });
      }
    } else {
      //Create new cart
      userCart = new Cart({
        user: userId,
        items: [{ product: cartId, quantity: 1 }],
      });
    }

    const savedCart = await userCart.save();

    return NextResponse.json({
      message: "Product added to cart",
      status: 200,
      savedCart,
    });

  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
