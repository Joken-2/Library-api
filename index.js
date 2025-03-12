import express from 'express';
import libraryRouter from './routes/library.js';
import mongoose from 'mongoose';
import cors from 'cors'


// make the DB connection

await mongoose.connect(process.env.MONGO_URI).then(
    console.log("The DB is connected")
);

// create an express app.
const app = express();

app.use(cors());

// use global middlewares
app.use(express.json());

// Use route
app.use(libraryRouter);

// listen for incoming requests
const port = process.env.PORT || 5557;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });

