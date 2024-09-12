import express from "express";
import {
  getAllBooks,
  getOneBooks,
  createBook,
  updateBook,
  deleteBook,
} from "../controllers/booksControllers";

const booksRouter = express.Router();

router.get("/", getAllBooks);
router.get("/:id", getOneBooks);
router.post("/", createBook);
router.put("/:id", updateBook);
router.delete("/:id", deleteBook);

export default booksRouter
