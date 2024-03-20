import express from 'express';
import { products } from "../models/products.js";
import Joi from 'joi';

const CheckValidate = Joi.object({
    name: Joi.string().required().empty().messages({
        "any.required": "Ten khong de trong",
        "string.empty": "Ten khong dung dinh dang"
    }),
    image: Joi.string().required().empty().messages({
        "any.required": "Ten khong de trong",
        "string.empty": "Ten khong dung dinh dang"
    }),
    price: Joi.string().required().min(1000).messages({
        "any.required": "Gia khong duoc de trong",
        "number.min": "Gia san pham khong nho hon 1k"
    }),
})
const router = express.Router();
router.post("/products", async (req, res) => {
    const { name, image, price } = req.body;
    const error = CheckValidate.validate(name, image, price);
    console.log(error);
    if (error) {
        console.log(error.messages);
    }
    // const product = await new products(body).save();
    // // const model = mongoose.model("products", chema);
    // // const response = await product.save();
    // res.send(product);
});
router.get('/products', async (req, res) => {
    const response = await products.find();
    res.send(response);
});
router.put('/products/:id', async (req, res) => {
    const id = req.params.id;
    const body = req.body;
    const response = await products.findOneAndUpdate({ _id: id }, body, { new: true });
    res.send(response);
});
router.delete('/products/:id', async (req, res) => {
    const id = req.params.id;
    const response = await products.findOneAndDelete({ _id: id });
    res.send(response);
})
export default router