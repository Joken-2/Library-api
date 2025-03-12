<<<<<<< HEAD
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

import express from 'express';
import libraryRouter from './routes/library.js';
//  
import mongoose from 'mongoose';

// make database connection


await mongoose.connect(process.env.MONGO_URI).then(
    console.log("The database is connected")
)

// const connectionString = process.env.MONGO_URL

// mongoose.connect(connectionString).then(() => {
//     console.log('databsae connected')
// }).catch((error) => {
//     console.log('error')
// })

// create an express app
const app = express()

// use globle middlewares
app.use(express.json());

// USe route
app.use(libraryRouter)

// listen for incoming requests
const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
>>>>>>> origin
})