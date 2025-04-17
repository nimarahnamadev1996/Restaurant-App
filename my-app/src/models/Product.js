import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    title: String,
    price: Number,
    img: String,
    description: String,
    rate: Number,
    category: String
}, { timestamps: true });

export default mongoose.models.Product || mongoose.model("Product", ProductSchema);