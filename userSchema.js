const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    userNumber: {
      unique: true,
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    age: Number,
    jobTitle: {
      type: String,
      required: true,
    },
    salary: Number,
    hobbies: [String],
    isPremium: Boolean,
  },
  {
    timestamps: true,
    collection: "users",
  }
);

const User = mongoose.model("User", userSchema);

module.exports = { User };
