import Express from "express";
import { Books } from "../models/Books.js";
import { CheckPostValidate } from "../middeware/Bookasm.js";

const Postsrouter = Express.Router();
Postsrouter.post("/posts", CheckPostValidate, async (req, res) => {
    const body = req.body;
    const book = new Books(body);
    const response = await book.save();
    res.send(response);
});
Postsrouter.get("/posts", async (req, res) => {
    const response = await Books.find();
    res.send(response);
});
Postsrouter.put("/posts/:id", async (req, res) => {
    const id = req.params.id;
    const body = req.body;
    const response = await Books.findOneAndUpdate({ _id: id }, body, {
        new: true,
    });
    res.send(response);
});
Postsrouter.get("/posts/:id", async (req, res) => {
    const id = req.params.id;
    const body = req.body;
    const response = await Books.findOneAndUpdate({ _id: id }, body, {
        new: true,
    });
    res.send(response);
});

Postsrouter.delete("/posts/:id", async (req, res) => {
    const id = req.params.id;
    const response = await Books.findOneAndDelete({ _id: id });
    res.send(response);
});
export default Postsrouter;