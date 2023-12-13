const express = require("express");
const router = express.Router();
const Lawyer = require("../models/lawyerModel"); // Import your Lawyer model

// Create a new lawyer (Create operation)
router.post("/", async (req, res) => {
  try {
    const newLawyer = new Lawyer(req.body);
    const savedLawyer = await newLawyer.save();
    res.status(201).json(savedLawyer);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all lawyers (Read operation)
router.get("/", async (req, res) => {
  try {
    const lawyers = await Lawyer.find();
    res.status(200).json(lawyers);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get a specific lawyer by ID (Read operation)
router.get("/:id", async (req, res) => {
  try {
    const lawyer = await Lawyer.findById(req.params.id);
    if (!lawyer) {
      return res.status(404).json({ message: "Lawyer not found" });
    }
    res.status(200).json(lawyer);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Update a lawyer by ID (Update operation)
router.put("/:id", async (req, res) => {
  try {
    const updatedLawyer = await Lawyer.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true, // Return the updated lawyer
      }
    );
    if (!updatedLawyer) {
      return res.status(404).json({ message: "Lawyer not found" });
    }
    res.status(200).json(updatedLawyer);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete a lawyer by ID (Delete operation)
router.delete("/:id", async (req, res) => {
  try {
    const deletedLawyer = await Lawyer.findByIdAndRemove(req.params.id);
    if (!deletedLawyer) {
      return res.status(404).json({ message: "Lawyer not found" });
    }
    res.status(204).send(); // No content, successful deletion
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
