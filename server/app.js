const express = require("express");

const mongoose = require("mongoose");

const dotenv = require("dotenv");

const PORT = process.env.PORT;

const app = express();

dotenv.config({ path: "./config.env" });

require("./db/conn");
const user = require("./models/userSchema");

app.use(express.json());
//Midlle wares

app.use(require("./router/auth"));

const middleWare = (req, res, next) => {
  console.log("My middle ware");
  next();
};

app.get("/about", middleWare, (req, res) => {
  res.send("Hello about from the server");
});
app.get("/contact", (req, res) => {
  res.send("Hello contact from the server");
});
app.get("/signin", (req, res) => {
  res.send("Hello signin from the server");
});
app.get("/signup", (req, res) => {
  res.send("Hello signup from the server");
});

app.listen(3001, () => {
  console.log("Server is running at port 3001");
});
