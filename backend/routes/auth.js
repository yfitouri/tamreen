const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const pool = require("../db");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

function createToken(user) {
  return jwt.sign(
    {
      id: user.id,
      email: user.email,
      role: user.role,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "7d",
    }
  );
}

// REGISTER
router.post("/register", async (req, res) => {
  try {
    const {
      full_name,
      email,
      phone,
      city,
      password,
      role,
    } = req.body;

    if (!full_name || !email || !password) {
      return res.status(400).json({
        message: "Full name, email and password are required",
      });
    }

    const allowedRoles = [
      "user",
      "gym_owner",
      "trainer",
      "food_business",
      "health_professional",
    ];

    const safeRole = allowedRoles.includes(role) ? role : "user";

    const [existingUsers] = await pool.query(
      "SELECT id FROM users WHERE email = ?",
      [email]
    );

    if (existingUsers.length > 0) {
      return res.status(400).json({
        message: "Email already exists",
      });
    }

    const passwordHash = await bcrypt.hash(password, 10);

    const [result] = await pool.query(
      `
      INSERT INTO users
      (full_name, email, phone, city, password_hash, role)
      VALUES (?, ?, ?, ?, ?, ?)
      `,
      [full_name, email, phone || null, city || null, passwordHash, safeRole]
    );

    const user = {
      id: result.insertId,
      full_name,
      email,
      phone,
      city,
      role: safeRole,
    };

    const token = createToken(user);

    res.status(201).json({
      message: "User registered successfully",
      token,
      user,
    });
  } catch (error) {
    console.error("Register error:", error);
    res.status(500).json({
      message: "Server error during register",
    });
  }
});

// LOGIN
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password are required",
      });
    }

    const [users] = await pool.query(
      "SELECT * FROM users WHERE email = ?",
      [email]
    );

    if (users.length === 0) {
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }

    const user = users[0];

    const passwordMatch = await bcrypt.compare(
      password,
      user.password_hash
    );

    if (!passwordMatch) {
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }

    const token = createToken(user);

    res.json({
      message: "Login successful",
      token,
      user: {
        id: user.id,
        full_name: user.full_name,
        email: user.email,
        phone: user.phone,
        city: user.city,
        role: user.role,
        is_verified: user.is_verified,
      },
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({
      message: "Server error during login",
    });
  }
});

// GET CURRENT USER
router.get("/me", protect, async (req, res) => {
  try {
    const [users] = await pool.query(
      `
      SELECT id, full_name, email, phone, city, role, is_verified, created_at
      FROM users
      WHERE id = ?
      `,
      [req.user.id]
    );

    if (users.length === 0) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    res.json({
      user: users[0],
    });
  } catch (error) {
    console.error("Me error:", error);
    res.status(500).json({
      message: "Server error",
    });
  }
});

module.exports = router;