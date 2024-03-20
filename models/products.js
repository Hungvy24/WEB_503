import mongoose from "mongoose";
const pSchema = mongoose.Schema({
    name: String,
    image: String,
    price: Number
},
    {
        timestamps: true
    });
export const products = mongoose.model('products', pSchema);