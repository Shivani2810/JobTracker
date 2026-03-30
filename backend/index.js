const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const authMiddleware = require("./middleware/authMiddleware");

const connectDB = require("./config/database");
const authRoutes = require("./routes/authRoutes");
const jobRoutes = require("./routes/jobRoutes");

dotenv.config();

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors());

connectDB();

app.get("/", (req, res) => {
  res.send("Server is running 🚀");
});

app.get("/test", (req, res) => {
  res.json({
    success: true,
    message: "Test route working",
  });
});

app.use("/api/auth", authRoutes);
app.use("/api/jobs", jobRoutes);

app.get("/api/protected", authMiddleware, (req, res) => {
  res.json({
    success: true,
    message: "Protected route accessed",
    user: req.user,
  });
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});