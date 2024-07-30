const express = require("express");
const router = express.Router();
const authenticate = require("../middleware/auth.middleware");
const { createBook, searchBook, getFavouriteBooks, addToFavourite } = require("../controller/book.controller");

router.get("/search", searchBook);
router.post("/", createBook);
router.get("/getFavouriteBooks", authenticate, getFavouriteBooks);
router.post("/addToFavourite", authenticate, addToFavourite);

module.exports = router;