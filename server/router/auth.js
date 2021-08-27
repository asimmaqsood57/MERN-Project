const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();

const bcrypt = require("bcryptjs");
require("../db/conn");

const User = require("../models/userSchema");
router.get("/", (req, res) => {
  res.send("Hello from the server router");
});

//using promises

// router.post("/register",  (req, res) => {
//   const { name, email, phone, work, password, cpassword } = req.body;

//   if (!name || !email || !phone || !work || !password || !cpassword) {
//     return res.status(420).json({ error: "please fill it again" });
//   }

//   User.findOne({ email: email })
//     .then((userExist) => {
//       if (userExist) {
//         return res.status(420).json({ error: "User already exits" });
//       }
//     })
//     .catch((err) => {
//       res.send("there is an error in validation", err);
//     });

//   const user = new User({
//     name: name,
//     email: email,
//     phone: phone,
//     work: work,
//     password: password,
//     cpassword: password,
//   });

//   user
//     .save()
//     .then(() => {
//       res.status(201).send("data is inserted");
//     })
//     .catch((err) => {
//       res.status(500).send("there is and error");
//       console.log(err);
//     });
// });

//using async await
router.post("/signup", async (req, res) => {
  const { name, email, phone, work, password, cpassword } = req.body;

  if (!name || !email || !phone || !work || !password || !cpassword) {
    return res.status(420).json({ error: "please fill it again" });
  }

  try {
    const userExist = await User.findOne({ email: email });

    if (userExist) {
      return res.status(420).json({ error: "User already exits" });
    } else if (password != cpassword) {
      return res.status(420).json({ error: "password don't match" });
    } else {
      const user = new User({
        name: name,
        email: email,
        phone: phone,
        work: work,
        password: password,
        cpassword: password,
      });

      const userRegister = await user.save();

      if (userRegister) {
        res.status(201).send("data is inserted");
      }
    }
  } catch (error) {
    res.status(500).send("there is and error");
    console.log(error);
  }
});

// login route

router.post("/login", async (req, res) => {
  console.log(req.body);

  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "please fill the data again" });
    }

    const userLogin = await User.findOne({ email: email });

    console.log(userLogin);

    const isMatch = await bcrypt.compare(password, userLogin.password);

    const token = await userLogin.generateAuthToken();

    console.log(token);

    res.cookie("jwtoken", token, {
      expires: new Date(Date.now() + 25892000000),

      httpOnly: true,
    });

    if (!isMatch) {
      res.json({ message: "Invalid credentials" });
    } else {
      res.json({ message: "signed in successfully" });
    }
  } catch (error) {}
});

module.exports = router;
