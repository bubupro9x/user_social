'use strict';
const express = require('express');
const path = require('path');
const serverless = require('serverless-http');
const app = express();
const bodyParser = require('body-parser');
const router = express.Router();

//superbase

const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('db.hbhrnaczdeiwuurxlgqx.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhiaHJuYWN6ZGVpd3V1cnhsZ3F4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzI0Nzc0MjcsImV4cCI6MTk4ODA1MzQyN30.BvjLI7juNfVG-B0i72Bs-p5kalWSYjGOU94DjItMWzo');


// Link to views folder.
let views = path.join(__dirname, '../');

// Home route.
router.get('/', (req, res) => {
  res.status(200).send({ message: "hello" })
  // res.sendFile('index.html', { root: views });
});

// Other routes.
// router.get('/page1', function (req, res) {
//   res.sendFile('page1.html', { root: views });
// });
// router.get('/page2', function (req, res) {
//   res.sendFile('page2.html', { root: views });
// });
// router.get('/page3', function (req, res) {
//   res.sendFile('page3.html', { root: views });
// });
// router.get('/page4', function (req, res) {
//   res.sendFile('page4.html', { root: views });
// });


app.use(bodyParser.json());
// app.use('/.netlify/functions/server', router);  // path must route to lambda (express/server.js)

app.get('/', (req, res) => {
  res.status(200).send({ message: "hello" })
  // res.sendFile('index.html', { root: views });
});
module.exports = app;
module.exports.handler = serverless(app);
