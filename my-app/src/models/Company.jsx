import mongoose from "mongoose";

const CompanySchema = new mongoose.Schema({
    title: String,
    price: Number,
    img: String,
    description: String,
    rate: Number,
    category: String
}, { timestamps: true });

export default mongoose.models.Company || mongoose.model("Company", CompanySchema);