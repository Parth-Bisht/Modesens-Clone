const { Schema, model } = require("mongoose");

const MenSchema = new Schema({
  brand: { type: String, required: true },
  image_url: { type: String, required: true },
  title: { type: String },
  price: { type: Number },
  offprice: { type: Number },
  createdAt: Date,
  updatedAt: Date,
});

const Men = model("men", MenSchema);
module.exports = Men;
