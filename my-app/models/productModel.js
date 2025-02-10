import mongoose from "mongoose"

const productSchema = new mongoose.Schema({
    p_id: {
        type: Number,
        required: [true, "Please provide an unique product ID"],
        unique: true
    },
    category: {
        type: String,
        required: [true, "Please provide the category name"],
    },
    actual_price: {
        type: Number,
        required: [true, "Please provide the actual price"],
    },
    sale_price: {
        type: Number,
        default:null
    },
    name: {
        type: String,
        required: [true, "Please provide the product's name"],
        unique: true
    },
    description: {
        type: String,
        required: [true, "Please provide the product's description"],
    },
    rating: {
        type: Number,
        required: [true, "Please provide the rating of the product"],
        unique: false,
        min: [0, "Rating must be at least 0"],
        max: [5, "Rating must not exceed 5"]
    },
    img_url: {
        type: String,
        required: [true, "Please provide image url"],
    }
}, { timestamps: true })
const Product = mongoose.models.Product || mongoose.model('Product', productSchema)

export default Product