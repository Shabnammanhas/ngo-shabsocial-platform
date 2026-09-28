
const express = require("express");

const protect = require("../middleware/authMiddleware");

const router = express.Router();

// Protected profile test route
router.get("/profile", protect, (req, res) => {
  res.json({
    success: true,
    message: "You accessed a protected route",
    userId: req.user.userId,
  });
});

module.exports = router;
