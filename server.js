const express = require("express");
const app = express();


const port = process.env.PORT || 5004;
app.listen(port, () => {
    console.log("Server listening at port " + port);
})