const express = require("express");
const app = express();
const { User } = require("./userSchema");

const mongoose = require("mongoose");

// Авто считывание тел запросов в JSON
app.use(express.json());

const mongoUri =
  "mongodb+srv://admin:admin@cluster0.gvrgdak.mongodb.net/users_db?retryWrites=true&w=majority";

mongoose.connect(mongoUri);

app.get("/", async (req, res) => {
  const users = await User.find();
  res.status(200).json(users);
});

app.post("/", async (req, res) => {
  const userData = req.body;

  console.log(userData);

  const user = await User.create(userData);

  res.status(201).json(user);
});

app.patch("/:userId", async (req, res) => {
  const userId = req.params.userId;

  const userData = req.body;

  const user = await User.findByIdAndUpdate(userId, userData, { new: true });

  res.status(200).json(user);
});

app.listen(5000, () => console.log("Port 5000 is running"));
