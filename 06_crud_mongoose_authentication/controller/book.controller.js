const bookModel = require("../models/books.model");
const userModel = require("../models/users.model");

const createBook = async (req, res) => {
  try {
    const { title, author, genre, available } = req.body;
    const newBook = await bookModel.create({ title, author, genre, available });
    res.status(201).json({ success: true, message: "new book added", newBook });
  } catch (err) {
    res.status(401).json({ success: false, error: err.message });
  }
};

/**
 * route: book/search
 * target: to search for books by genre
 */
const searchBook = async (req, res) => {
  try {
    const genres = req.query.genre;
    const genresArray = genres.split(","); // Convert to an array
    const books = await bookModel.find({ genre: { $in: genresArray } });
    if (books.length === 0) {
      return res
        .status(200)
        .json({ success: true, message: "No books found for this genre" });
    }

    res.status(200).json({ success: true, books, totalBooks: books.length });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

/**
* route: book/getFavouriteBooks
* target: get detailed favourite book lists
*/
const getFavouriteBooks = async (req, res) => {
  try {
    // Populate the favoriteBooks field 
    const user = await userModel
      .findById(req.user.id)
      .populate("favoriteBooks");
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    res.status(200).json({ success: true, favoriteBooks: user.favoriteBooks });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};


/**
* route: book/addToFavourite
* target: add a book's id to user's favourite list
*/
const addToFavourite = async (req, res) => {
  // bookid is to be send as payload, capture it with req.body
  const { bookId } = req.body;

  try {
    // Check if the book exists
    const book = await bookModel.findById(bookId);
    if (!book) {
      return res
        .status(404)
        .json({ success: false, message: "Book not found" });
    }
    console.log(req.user.id);
    // Fetch the user from the database
    const user = await userModel.findById(req.user.id);
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    // Add the book to the user's favoriteBooks array
    user.favoriteBooks.push(bookId);
    await user.save();

    res.status(200).json({
      success: true,
      message: "Book added to favorites",
      favoriteBooks: req.user.favoriteBooks,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

module.exports = { createBook, searchBook, getFavouriteBooks, addToFavourite };
