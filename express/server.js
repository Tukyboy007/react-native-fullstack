'use strict';
const express = require('express');
const path = require('path');
const serverless = require('serverless-http');
const app = express();
const bodyParser = require('body-parser');

const router = express.Router();
router.get('/', (req, res) => {
  res.send('HelLObITCH')
});


app.get('/', (req,res) => {
  res.send('HelLObITCH')
})


module.exports = app;
module.exports.handler = serverless(app);
