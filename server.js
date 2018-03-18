const express = require('express');
const app = express();

app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.send('hello world');
});

app.get('/person', (req, res) => {
  res.send({
    name: 'Liam',
    hobbies: ['coding', 'cuddling'],
  });
});

app.get('/about', (req, res) => {
  res.render('about.hbs')
});

app.get('/bad', (req, res) => {
  res.send({
    error: 'not found'
  });
});

app.listen(3000, () => {
  console.log('server is running on port 3000');
});
