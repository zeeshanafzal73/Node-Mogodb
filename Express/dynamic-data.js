const express = require("express");
const hbs = require("hbs");
const path = require("path");
const app = express();

//used for getting data from form of post method
const bodyParser = require("body-parser");
const encoder = bodyParser.urlencoded();

app.set("view engine", "hbs");

// Set the path for partials
hbs.registerPartials(path.join(__dirname, "views"));

app.get("/profile", (req, res) => {
  const name = "Zeeshan Afzal";
  const data = {
    age: 27,
    phone: 3064347137,
    gender: "Male",
    email: "zeeshanaffzal@gmail.com",
    view: "Working",
    skills: ["Html", "css", "javascript", "React Js", "Node js"],
  };
  res.render("profile", { name: name, data: data });
});

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.post("/login", encoder, (req, res) => {
  console.warn(req.body)
  res.render("login");
});

app.get("*", (req, res) => {
  res.render("error");
});

app.listen(5000, () => {
  console.log("Server is running on port 5000...");
});


