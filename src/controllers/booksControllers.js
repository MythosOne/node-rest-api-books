const getAllBooks = (req, res, next) => {
  // Database query to fetch all books
  // ...
  console.log("List books...");
  res.send("List books...");
};

const getOneBooks = (req, res, next) => {
  // Database query to fetch book by ID
  //...
  console.log("Get book by ID...");
  res.send("Get book by ID...");
};

const createBook = (req, res, next) => {
  // Database query to create a new book
  //...
  console.log("Create book...");
  res.send("Create book...");
};

const updateBook = (req, res, next) => {
  // Database query to update book by ID
  //...
  console.log("Update book by ID...");
  res.send("Update book by ID...");
};

const deleteBook = (req, res, next) => {
  // Database query to delete book by ID
  //...
  console.log("Delete book by ID...");
  res.send("Delete book by ID...");
};

module.exports = {
  getAllBooks,
  getOneBooks,
  createBook,
  updateBook,
  deleteBook,
};
