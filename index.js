import express from "express";
import productRouter from "./routes/products.js";
import mongoose from 'mongoose'

//make db connection
await mongoose.connect(process.env.MONGO_URI)


// create an express app
const app = express();

//Use global middleware
app.use(express.json());

//Use routes
app.use(productRouter);


//Listen to incoming request
app.listen(3000, () =>{
    console.log(`server is listening on port 3000`);
})