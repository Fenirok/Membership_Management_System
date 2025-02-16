const express = require("express");
const router = express.Router();
const Member = require("../models/Member");

// ➤ Create Member (POST)
router.post("/", async (req, res) => {
  try {
    const { name, phone, nextBill, status, img } = req.body;

    if (!name || !phone || !nextBill || !status) {
      return res.status(400).json({ message: "All fields except img are required." });
    }

    const newMember = new Member({ name, phone, nextBill, status, img });
    const savedMember = await newMember.save();

    res.status(201).json(savedMember);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// ➤ Get All Members (GET) with Pagination & Search
router.get("/", async (req, res) => {
  try {
    let { page = 1, limit = 10, search = "" } = req.query;
    page = parseInt(page);
    limit = parseInt(limit);

    const query = {
      $or: [
        { name: { $regex: search, $options: "i" } },
        { phone: { $regex: search, $options: "i" } },
      ],
    };

    const total = await Member.countDocuments(query);
    const members = await Member.find(query)
      .limit(limit)
      .skip((page - 1) * limit);

    res.json({ total, page, limit, members });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ➤ Get Single Member by ID (GET)
router.get("/:id", async (req, res) => {
  try {
    const member = await Member.findById(req.params.id);
    if (!member) return res.status(404).json({ message: "Member not found" });
    res.json(member);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ➤ Update Member (PUT)
router.put("/:id", async (req, res) => {
  try {
    const updatedMember = await Member.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedMember) return res.status(404).json({ message: "Member not found" });

    res.json(updatedMember);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// ➤ Delete Member (DELETE)
router.delete("/:id", async (req, res) => {
  try {
    const deletedMember = await Member.findByIdAndDelete(req.params.id);
    if (!deletedMember) return res.status(404).json({ message: "Member not found" });

    res.json({ message: "Member deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
