// EXPRESS DATA
const express = require("express");
const app = express();
const port = 3000;

// DATA
const posts = require("./data");

// ROUTES
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.send("Server del mio blog")
});

app.get("/bacheca", (req, res) => {
    res.json({posts, tot: posts.length})
});

// SERVER LISTENING 
app.listen(port, () => {
    console.log("Server is listening");
});