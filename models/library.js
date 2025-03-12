import { Schema, model } from "mongoose";


const librarySchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    author: {
        type: String,
        required: true
    },
    ISBN: {
        type: Number,
        required: true
    },

    numberOfPages: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    yearOfPublication: {
        type: Date,
        required: true
    },
    bookDescription: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
});


export const LibraryModel = model('library', librarySchema)