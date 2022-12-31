const express = require('express');
const router = express.Router();

// Get Articles Page
router.get('/', function (req, res) {
  res.render('page1');
});

router.get('/test', function (req, res) {
  res.status(200).send({ message: 'Success' })
});


module.exports = router;