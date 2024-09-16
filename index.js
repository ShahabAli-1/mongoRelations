const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const router = require("./routers/route.js");

const app = express();
const port = 3000;
app.use(express.json());
app.use(cors());

const connecttodb = async () => {
  //   try {
  await mongoose
    .connect(process.env.MONGOURL)
    .then(() => console.log("Connected to db."));
  //   //   } catch (error) {
  //   //     console.log("Error Connecting to db.");
  //   //   }
};
connecttodb();
app.use("/", router);
// app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
