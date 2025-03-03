import { NextResponse } from "next/server";
import Product from "../../../../models/productModel";
import { connect } from "../../../../dbConfig/dbConfig";

connect()
export async function POST(request) {
  try {
    const reqBody = await request.json();
    const {p_id} = reqBody;
    const newProduct = new Product(reqBody);
    const savedProduct = await newProduct.save();
    return NextResponse.json({
        message:"Product added successfully",
        success: true,
        savedProduct
    })
  } catch (error) {
    if(error.message.includes("duplicate key")){
      const duplicateKey = Object.keys(error.keyPattern)[0]
      return NextResponse.json({error:`${duplicateKey} already exist`}, {status:500})
    }
    else{
      return NextResponse.json({error:error}, {status:500})
    }
    
  }
}
