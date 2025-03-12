import { Router } from "express";
import {
  addBook,
  deleteBook,
  getBook,
  getBooks,
  updateBook,
} from "../controllers/library.js";

// Create library router
const libraryRouter = Router();


// Define Route
libraryRouter.post("/library", addBook);

libraryRouter.get("/library/:id", getBook);

libraryRouter.get("/library", getBooks);

libraryRouter.patch("/library/:id", updateBook);

libraryRouter.delete("/library/:id", deleteBook);

// export Router
export default libraryRouter;
