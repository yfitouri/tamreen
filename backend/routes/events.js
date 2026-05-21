const express = require("express");
const pool = require("../db");
const { protect } = require("../middleware/authMiddleware");
const jwt = require("jsonwebtoken");

const router = express.Router();

// GET ALL EVENTS
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

    const [events] = await pool.query(
      `
      SELECT 
        e.id,
        e.title,
        e.city,
        e.location,
        e.sport,
        e.event_date,
        e.event_time,
        e.description,
        e.organiser_name,
        e.whatsapp,
        e.max_people,
        e.status,
        e.created_at,
        COUNT(ej.id) AS joined_count,
        MAX(CASE WHEN ej.user_id = ? THEN 1 ELSE 0 END) AS is_joined
      FROM events e
      LEFT JOIN event_joins ej ON e.id = ej.event_id
      WHERE e.status = 'active'
      GROUP BY e.id
      ORDER BY e.created_at DESC
      `,
      [currentUserId || 0]
    );

    res.json({ events });
  } catch (error) {
    console.error("Get events error:", error);
    res.status(500).json({ message: "Server error getting events" });
  }
});

// GET ONE EVENT
router.get("/:id", async (req, res) => {
  try {
    const eventId = req.params.id;

    const [events] = await pool.query(
      `
      SELECT 
        id,
        title,
        city,
        location,
        sport,
        event_date,
        event_time,
        description,
        organiser_name,
        whatsapp,
        max_people,
        status,
        created_at
      FROM events
      WHERE id = ?
      `,
      [eventId]
    );

    if (events.length === 0) {
      return res.status(404).json({ message: "Event not found" });
    }

    res.json({ event: events[0] });
  } catch (error) {
    console.error("Get event error:", error);
    res.status(500).json({ message: "Server error getting event" });
  }
});

// CREATE EVENT - LOGGED IN USER ONLY FOR NOW
router.post("/", protect, async (req, res) => {
  try {
    const {
      title,
      city,
      location,
      sport,
      event_date,
      event_time,
      description,
      organiser_name,
      whatsapp,
      max_people,
    } = req.body;

    if (!title || !sport) {
      return res.status(400).json({
        message: "Title and sport are required",
      });
    }

    const [users] = await pool.query(
      "SELECT id, full_name, phone FROM users WHERE id = ?",
      [req.user.id]
    );

    if (users.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    const user = users[0];

    const [result] = await pool.query(
      `
      INSERT INTO events
      (title, city, location, sport, event_date, event_time, description, organiser_name, whatsapp, max_people)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `,
      [
        title,
        city || null,
        location || null,
        sport,
        event_date || null,
        event_time || null,
        description || null,
        organiser_name || user.full_name,
        whatsapp || user.phone || null,
        Number(max_people) || 0,
      ]
    );

    res.status(201).json({
      message: "Event created successfully",
      event: {
        id: result.insertId,
        title,
        city,
        location,
        sport,
        event_date,
        event_time,
        description,
        organiser_name: organiser_name || user.full_name,
        whatsapp: whatsapp || user.phone || null,
        max_people: Number(max_people) || 0,
        status: "active",
      },
    });
  } catch (error) {
    console.error("Create event error:", error);
    res.status(500).json({ message: "Server error creating event" });
  }
});

// UPDATE EVENT STATUS - SIMPLE CLOSE/CANCEL
router.patch("/:id/status", protect, async (req, res) => {
  try {
    const eventId = req.params.id;
    const { status } = req.body;

    const allowedStatuses = ["active", "closed", "cancelled"];

    if (!allowedStatuses.includes(status)) {
      return res.status(400).json({ message: "Invalid status" });
    }

    const [result] = await pool.query(
      "UPDATE events SET status = ? WHERE id = ?",
      [status, eventId]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Event not found" });
    }

    res.json({
      message: "Event status updated",
      status,
    });
  } catch (error) {
    console.error("Update event status error:", error);
    res.status(500).json({ message: "Server error updating event" });
  }
});

// TOGGLE JOIN EVENT
router.post("/:id/join", protect, async (req, res) => {
  try {
    const eventId = req.params.id;

    const [events] = await pool.query(
      "SELECT id FROM events WHERE id = ? AND status = 'active'",
      [eventId]
    );

    if (events.length === 0) {
      return res.status(404).json({ message: "Event not found" });
    }

    const [existingJoin] = await pool.query(
      "SELECT id FROM event_joins WHERE event_id = ? AND user_id = ?",
      [eventId, req.user.id]
    );

    if (existingJoin.length > 0) {
      await pool.query(
        "DELETE FROM event_joins WHERE event_id = ? AND user_id = ?",
        [eventId, req.user.id]
      );

      return res.json({
        message: "Left event",
        joined: false,
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
      INSERT INTO event_joins
      (event_id, user_id, full_name)
      VALUES (?, ?, ?)
      `,
      [eventId, user.id, user.full_name]
    );

    res.json({
      message: "Joined event",
      joined: true,
    });
  } catch (error) {
    console.error("Join event error:", error);
    res.status(500).json({ message: "Server error joining event" });
  }
});

// GET EVENT CHAT MESSAGES
router.get("/:id/chat", protect, async (req, res) => {
  try {
    const eventId = req.params.id;

    const [events] = await pool.query(
      "SELECT id FROM events WHERE id = ? AND status = 'active'",
      [eventId]
    );

    if (events.length === 0) {
      return res.status(404).json({ message: "Event not found" });
    }

    const [joined] = await pool.query(
      "SELECT id FROM event_joins WHERE event_id = ? AND user_id = ?",
      [eventId, req.user.id]
    );

    if (joined.length === 0) {
      return res.status(403).json({
        message: "Join this event first to view the chat",
      });
    }

    const [messages] = await pool.query(
      `
      SELECT 
        id,
        event_id,
        user_id,
        full_name,
        message,
        created_at
      FROM event_messages
      WHERE event_id = ?
      ORDER BY created_at ASC
      `,
      [eventId]
    );

    res.json({ messages });
  } catch (error) {
    console.error("Get event chat error:", error);
    res.status(500).json({ message: "Server error getting event chat" });
  }
});

// SEND EVENT CHAT MESSAGE
router.post("/:id/chat", protect, async (req, res) => {
  try {
    const eventId = req.params.id;
    const { message } = req.body;

    if (!message || !message.trim()) {
      return res.status(400).json({ message: "Message is required" });
    }

    const [events] = await pool.query(
      "SELECT id FROM events WHERE id = ? AND status = 'active'",
      [eventId]
    );

    if (events.length === 0) {
      return res.status(404).json({ message: "Event not found" });
    }

    const [joined] = await pool.query(
      "SELECT id FROM event_joins WHERE event_id = ? AND user_id = ?",
      [eventId, req.user.id]
    );

    if (joined.length === 0) {
      return res.status(403).json({
        message: "Join this event first to send messages",
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

    const [result] = await pool.query(
      `
      INSERT INTO event_messages
      (event_id, user_id, full_name, message)
      VALUES (?, ?, ?, ?)
      `,
      [eventId, user.id, user.full_name, message.trim()]
    );

    res.status(201).json({
      message: "Event message sent",
      event_message: {
        id: result.insertId,
        event_id: Number(eventId),
        user_id: user.id,
        full_name: user.full_name,
        message: message.trim(),
      },
    });
  } catch (error) {
    console.error("Send event chat error:", error);
    res.status(500).json({ message: "Server error sending event chat message" });
  }
});

module.exports = router;