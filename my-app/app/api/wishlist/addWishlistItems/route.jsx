import { NextResponse } from "next/server";
import { connect } from "@/dbConfig/dbConfig";
import Product from "@/models/productModel";
import Wishlist from "../../../../models/wishlistModel";
import { getDataFromToken } from "../../../utilis/server/getDataFromToken";

connect();

// export async function GET(request) {
//   try {
//     const userId = await getDataFromToken(request);
//     const userWishlist = await Wishlist.findOne({ user: userId })
//     .populate("products"); 

//     if (!userWishlist) {
//       return NextResponse.json(
//         { message: "Wishlist items doesn't exist" },
//         { status: 404 }
//       );
//     }
//     return NextResponse.json({
//         message: "User's wishlist",
//       status: 200,
//       productWishlist:userWishlist.products,
//     });
//   } catch (error) {
//     console.log("Error in fetching wishlist items");
//     return NextResponse.json({ error: error.message }, { status: 500 });
//   }
// }

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
