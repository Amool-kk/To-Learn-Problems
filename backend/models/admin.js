const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const Schema = mongoose.Schema;
SALT_WORK_FACTOR = 10;

const AdminSchema = new Schema({
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
});

AdminSchema.pre("save", function (next) {
  // arrow function changes scope of this (don't use it !)
  let user = this;

  if (!user.isModified("password")) return next();
  // If user password was only changed and no new user was created

  bcrypt.genSalt(SALT_WORK_FACTOR, (err, salt) => {
    if (err) return next(err);

    bcrypt.hash(user.password, salt, (err, hash) => {
      if (err) return next(err);

      user.password = hash;
      next();
    });
  });
});

AdminSchema.methods.comparePassword = function (password, cb) {
  bcrypt.compare(password, this.password, (err, isMatch) => {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

const Admin = mongoose.model("admins", AdminSchema);
module.exports = Admin;
