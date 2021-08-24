const express = require("express");

const mongoose = require("mongoose");

const dotenv = require("dotenv");

const PORT = process.env.PORT;

const app = express();

dotenv.config({ path: "./config.env" });

require("./db/conn");
const user = require("./models/userSchema");
//Midlle wares

const middleWare = (req, res, next) => {
  console.log("My middle ware");
  next();
};

app.get("/", (req, res) => {
  res.send("Hello from the server");
});
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

app.listen(PORT, () => {
  console.log("Server is running at port 3000");
});
