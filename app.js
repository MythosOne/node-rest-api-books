const express = require("express");
const morgan = require("morgan");
const booksRouter = require("./src/routes/booksRoutes");

const app = express();

app.use("/api/books", booksRouter);
app.use(morgan("dev"));

module.exports = app;
