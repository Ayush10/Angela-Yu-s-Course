const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/contact", function (req, res) {
  res.send("Contact me at: ayush@gmail.com");
});

app.get("/about", function (req, res) {
  res.send(
    "Ayush Ojha owns this website. Ayush Ojha is learning to code in Node JS."
  );
});

app.get("/hobbies", function (req, res) {
  res.send("<ul><li>Cricket</li><li>Mobile Games</li><li>Animes</li>");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
