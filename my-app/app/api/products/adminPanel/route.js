import { NextResponse } from "next/server";
import Product from "../../../../models/productModel";
import { connect } from "../../../../dbConfig/dbConfig";

connect()
export async function POST(request) {
  try {
    const reqBody = await request.json();
    const {p_id} = reqBody;
    // const product = await Product.findOne({p_id});
    // if (product) {
    //   return NextResponse.json(
    //     { error: "Product already exist" },
    //     { status: 400 }
    //   );
    // }
    const newProduct = new Product(reqBody);
    const savedProduct = await newProduct.save();
    return NextResponse.json({
        message:"Product added successfully",
        success: true,
        savedProduct
    })
  } catch (error) {
    console.log(JSON.stringify(error))
    return NextResponse.json({error:error}, {status:500})
  }
}
