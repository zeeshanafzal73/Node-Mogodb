const express = require("express");

const app = express();
const route = express.Router();

const middleware = require("./middleware");

route.get("/", middleware, (req, res) => {
  res.send("Hello World");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

app.get("/contact", (req, res) => {
  res.send("Contact Page");
});

app.use("/", route);

app.listen(5000, () => {
  console.log("Server is running on port 5000...");
});
