const express = require("express");
const router = express.Router();
const Membership = require("../models/Membership");

// Fetch all membership plans
router.get("/", async (req, res) => {
  try {
    const plans = await Membership.find();
    res.json(plans);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
