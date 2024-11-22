const mongoose = require("mongoose");
const { Schema } = mongoose;

const DataSchema = new Schema({
  firstname: { type: String },
  lastname: { type: String },
  telephone: { type: String },
  age: { type: Number },
  country: { type: String },
  gender: { type: String, enum: ["male", "female"] },
  email: { type: String, required: true },
  userid: { type: mongoose.Types.ObjectId, ref: "User" },
});

const data = mongoose.model("data", DataSchema);
module.exports = data;
