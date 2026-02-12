// Create Product model
import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please give name to the product."]
    },
    description: {
        type: String,
        required: [true, "Please give description to the product."]
    },
    price: {
        type: Number,
        required: [true, "Please provide price of the product."]
    },
    stock: {
        type: Number,
        default: 0
    },
    reviews: [{
        title: { 
            type: String, 
            required: [true, "Please give review title."] 
        },
        content: { 
            type: String, 
            required: [true, "Please give review content."] 
        }
    }],
    rating: {
        type: Number,
        default: 0
    }
})

const Product = mongoose.model("Product", productSchema);

export default Product;