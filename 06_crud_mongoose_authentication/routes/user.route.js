const express = require("express");
const router = express.Router();
const { registerUser, loginUser } = require("../controller/user.controller");

router.post("/", registerUser);
router.post("/", loginUser);

module.exports = router;