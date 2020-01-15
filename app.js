const express = require('express');
const app = express();
const setupFile = require('./knexfile').development

var knex = require('knex')({
  client: setupFile.client,
  connection: setupFile.connection,
  pool: { min: 0, max: 7 }
})

var bodyParser = require('body-parser')
var urlencodedParser = bodyParser.urlencoded({ extended: true })
app.use(express.urlencoded());

const path = require('path');
app.use(express.static(__dirname + '/views')) // html is a static file

app.get('/', (req, res) => {
    res.send("To use this website, use /showall")
});

app.get('/showall', (req, res) => {
    knex('entries').select('*')
    .then(function(activities) {
        res.status(200).json(activities);
      })
      .catch(function(error) {
        next(error);
      });
});

app.get('/add', (req, res) => {
  res.sendFile(path.join(__dirname + '/views/add.html'))
})

app.post('/added', urlencodedParser, (req, res, next) => {
  const entry = {activity: req.body.activity, description: req.body.description, location: req.body.location}  
  knex('entries')
  .insert(entry, 'id')
  .then(function (){
      res.redirect('/showAll')
  })
  .catch(function(error) {
      next(error);
    });
  console.log(entry)
})

app.listen(3000, () => console.log("listening on port 3000" ));

module.exports = app;