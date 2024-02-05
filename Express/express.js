const express = require("express");
const app = express();

//middleware
const midleWare = (req, res, next) => {
  console.log(`Currunt Url is : ${req.url}`);
  next();
};

//using middleware
app.use(midleWare);

//express methods for static files
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/html/home.html");
});

app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/html/about.html");
});

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/html/error.html");
});

app.listen(5000, () => {
  console.log("server is running...");
});
