const express = require("express");
const pool = require("../db");
const { protect } = require("../middleware/authMiddleware");
const jwt = require("jsonwebtoken");

const router = express.Router();

// GET ALL GYMS
router.get("/", async (req, res) => {
    try {
        let currentUserId = null;

        const authHeader = req.headers.authorization;

        if (authHeader && authHeader.startsWith("Bearer ")) {
            try {
                const token = authHeader.split(" ")[1];
                const decoded = jwt.verify(token, process.env.JWT_SECRET);
                currentUserId = decoded.id;
            } catch (error) {
                currentUserId = null;
            }
        }

        const [gyms] = await pool.query(
            `
      SELECT
        g.id,
        g.name,
        g.city,
        g.area,
        g.address,
        g.description,
        g.facilities,
        g.opening_hours,
        g.price_range,
        g.phone,
        g.whatsapp,
        g.instagram,
        g.image_url,
        g.rating,
        g.is_verified,
        g.status,
        g.created_at,
        COUNT(sg.id) AS saved_count,
        MAX(CASE WHEN sg.user_id = ? THEN 1 ELSE 0 END) AS is_saved
      FROM gyms g
      LEFT JOIN saved_gyms sg ON g.id = sg.gym_id
      WHERE g.status = 'active'
      GROUP BY g.id
      ORDER BY g.is_verified DESC, g.rating DESC, g.created_at DESC
      `,
            [currentUserId || 0]
        );

        res.json({ gyms });
    } catch (error) {
        console.error("Get gyms error:", error);
        res.status(500).json({ message: "Server error getting gyms" });
    }
});

// GET ONE GYM
router.get("/:id", async (req, res) => {
    try {
        const gymId = req.params.id;
        let currentUserId = null;

        const authHeader = req.headers.authorization;

        if (authHeader && authHeader.startsWith("Bearer ")) {
            try {
                const token = authHeader.split(" ")[1];
                const decoded = jwt.verify(token, process.env.JWT_SECRET);
                currentUserId = decoded.id;
            } catch (error) {
                currentUserId = null;
            }
        }

        const [gyms] = await pool.query(
            `
      SELECT
        g.id,
        g.name,
        g.city,
        g.area,
        g.address,
        g.description,
        g.facilities,
        g.opening_hours,
        g.price_range,
        g.phone,
        g.whatsapp,
        g.instagram,
        g.image_url,
        g.rating,
        g.is_verified,
        g.status,
        g.created_at,
        COUNT(sg.id) AS saved_count,
        MAX(CASE WHEN sg.user_id = ? THEN 1 ELSE 0 END) AS is_saved
      FROM gyms g
      LEFT JOIN saved_gyms sg ON g.id = sg.gym_id
      WHERE g.id = ? AND g.status = 'active'
      GROUP BY g.id
      `,
            [currentUserId || 0, gymId]
        );

        if (gyms.length === 0) {
            return res.status(404).json({ message: "Gym not found" });
        }

        res.json({ gym: gyms[0] });
    } catch (error) {
        console.error("Get gym error:", error);
        res.status(500).json({ message: "Server error getting gym" });
    }
});



// CREATE GYM - logged in user for now
router.post("/", protect, async (req, res) => {
    try {
        const {
            name,
            city,
            area,
            address,
            description,
            facilities,
            opening_hours,
            price_range,
            phone,
            whatsapp,
            instagram,
            image_url,
        } = req.body;

        if (!name) {
            return res.status(400).json({ message: "Gym name is required" });
        }

        const [result] = await pool.query(
            `
      INSERT INTO gyms
      (name, city, area, address, description, facilities, opening_hours, price_range, phone, whatsapp, instagram, image_url, rating, is_verified, status)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `,
            [
                name,
                city || null,
                area || null,
                address || null,
                description || null,
                facilities || null,
                opening_hours || null,
                price_range || null,
                phone || null,
                whatsapp || null,
                instagram || null,
                image_url || "/images/gym-power.jpg",
                0,
                false,
                "active",
            ]
        );

        res.status(201).json({
            message: "Gym created successfully",
            gym: {
                id: result.insertId,
                name,
                city,
                area,
                address,
                description,
                facilities,
                opening_hours,
                price_range,
                phone,
                whatsapp,
                instagram,
                image_url: image_url || "/images/gym-power.jpg",
                rating: 0,
                is_verified: false,
                status: "active",
            },
        });
    } catch (error) {
        console.error("Create gym error:", error);
        res.status(500).json({ message: "Server error creating gym" });
    }
});

// TOGGLE SAVE GYM
router.post("/:id/save", protect, async (req, res) => {
    try {
        const gymId = req.params.id;

        const [gyms] = await pool.query(
            "SELECT id FROM gyms WHERE id = ? AND status = 'active'",
            [gymId]
        );

        if (gyms.length === 0) {
            return res.status(404).json({ message: "Gym not found" });
        }

        const [existingSave] = await pool.query(
            "SELECT id FROM saved_gyms WHERE gym_id = ? AND user_id = ?",
            [gymId, req.user.id]
        );

        if (existingSave.length > 0) {
            await pool.query(
                "DELETE FROM saved_gyms WHERE gym_id = ? AND user_id = ?",
                [gymId, req.user.id]
            );

            return res.json({
                message: "Gym removed from saved",
                saved: false,
            });
        }

        await pool.query(
            `
      INSERT INTO saved_gyms
      (gym_id, user_id)
      VALUES (?, ?)
      `,
            [gymId, req.user.id]
        );

        res.json({
            message: "Gym saved",
            saved: true,
        });
    } catch (error) {
        console.error("Save gym error:", error);
        res.status(500).json({ message: "Server error saving gym" });
    }
});

module.exports = router;