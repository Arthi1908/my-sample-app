const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from Arthi\'s Node App!');
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:5000');
});
