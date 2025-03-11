import { Schema, model } from "mongoose";

const librarySchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    author: {
        type:String, 
        required: true
    },
    isbn: {
        type: Number,
        required:true
    },

    numberOfPage:{
        type: Number,
        required: true
    },
    journal:{
        type:String,
        required:true
    },
    yearOfPublication: {
        type: Date,
        required: true
    }
});


export const LibraryModel = model('library', librarySchema)