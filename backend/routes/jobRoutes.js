const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");
const {
  createJob,
  getJobs,
  getSingleJob,
  updateJob,
  deleteJob,
} = require("../controllers/jobController");

router.post("/", authMiddleware, createJob);
router.get("/", authMiddleware, getJobs);
router.get("/:id", authMiddleware, getSingleJob);
router.put("/:id", authMiddleware, updateJob);
router.delete("/:id", authMiddleware, deleteJob);

module.exports = router;