const express = require('express');



const app = express();
   app.use(express.static(__dirname + '/views'));
   app.use(express.static(__dirname + '/static'));
   app.set('view engine', 'ejs');

app.get('/', (req,res) => {
    res.render('pages/index');
  });

  app.get('/search', (req,res) => {
    res.render('pages/search_result');
  });
  app.get('/cart', (req,res) => {
    res.render('pages/cart');
  });

  app.get('/register', (req,res) => {
    res.render('pages/register'); 
  });

  app.get('/login', (req,res) => {
    res.render('pages/login');
  });
  app.get('/brand', (req,res) => {
    res.render('pages/brand');
  });
  app.get('/brand_detail', (req,res) => {
    res.render('pages/brand_detail');
  });

  
  // PORT
const port = process.env.PORT || 3000
app.listen(port, () => console.log(`listensing ${port}`));