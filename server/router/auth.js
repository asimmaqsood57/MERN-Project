const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello from the server router");
});

router.post("/register", (req, res) => {
  console.log(req.body);
  res.send("you posted something");
});

module.exports = router;
