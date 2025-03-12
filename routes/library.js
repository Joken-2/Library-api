import { Router } from "express";
import {
  addBook,
  deleteBook,
  getBook,
  getBooks,
  updateBook,
} from "../controllers/library.js";
import { remoteUpload } from "../middlewares/upload.js";

// Create library router
// const libraryRouter = Router();
const libraryRouter = Router()

// Define Route
libraryRouter.post("/library", remoteUpload.single('image'), addBook);

libraryRouter.get("/library/:id", getBook);

libraryRouter.get("/library", getBooks);

libraryRouter.patch("/library/:id", updateBook);

libraryRouter.delete("/library/:id", deleteBook);

// export Router
export default libraryRouter;
