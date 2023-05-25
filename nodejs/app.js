const express = require("express");

const app = express();

const port = 3000;

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/home.html");
});

app.get("/about", (req, res) => {
    res.sendFile(__dirname + "/public/about.html");
});

app.get("/contact", (req, res) => {
    res.sendFile(__dirname + "/public/contact.html");
});

app.listen(port, (req, res) => {
    console.log(`listening on port ${port}`);
});
