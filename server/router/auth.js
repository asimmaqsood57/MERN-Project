const express = require("express");

const router = express.Router();

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
router.post("/register", async (req, res) => {
  const { name, email, phone, work, password, cpassword } = req.body;

  if (!name || !email || !phone || !work || !password || !cpassword) {
    return res.status(420).json({ error: "please fill it again" });
  }

  try {
    const userExist = await User.findOne({ email: email });

    if (userExist) {
      return res.status(420).json({ error: "User already exits" });
    }

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
  } catch (error) {
    res.status(500).send("there is and error");
    console.log(error);
  }
});

module.exports = router;
