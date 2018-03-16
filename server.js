const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('hello world');
});

app.get('/person', (req, res) => {
  res.send({
    name: 'Liam',
    hobbies: ['coding', 'cuddling'],
  });
});

app.get('/bad', (req, res) => {
  res.send({
    error: 'not found'
  });
});

app.listen(3000);
