// controllers/profile.controller.js
const profileService = require("../services/auth.service");

const getProfile = (req, res) => {
  const data = profileService.getProfile();
  res.json({
    message: "test baru",
    data,
  });
};

module.exports = {
  getProfile,
};
