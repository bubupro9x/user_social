'use strict';
const express = require('express');
const path = require('path');
const serverless = require('serverless-http');
const app = express();
const bodyParser = require('body-parser');
const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://hbhrnaczdeiwuurxlgqx.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhiaHJuYWN6ZGVpd3V1cnhsZ3F4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzI0Nzc0MjcsImV4cCI6MTk4ODA1MzQyN30.BvjLI7juNfVG-B0i72Bs-p5kalWSYjGOU94DjItMWzo');



app.get('/', (req, res) => {
  res.status(201).send({ message: "hello world" })
});


app.use(bodyParser.json());



module.exports = app;
module.exports.handler = serverless(app);
