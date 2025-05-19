const express = require("express");
const serverless = require("serverless-http");
const authRoute = require("./routes/auth.route");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello from Express on Vercel!");
});

app.get("/get-profile", (_, res) => {
  res.json({
    message: "test baru",
    data: {
      email: "email",
      password: "password",
    },
  });
});

app.get("/about", (req, res) => {
  res.send("This is the About page.");
});

app.use("/auth", authRoute);

module.exports = app;
module.exports.handler = serverless(app);
