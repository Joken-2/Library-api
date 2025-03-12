import { LibraryModel } from "../models/library.js";
import { libraryValidator } from "../validators/library.js";

// Adding a book
export const addBook = async (req, res) => {
  try {

    const { error, value } = libraryValidator.validate(req.body, {abortEarly: false});

    if (error) {
      return res.status(422).json(error);
    }

    const newBook = new LibraryModel(value);
    await newBook.save();
    res.status(201).json(newBook);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Read / get all books
export const getBooks = async (req, res) => {
  const allBooks = await LibraryModel.find({});
  res.status(200).json({ books: allBooks });
};

// Read / get a book by ID
export const getBook = async (req, res) => {
  const oneBook = await LibraryModel.findById(req.params.id);
  res.status(200).json({ book: oneBook });
};

// Updating Book Details
export const updateBook = async (req, res) => {
  const updatedBook = await LibraryModel.findByIdAndUpdate(
    req.params.id,
    req.body,

    { new: true, runValidators: true }
  );
  res.json({ update: updatedBook });
};

// Deleting Book Details
export const deleteBook = async (req, res) => {
  const deletedBook = await LibraryModel.findByIdAndDelete(
    req.params.id,
    req.body,

    { new: true, runValidators: true }
  );
  res.json({ delete: deletedBook });
};


