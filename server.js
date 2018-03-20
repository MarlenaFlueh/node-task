const express = require('express');
const app = express();
const hbs = require('hbs');

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.render('home.hbs', {
    pageTitle: 'Home',
    greeting: 'Welcome to this site!',
    currentYear: new Date().getFullYear()
  });
});

app.get('/person', (req, res) => {
  res.send({
    name: 'Liam',
    hobbies: ['coding', 'cuddling'],
  });
});

app.get('/about', (req, res) => {
  res.render('about.hbs', {
    nameOfPerson: 'Sting',
    currentYear: new Date().getFullYear()
  })
});

app.get('/bad', (req, res) => {
  res.send({
    error: 'not found'
  });
});

app.listen(3000, () => {
  console.log('server is running on port 3000');
});
