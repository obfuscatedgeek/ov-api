require('dotenv').config();

const express = require('express');
const body_parser = require('body-parser');
const morgan = require('morgan');

const db = require('./models');

const api = require('./routes/api');
const users = require('./routes/users');

const app = express();
db.init();

app.use(morgan('combined'));
app.use(body_parser.json());

app.use('/api', api);
app.use('/v1/users', users);

app.listen(process.env.PORT || 4500, (err) => {
  if (err) throw err;
  console.log('> API running on 4500');
})
