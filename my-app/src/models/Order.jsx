import mongoose from "mongoose"

const OrderSchema = new mongoose.Schema({
    user: {
        name: String,
        email: String,
        country: String,
        city: String,
        address: String,
        postalCode: Number
    },
    cart: [
        {
            _id: String,
            title: String,
            price: Number,
            quantity: Number,
            img: String
        }
    ],
    totalPrice: Number,
    status: {type:String, default:"pending"},
    createAt: {type: String, default: Date.now}
}, { timestamps: true })

export default mongoose.models.Order || mongoose.model("Order", OrderSchema)