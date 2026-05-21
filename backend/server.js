const express = require("express");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/auth");
const communityRoutes = require("./routes/community");
const messagesRoutes = require("./routes/messages");
const eventsRoutes = require("./routes/events");
const gymsRoutes = require("./routes/gyms");

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Tamreen backend is running",
  });
});

app.use("/api/auth", authRoutes);
app.use("/api/community", communityRoutes);
app.use("/api/messages", messagesRoutes);
app.use("/api/events", eventsRoutes);
app.use("/api/gyms", gymsRoutes);
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Tamreen backend running on http://localhost:${PORT}`);
});