const express = require("express");
const app = express();
const port = 3000;

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  //   res.sendFile(__dirname + "/index.html");
  res.sendFile(__dirname + "/bmicalculator.html");
});

app.post("/", function (req, res) {
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);

  var sum = num1 + num2;

  res.send("The result of the calculation is: " + sum);
});

app.post("/bmicalculator", function (req, res) {
  var weight = parseFloat(req.body.weight);
  var height = parseFloat(req.body.height);

  var result = weight / height ** 2;

  res.send("The result of the BMI calculation is: " + result);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
