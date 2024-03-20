import mongoose, { Schema } from "mongoose";
const BookSchema = new Schema({
    name: String,
    price: Number,
    description: String,
    image: String,
    author: String
}
    ,
    {
        timestamps: true
    }
);
export const Book = mongoose.model('books', BookSchema)