const express = require("express");
const router = express.Router();
const authenticate = require("../middleware/auth.middleware");
const { createBook, getFavouriteBooks, addToFavourite, deleteBook, updateBook, getBooks, getParticularBook } = require("../controller/book.controller");

router.get("/", authenticate, getBooks);
router.get("/:id", getParticularBook);
router.get("/getFavouriteBooks", authenticate, getFavouriteBooks);
router.post("/", authenticate, createBook);
router.post("/addToFavourite", authenticate, addToFavourite);
router.put("/:id", authenticate, updateBook);
router.delete("/:id", authenticate, deleteBook);


module.exports = router;