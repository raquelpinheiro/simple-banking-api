const express = require('express');
const bodyparser = require('body-parser');
const accountRoutes = require('./routes/accountRoutes');

const app = express();

app.use(bodyparser.json());
app.use(accountRoutes);

app.use((error, req, res, next) => {
  let statusCode = !error.statusCode;
  if (!statusCode) statusCode = 500;
  res.status(statusCode).json({ message: error.message });
});

app.listen(5001);
