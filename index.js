const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config;

const mongoString = process.env.DATABASE_URL;

const app = express();
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/cookchef");
const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});

const PORT = 3333;

app.listen(PORT, () => {
  console.log(`SErver running on port ${PORT}`);
});
