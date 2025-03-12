import { Schema, model } from "mongoose";
import { type } from "os";

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
    isbn: {
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
    image: {
        type: String,
        required: true
    }
});


export const LibraryModel = model('library', librarySchema)