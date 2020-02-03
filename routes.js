const connection = require("./connection.js")
const express = require("express");
const router = express();

router.post("/addclient", connection.add_client);

module.exports = router;