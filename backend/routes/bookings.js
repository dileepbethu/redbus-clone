import express from "express";
import Booking from "../models/booking.js";

const router = express.Router();

// POST /api/bookings
router.post("/", async (req, res) => {
  try {
    const booking = new Booking(req.body);
    await booking.save();
    res.status(201).json({ message: "Booking saved successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Failed to save booking" });
  }
});

export default router;

