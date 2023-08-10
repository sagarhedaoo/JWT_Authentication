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

userSchema.post("save", function (doc, next) {
  console.log("new user was created and saved", doc);
  next();
});

//fire a function before saved to db
userSchema.pre("save", function (next) {
  console.log("USer about to be created and saved", this);
  next();
});

const User = mongoose.model("user", userSchema);

module.exports = User;
