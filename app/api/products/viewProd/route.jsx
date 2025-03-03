import { NextResponse } from "next/server"
import Product from "../../../../models/productModel"
import { connect } from "../../../../dbConfig/dbConfig";

connect();
export async function GET(request) {
    try {
        const products = await Product.find({})
        return NextResponse.json(products, { status: 200 })
    } catch (error) {
        console.error('Error fetching products:', error);
        return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 });
    }
} 