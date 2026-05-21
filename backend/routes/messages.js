const express = require("express");
const pool = require("../db");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

function orderUserIds(userA, userB) {
  const first = Math.min(Number(userA), Number(userB));
  const second = Math.max(Number(userA), Number(userB));
  return [first, second];
}

// START OR OPEN CONVERSATION
router.post("/start", protect, async (req, res) => {
  try {
    const { receiver_id } = req.body;

    if (!receiver_id) {
      return res.status(400).json({ message: "Receiver is required" });
    }

    if (Number(receiver_id) === Number(req.user.id)) {
      return res.status(400).json({ message: "You cannot message yourself" });
    }

    const [receiverRows] = await pool.query(
      "SELECT id, full_name FROM users WHERE id = ?",
      [receiver_id]
    );

    if (receiverRows.length === 0) {
      return res.status(404).json({ message: "Receiver not found" });
    }

    const [userOneId, userTwoId] = orderUserIds(req.user.id, receiver_id);

    await pool.query(
      `
      INSERT IGNORE INTO conversations
      (user_one_id, user_two_id)
      VALUES (?, ?)
      `,
      [userOneId, userTwoId]
    );

    const [conversationRows] = await pool.query(
      `
      SELECT id, user_one_id, user_two_id, created_at
      FROM conversations
      WHERE user_one_id = ? AND user_two_id = ?
      `,
      [userOneId, userTwoId]
    );

    res.json({
      message: "Conversation ready",
      conversation: conversationRows[0],
    });
  } catch (error) {
    console.error("Start conversation error:", error);
    res.status(500).json({ message: "Server error starting conversation" });
  }
});

// GET MY CONVERSATIONS
router.get("/", protect, async (req, res) => {
  try {
    const userId = req.user.id;

    const [conversations] = await pool.query(
      `
      SELECT 
        c.id,
        c.user_one_id,
        c.user_two_id,
        c.created_at,
        CASE 
          WHEN c.user_one_id = ? THEN u2.full_name
          ELSE u1.full_name
        END AS other_user_name,
        CASE 
          WHEN c.user_one_id = ? THEN u2.id
          ELSE u1.id
        END AS other_user_id,
        (
          SELECT m.message
          FROM messages m
          WHERE m.conversation_id = c.id
          ORDER BY m.created_at DESC
          LIMIT 1
        ) AS last_message,
        (
          SELECT m.created_at
          FROM messages m
          WHERE m.conversation_id = c.id
          ORDER BY m.created_at DESC
          LIMIT 1
        ) AS last_message_at
      FROM conversations c
      JOIN users u1 ON c.user_one_id = u1.id
      JOIN users u2 ON c.user_two_id = u2.id
      WHERE c.user_one_id = ? OR c.user_two_id = ?
      ORDER BY COALESCE(last_message_at, c.created_at) DESC
      `,
      [userId, userId, userId, userId]
    );

    res.json({ conversations });
  } catch (error) {
    console.error("Get conversations error:", error);
    res.status(500).json({ message: "Server error getting conversations" });
  }
});

// GET MESSAGES IN ONE CONVERSATION
router.get("/:id", protect, async (req, res) => {
  try {
    const conversationId = req.params.id;
    const userId = req.user.id;

    const [conversationRows] = await pool.query(
      `
      SELECT id, user_one_id, user_two_id
      FROM conversations
      WHERE id = ? AND (user_one_id = ? OR user_two_id = ?)
      `,
      [conversationId, userId, userId]
    );

    if (conversationRows.length === 0) {
      return res.status(404).json({ message: "Conversation not found" });
    }

    const [messages] = await pool.query(
      `
      SELECT 
        m.id,
        m.conversation_id,
        m.sender_id,
        u.full_name AS sender_name,
        m.message,
        m.is_read,
        m.created_at
      FROM messages m
      JOIN users u ON m.sender_id = u.id
      WHERE m.conversation_id = ?
      ORDER BY m.created_at ASC
      `,
      [conversationId]
    );

    res.json({
      conversation: conversationRows[0],
      messages,
    });
  } catch (error) {
    console.error("Get messages error:", error);
    res.status(500).json({ message: "Server error getting messages" });
  }
});

// SEND MESSAGE
router.post("/:id", protect, async (req, res) => {
  try {
    const conversationId = req.params.id;
    const userId = req.user.id;
    const { message } = req.body;

    if (!message || !message.trim()) {
      return res.status(400).json({ message: "Message is required" });
    }

    const [conversationRows] = await pool.query(
      `
      SELECT id
      FROM conversations
      WHERE id = ? AND (user_one_id = ? OR user_two_id = ?)
      `,
      [conversationId, userId, userId]
    );

    if (conversationRows.length === 0) {
      return res.status(404).json({ message: "Conversation not found" });
    }

    const [result] = await pool.query(
      `
      INSERT INTO messages
      (conversation_id, sender_id, message)
      VALUES (?, ?, ?)
      `,
      [conversationId, userId, message.trim()]
    );

    res.status(201).json({
      message: "Message sent",
      chat_message: {
        id: result.insertId,
        conversation_id: Number(conversationId),
        sender_id: userId,
        message: message.trim(),
      },
    });
  } catch (error) {
    console.error("Send message error:", error);
    res.status(500).json({ message: "Server error sending message" });
  }
});

module.exports = router;