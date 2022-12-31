'use strict';
const express = require('express');
const serverless = require('serverless-http');
const app = express();
const bodyParser = require('body-parser');
const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://hbhrnaczdeiwuurxlgqx.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhiaHJuYWN6ZGVpd3V1cnhsZ3F4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzI0Nzc0MjcsImV4cCI6MTk4ODA1MzQyN30.BvjLI7juNfVG-B0i72Bs-p5kalWSYjGOU94DjItMWzo');
const router = express.Router();


router.get('/', (req, res) => {
  supabase.from('users').select().then((data, _) => {
    res.status(200).send(data)

  })
});

app.use('/.netlify/functions/server', router);  // path must route to lambda
app.use('/', (req, res) => res.sendFile(path.join(__dirname, '../index.html')));

module.exports = app;
module.exports.handler = serverless(app);