const express = require('express');
const ctrl = require('../controllers/booksControllers');

const booksRouter = express.Router();

booksRouter.get("/", ctrl.getAllBooks);
booksRouter.get("/:id", ctrl.getOneBooks);
booksRouter.post("/", ctrl.createBook);
booksRouter.put("/:id", ctrl.updateBook);
booksRouter.delete("/:id", ctrl.deleteBook);

module.exports = booksRouter;
