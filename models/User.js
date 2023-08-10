const mongoose = require("mongoose");
const { isEmail } = require("validator");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Please Enter an email"],
    unique: true,
    lowercase: true,
    validate: [isEmail, "Please enter valid email"],
  },
  password: {
    type: String,
    required: [true, "Please Enter Password"],
    minlength: [6, "Minimum Password Length is 6 Characters"],
  },
});

const User = mongoose.model("user", userSchema);

module.exports = User;
