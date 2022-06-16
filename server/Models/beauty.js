const { Schema, model } = require("mongoose");

const beautySchema = new Schema({
  image_url: { type: String, required: true },
  brand: { type: String, required: true },
  href: { type: String },
  title: { type: String },
  price: { type: Number },
  offprice: { type: Number },
});

const Beauty = model("beauty", beautySchema);
module.exports = Beauty;
