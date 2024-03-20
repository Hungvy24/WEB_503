// const express = require('express');
import express from "express";
import router from "./router/products.js";
import connectdb from "./Database/connect.js";
import Authrouter from "./router/auth.js";
import Bookrouter from "./router/book.js";
const app = express();
const port = 3000;
app.use(express.json());
app.use('/api', router);
app.use('/api', Authrouter);
app.use('/api', Bookrouter);
app.listen(port, async () => {
    await connectdb();
    console.log(`Endpoint http://localhost:${port}/api/products`);
});