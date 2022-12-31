'use strict';
const express = require('express');
const path = require('path');
const serverless = require('serverless-http');
const app = express();
const bodyParser = require('body-parser');
const router = express.Router();

//superbase

const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://hbhrnaczdeiwuurxlgqx.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhiaHJuYWN6ZGVpd3V1cnhsZ3F4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzI0Nzc0MjcsImV4cCI6MTk4ODA1MzQyN30.BvjLI7juNfVG-B0i72Bs-p5kalWSYjGOU94DjItMWzo');




app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // search for a user with the matching username and password
  const query = `SELECT * FROM users WHERE username = '${username}' AND password = '${password}'`;
  supabase
    .from('users').select().eq('username', username).then((data, err) => {
      res.send({ message: `Welcome, ${username}!` })
    })
  // client.query(query, (err, result) => {
  //   if (err) {
  //     res.status(500).send({ message: 'Error logging in' });
  //   } else {
  //     if (result.rowCount === 0) {
  //       res.status(401).send({ message: 'Invalid username or password' });
  //     } else {
  //       // generate signed access and refresh tokens
  //       const accessToken = jwt.sign({ username }, 'secretkey', { expiresIn: '1h' });
  //       const refreshToken = jwt.sign({ username }, 'secretkey', { expiresIn: '7d' });

  //       // store the refresh token in the database
  //       const expiration = new Date();
  //       expiration.setDate(expiration.getDate() + 7);
  //       const query = `INSERT INTO sessions (user_id, token, expiration) VALUES (${result.rows[0].id}, '${refreshToken}', '${expiration.toISOString().slice(0, 19).replace('T', ' ')}')`;
  //       console.log(query)
  //       client.query(query, (err) => {
  //         if (err) {
  //           res.status(500).send({ message: 'Error storing refresh token' });
  //         } else {
  //           // set the refresh token as an HTTP-only cookie
  //           res.cookie('refresh_token', refreshToken, { httpOnly: true });
  //           // return the access token to the client
  //           res.send({ message: `Welcome, ${username}!`, accessToken });
  //         }
  //       });
  //     }
  //   }
  // });
});

// app.get('/test', checkJwt, (req, res) => {
//   res.status(200).send({ message: 'Success' });
// })

// // create a logout route
// app.post('/logout', checkJwt, (req, res) => {
//   const { token } = req.headers
//   const query = `Select * from sessions where token = '${token}'`
//   console.log(query)
//   client.query(query, (err, result) => {
//     if (err) {
//       res.status(500).send({ message: 'Server is error' })
//     }
//     else {
//       if (result.rowCount > 0) {
//         client.query(`Delete from sessions where token = '${token}'`, (err, result) => {
//           if (err) {
//             res.status(500).send({ message: 'Server is error' })
//           } else {
//             res.status(200).send({ message: 'Logout success' })
//           }
//         })
//       } else {
//         res.status(500).send({ message: 'Token is invalid' })
//       }
//     }
//   })
// });

// app.post('/register', checkJwt, (req, res) => {
//   const { username, password } = req.body
//   const query = `Select * from users where username = '${username}'`
//   client.query(query, (err, result) => {
//     if (err) {
//       res.status(500).send({ message: 'Server is error' })
//     }
//     else {
//       if (result.rowCount > 0) {
//         res.status(500).send({ message: 'Username is existed' })
//       } else {
//         const registerQuery = `INSERT INTO users (username, password) VALUES ('${username}', '${password}')`
//         client.query(registerQuery, (err, result) => {
//           if (err) {
//             res.status(500).send({ message: 'Server is error' })
//           } else {
//             res.status(200).send({ message: 'Register is success' })
//           }
//         })
//       }
//     }
//   })
// })



app.use(bodyParser.json());
app.use('/.netlify/functions/server', router);  // path must route to lambda (express/server.js)




module.exports = app;
module.exports.handler = serverless(app);
