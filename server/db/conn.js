const mongoose = require("mongoose");

const db = process.env.DATABASE;

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("database connection successful");
  })
  .catch((err) => {
    console.log("some thing went wrong", err);
  });
