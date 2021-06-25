const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  avatar: String,
  slug: {
    unique: true,
    type: String,
  },
});

module.exports = mongoose.model("users", schema);
