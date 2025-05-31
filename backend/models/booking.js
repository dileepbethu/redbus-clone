const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  user: {
    type: String,
    required: true,
  },
  busId: String,
  seats: [String],
  passengers: [
    {
      seat: String,
      name: String,
      age: Number,
      gender: String,
    },
  ],
  date: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Booking = mongoose.model("Booking", bookingSchema);
module.exports = Booking;
