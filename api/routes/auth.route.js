// routes/profile.routes.js
const express = require("express");
const router = express.Router();
const profileController = require("../controllers/auth.controller");

router.get("/get-profile", profileController.getProfile);

module.exports = router;
