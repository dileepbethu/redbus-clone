// server.js (backend/server.js)
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import bookingRoutes from "./routes/bookings.js";
import authRoutes from "./routes/auth.js"; // ✅ Make sure auth.js uses `export default`

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// DB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// API routes
app.use("/api/bookings", bookingRoutes);
app.use("/api/auth", authRoutes);

// Start server
app.listen(process.env.PORT || 5001, () => {
  console.log("Server is running...");
});
