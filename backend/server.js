const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

// Load environment variables
dotenv.config();

// Check if MONGO_URI is set
if (!process.env.MONGO_URI) {
  console.error("❌ MONGO_URI is missing in .env file");
  process.exit(1);
}

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB Atlas
connectDB();

// Load Routes (Ensure files exist before using them)
try {
  app.use("/api/members", require("./routes/memberRoutes"));
  app.use("/api/memberships", require("./routes/membershipRoutes"));
  app.use("/api/payments", require("./routes/paymentRoutes"));
} catch (error) {
  console.error("❌ Error loading routes:", error.message);
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
