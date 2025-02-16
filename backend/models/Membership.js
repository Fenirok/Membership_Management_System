const mongoose = require("mongoose");

const membershipSchema = new mongoose.Schema({
  name: String,
  price: Number,
  benefits: [String],
  duration: Number, // in months
});

const Membership = mongoose.model("Membership", membershipSchema);
module.exports = Membership;
