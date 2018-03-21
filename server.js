const express = require('express');
const app = express();
const hbs = require('hbs');
const fs = require('fs');

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

hbs.registerHelper('toUpper', (text) => text.toUpperCase());

hbs.registerHelper('getCurrentYear', () => new Date().getFullYear());

app.use((req, res, next) => {
  const now = new Date().toString();
  const log = `${now}: ${req.method} ${req.url}`;
  
  fs.appendFile('server.log', log + '\n');
  console.log(log);
  
  next();
});

// app.use((req, res, next) => {
//   res.render('maintenance.hbs');
// });

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.render('home.hbs', {
    pageTitle: 'Home',
    greeting: 'Welcome to this site!',
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
