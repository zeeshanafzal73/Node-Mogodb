const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  Job: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("user's", userSchema);
