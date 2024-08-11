const express = require("express");
const router = express.Router();
const { searchBook } = require("../controller/book.controller");

router.get("/", searchBook);

module.exports = router;