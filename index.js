const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello Universe!');
});

app.listen(3005, () => {
  console.log('Express server running on port 3005');
});