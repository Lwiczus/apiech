const express = require("express");
const router = express.Router();
const { quote } = require("../controllers/mail");

router.route("/message").post(quote);

module.exports = router;