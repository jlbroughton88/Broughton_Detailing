const connection = require("./connection.js")
const express = require("express");
const router = express();

router.post("/addclient", connection.add_client);
router.get("/getclients", connection.get_clients);

module.exports = router;