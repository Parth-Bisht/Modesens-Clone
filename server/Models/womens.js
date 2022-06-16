const { Schema, model } = require("mongoose");

const WomenSchema = new Schema({
  image_url: { type: String, required: true },
  brand: { type: String, required: true },
  title: { type: String },
  price: { type: Number },
  offprice: { type: Number },
  createdAt: Date,
  updatedAt: Date,
});

const Women = model("women", WomenSchema);
module.exports = Women;
