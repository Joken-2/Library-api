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
const port = 5555
app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})