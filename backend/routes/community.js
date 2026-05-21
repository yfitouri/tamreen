const express = require("express");
const pool = require("../db");
const { protect } = require("../middleware/authMiddleware");
const jwt = require("jsonwebtoken");

const router = express.Router();

// GET ALL COMMUNITY POSTS
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

    const [posts] = await pool.query(
      `
      SELECT 
        cp.id,
        cp.user_id,
        cp.full_name,
        cp.city,
        cp.sport,
        cp.title,
        cp.description,
        cp.event_time,
        cp.needed_people,
        cp.whatsapp,
        cp.status,
        cp.created_at,
        COUNT(ci.id) AS interested_count,
        MAX(CASE WHEN ci.user_id = ? THEN 1 ELSE 0 END) AS is_interested
      FROM community_posts cp
      LEFT JOIN community_interests ci ON cp.id = ci.post_id
      WHERE cp.status = 'active'
      GROUP BY cp.id
      ORDER BY cp.created_at DESC
      `,
      [currentUserId || 0]
    );

    res.json({ posts });
  } catch (error) {
    console.error("Get community posts error:", error);
    res.status(500).json({ message: "Server error getting community posts" });
  }
});
// CREATE COMMUNITY POST - LOGGED IN USER ONLY
router.post("/", protect, async (req, res) => {
    try {
        const {
            sport,
            title,
            description,
            event_time,
            needed_people,
            whatsapp,
        } = req.body;

        if (!sport || !title) {
            return res.status(400).json({
                message: "Sport and title are required",
            });
        }

        const [users] = await pool.query(
            `
      SELECT id, full_name, city, phone
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

        const user = users[0];

        const [result] = await pool.query(
            `
      INSERT INTO community_posts
      (user_id, full_name, city, sport, title, description, event_time, needed_people, whatsapp)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
      `,
            [
                user.id,
                user.full_name,
                user.city || null,
                sport,
                title,
                description || null,
                event_time || null,
                Number(needed_people) || 0,
                whatsapp || user.phone || null,
            ]
        );

        res.status(201).json({
            message: "Community post created successfully",
            post: {
                id: result.insertId,
                user_id: user.id,
                full_name: user.full_name,
                city: user.city,
                sport,
                title,
                description,
                event_time,
                needed_people: Number(needed_people) || 0,
                whatsapp: whatsapp || user.phone || null,
                status: "active",
            },
        });
    } catch (error) {
        console.error("Create community post error:", error);
        res.status(500).json({ message: "Server error creating community post" });
    }
});

// TOGGLE INTEREST IN A COMMUNITY POST
router.post("/:id/interest", protect, async (req, res) => {
  try {
    const postId = req.params.id;

    const [posts] = await pool.query(
      "SELECT id FROM community_posts WHERE id = ? AND status = 'active'",
      [postId]
    );

    if (posts.length === 0) {
      return res.status(404).json({ message: "Post not found" });
    }

    const [existingInterest] = await pool.query(
      "SELECT id FROM community_interests WHERE post_id = ? AND user_id = ?",
      [postId, req.user.id]
    );

    if (existingInterest.length > 0) {
      await pool.query(
        "DELETE FROM community_interests WHERE post_id = ? AND user_id = ?",
        [postId, req.user.id]
      );

      return res.json({
        message: "Interest removed",
        interested: false,
      });
    }

    const [users] = await pool.query(
      "SELECT id, full_name FROM users WHERE id = ?",
      [req.user.id]
    );

    if (users.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    const user = users[0];

    await pool.query(
      `
      INSERT INTO community_interests
      (post_id, user_id, full_name)
      VALUES (?, ?, ?)
      `,
      [postId, user.id, user.full_name]
    );

    res.json({
      message: "Interest saved",
      interested: true,
    });
  } catch (error) {
    console.error("Interest toggle error:", error);
    res.status(500).json({ message: "Server error toggling interest" });
  }
});

// GET COMMENTS FOR ONE POST
router.get("/:id/comments", async (req, res) => {
  try {
    const postId = req.params.id;

    const [comments] = await pool.query(
      `
      SELECT 
        id,
        post_id,
        user_id,
        full_name,
        comment,
        created_at
      FROM community_comments
      WHERE post_id = ?
      ORDER BY created_at ASC
      `,
      [postId]
    );

    res.json({ comments });
  } catch (error) {
    console.error("Get comments error:", error);
    res.status(500).json({ message: "Server error getting comments" });
  }
});

// ADD COMMENT TO ONE POST
router.post("/:id/comments", protect, async (req, res) => {
  try {
    const postId = req.params.id;
    const { comment } = req.body;

    if (!comment || !comment.trim()) {
      return res.status(400).json({ message: "Comment is required" });
    }

    const [posts] = await pool.query(
      "SELECT id FROM community_posts WHERE id = ? AND status = 'active'",
      [postId]
    );

    if (posts.length === 0) {
      return res.status(404).json({ message: "Post not found" });
    }

    const [users] = await pool.query(
      "SELECT id, full_name FROM users WHERE id = ?",
      [req.user.id]
    );

    if (users.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    const user = users[0];

    const [result] = await pool.query(
      `
      INSERT INTO community_comments
      (post_id, user_id, full_name, comment)
      VALUES (?, ?, ?, ?)
      `,
      [postId, user.id, user.full_name, comment.trim()]
    );

    res.status(201).json({
      message: "Comment added",
      comment: {
        id: result.insertId,
        post_id: Number(postId),
        user_id: user.id,
        full_name: user.full_name,
        comment: comment.trim(),
      },
    });
  } catch (error) {
    console.error("Add comment error:", error);
    res.status(500).json({ message: "Server error adding comment" });
  }
});

// GET INTERESTED PEOPLE FOR ONE POST
router.get("/:id/interests", async (req, res) => {
  try {
    const postId = req.params.id;

    const [people] = await pool.query(
      `
      SELECT 
        ci.id,
        ci.post_id,
        ci.user_id,
        ci.full_name,
        ci.created_at
      FROM community_interests ci
      WHERE ci.post_id = ?
      ORDER BY ci.created_at DESC
      `,
      [postId]
    );

    res.json({ people });
  } catch (error) {
    console.error("Get interested people error:", error);
    res.status(500).json({ message: "Server error getting interested people" });
  }
});
module.exports = router;