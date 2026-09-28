const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
//console.log("Mongo URI exists:", !!process.env.MONGO_URI);
const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "NGO Social Platform API is running",
  });
});
app.get("/test-auth", (req, res) => {
  res.json({
    success: true,
    message: "Auth route area is test working",
  });
});
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server test running on port ${PORT}`);
});