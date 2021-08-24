const express = require("express");

const mongoose = require("mongoose");

const app = express();

//Midlle wares

const middleWare = () => {
  console.log("My middle ware");
  next();
};

middleWare();
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

app.listen(3000, () => {
  console.log("Server is running at port 3000");
});