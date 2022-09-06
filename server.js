'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const fccTesting = require('./freeCodeCamp/fcctesting.js');
const app = express();
const bcrypt = require('bcrypt');
fccTesting(app);
const saltRounds = 12;
const myPlaintextPassword = 'sUperpassw0rd!';
const someOtherPlaintextPassword = 'pass123';

//START_ASYNC -do not remove notes, place code between correct pair of notes.
bcrypt.hash('passw0rd!', saltRounds, (err, hash) => {
  /*Store hash in your db*/
  console.log(hash);
  bcrypt.compare('passw0rd!', hash, (err, res) => {
    /*res == true or false*/
    console.log(res);
  });
});
//END_ASYNC

//START_SYNC

//END_SYNC

app.listen(process.env.PORT || 3000, () => {});
