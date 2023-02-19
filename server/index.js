const express = require('express');
const db = require('./config/db');
const cors = require('cors');

const app = express();

const PORT = 8081;

app.use(cors());
app.use(express.json());

/* ######################### */
/* ##### Lon Chanhta ####### */    
/* ######################### */
// route to get all hero items
app.get('/api/heroitem', function (req, res) {
  db.query('select * from hero_item where published = 1', (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});

// route to get all banner items
app.get('/api/banneritem', function (req, res) {
  db.query('select * from banner_item where published = 1', (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});

// route to get all instagram
app.get('/api/instagram', function (req, res) {
  db.query('select * from instagram where published = 1', (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});

/* ######################### */
/* ##### Sa Khorteat ####### */    
/* ######################### */
// create product shop
app.get('/api/product', function (req, res)
{
  db.query('select * from shop', (err, result)=>{
    if (err){
      console.log(err);
    }
    res.send(result);
  });
});

// create product shop details
app.get('/api/getshop/:id',function (req, res){
  const id = req.params.id;
  db.query('select * from shop where id = ?', id, (err, result)=>{
    if (err){
      console.log(err);
    }
    res.send(result);
  });
});

/* ######################### */
/* ### Keo Titsophearom #### */    
/* ######################### */


/* ######################### */
/* ####### Kem Vann ######## */    
/* ######################### */
// route to get contact
app.get('/api/contact', function (req, res) {
  db.query('select * from contact where published = 1', (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});

// route to get about
app.get('/api/about', function (req, res) {
  db.query('select * from about where published = 1', (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});

// route for storage image on server
app.use(express.static("public"));

app.listen(PORT, function () {
  console.log(`Server is running on ${PORT}`);
});
