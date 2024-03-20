import express from "express";
import { Book } from "../models/book.js";

const Bookrouter = express.Router();
Bookrouter.get('/books', async (req, res) => {
    const books = await Book.find();
    res.send(books)
})

Bookrouter.post('/books', async (req, res) => {
    const body = req.body;
    const book = new Book(body);
    const response = await book.save();
    res.send(response);
})


Bookrouter.put('/books/:id', async (req, res) => {
    const id = req.params.id;
    const body = req.body;
    const response = await Book.findOneAndUpdate({ _id: id }, body);
    res.send(response);
})

Bookrouter.delete('/books/:id', async (req, res) => {
    const id = req.params.id;
    const response = await Book.findOneAndDelete({ _id: id });
    res.send(response);
})
export default Bookrouter