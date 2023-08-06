const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello World!' });
});

// For Invalid URL
app.use('*', (req, res) => {
  res.status(400).json({
    message: 'Invalid URL',
  });
});

module.exports = app;
