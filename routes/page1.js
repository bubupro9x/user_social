const express = require('express');
const router = express.Router();

// Get Articles Page
router.get('/', function (req, res) {
  res.status(201).send({ message: "hello" })
});

module.exports = router;