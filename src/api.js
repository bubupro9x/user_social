const express = require("express");
const serverless = require("serverless-http");
const cors = require("cors");
const app = express();
const router = express.Router();

router.get("/", cors(), (req, res, next) => {
  res.json([
    {
      id: "1",
      name: "Julio",
      team: "Manchester",
      slugTeam: "manchester",
    },
    {
      id: "2",
      name: "Mark ",
      team: "Arsenal",
      slugTeam: "arsenal",
    },
  ]);
});

app.use("/.netlify/functions/api", router);

app.use("/.netlify/functions/api/:id", function (req, res, next) {
  res.json([
    {
      id: "1",
      name: "Julio",
      team: "Manchester",
      slugTeam: "manchester",
    },
    {
      id: "2",
      name: "Mark ",
      team: "Arsenal",
      slugTeam: "arsenal",
    },
  ]);
});

module.exports.handler = serverless(app);
